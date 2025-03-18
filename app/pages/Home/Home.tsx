// In the name of ALLAH!
// Mahdi Salehi


import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { defaultValues, UserContext } from '../../context/UserProvider';

const Home : React.FC = () => {
  const navigation = useNavigation()

  const {values, setValues} = useContext(UserContext)

  const goMainPage = () => {
    setValues(defaultValues)
    navigation.navigate("Main")
  }

  const goUsersPage = () => {
    navigation.navigate("Users")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>خوش آمدید!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={goMainPage}
      >
        <Text style={styles.buttonText}>ثبت اندازه جدید</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={goUsersPage}
      >
        <Text style={styles.buttonText}>مشاهده اندازه های ثبت شده</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
