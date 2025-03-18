// In the name of ALLAH!
// Mahdi Salehi


import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import { Card, Title, Paragraph, Button, Portal, Dialog } from 'react-native-paper';

import { getAllUsers, type User } from '../../db/users/read'
import { deleteUser } from '../../db/users/delete';
import { UserContext } from '../../context/UserProvider';
import { useNavigation } from '@react-navigation/native';


const Users : React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isDialogVisible, setDialogVisible] = useState<boolean>(false);

  const { setValues } = useContext(UserContext)

  const navigation = useNavigation()

  const showUser = (id : number) => {
    let selectedUser = users.find(user => user.id === id)!

    let newValues = {
      id: id,
      name: selectedUser.name,
      bust: selectedUser.nums[0],
      waist: selectedUser.nums[1],
      hips: selectedUser.nums[2],
      height: selectedUser.nums[3],
      tableIsShown: true,
    }

    setValues(newValues)

    
    navigation.navigate("Main")
  }


  const confirmDeleteUser = (id: number) => {
    setSelectedUserId(id);
    setDialogVisible(true);
  };


  const removeUser = () => {
    if (selectedUserId !== null) {
      deleteUser(selectedUserId)
        .then(res => {
          if (res.success) {
            setUsers(users.filter(user => user.id !== selectedUserId))
          } else {
            console.warn(`deletion by id(${selectedUserId}) failed!`)
          }
  
          setDialogVisible(false)
        })
    }
  }


  useEffect(() => {
    getAllUsers()
      .then(data => setUsers(data))
  }, [])


  return (
    <ScrollView style={styles.container}>
      {users.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>هیج اندازه ای ثبت نشده است</Text>
        </View>
      ) : (
        users.map(user => (
          <Card key={user.id} style={styles.card}>
            <Card.Content>
              <Title>{user.name}</Title>
              <Paragraph>آخرین تغییر:  {user.updatedAt}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" onPress={() => showUser(user.id)} style={styles.button}>
                نمایش
              </Button>
              <Button mode="outlined" onPress={() => confirmDeleteUser(user.id)} style={styles.button}>
                حذف
              </Button>
            </Card.Actions>
          </Card>
        ))
      )}

        <Portal>
          <Dialog visible={isDialogVisible} onDismiss={() => setDialogVisible(false)}>
            <Dialog.Title>تایید حذف</Dialog.Title>
            <Dialog.Content>
              <Paragraph>آیا از حذف مطمئن هستید؟</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setDialogVisible(false)}>لفو</Button>
              <Button onPress={removeUser}>حذف</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  button: {
    marginRight: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
});


export default Users