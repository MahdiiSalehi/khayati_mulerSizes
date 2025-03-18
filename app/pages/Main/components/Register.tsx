// In the name of ALLAH!
// Mahdi Salehi

import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, I18nManager, Alert } from 'react-native';
import { TextInput, Button, Portal, Dialog, Paragraph } from 'react-native-paper';

import { UserContext } from '../../../context/UserProvider';
import { insertNewUser } from '../../../db/users/create';
import { updateUser } from '../../../db/users/update';

// Enable RTL layout
I18nManager.forceRTL(true);
I18nManager.allowRTL(true);


interface InputInfo {
  label: string,
  value: number,
  onChangeText: (val : string) => void 
}


const Register: React.FC = ({

}) => {

  const [id, setId] = useState<number | null>(null);
  const [name, setName] = useState<string>('');
  const [bust, setBust] = useState<number>(0);
  const [waist, setWaist] = useState<number>(0);
  const [hips, setHips] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const [isDialogVisible, setDialogVisible] = useState<boolean>(false)

  const inputs : InputInfo[] = [
    { label: 'دور سینه', value: bust, onChangeText: val => setBust(+val) },
    { label: 'دور کمر', value: waist, onChangeText: val => setWaist(+val) },
    { label: 'دور باسن', value: hips, onChangeText: val => setHips(+val) },
    { label: 'تمام قد', value: height, onChangeText: val => setHeight(+val) },
  ]

  const { values, setValues } = useContext(UserContext)


  useEffect(() => {
    if (values.id === null) {
      return
    }

    setId(values.id)
    setName(values.name)
    setBust(values.bust)
    setWaist(values.waist)
    setHips(values.hips)
    setHeight(values.height)
  }, [])


  const register = () => {
    let nums = [
      bust,
      waist,
      hips,
      height,
    ]


    // Check Validation
    if (name === '') {
      setDialogVisible(true)
      return
    }

    for (let num of nums) {
      if (num === 0) {
        setDialogVisible(true)
        return
      }
    }
    
    setValues({
      id,
      name,
      bust,
      waist,
      hips,
      height,
      tableIsShown: true,
    })

    if (id === null) {
      insertNewUser(name, nums)
    } else {
      updateUser(id, name, nums)
    }


    console.warn("Reg is success!")
  }

  return (
    <View style={styles.container}>
      <TextInput
        label="نام"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <View style={styles.grid}>
        {
          inputs.map((info) => (
            <TextInput
              label={info.label}
              value={`${info.value || ''}`}
              onChangeText={info.onChangeText}
              style={[styles.numberInput]}
              keyboardType="numeric"
              key={info.label}
            />
          ))
        }
      </View>
      <Button mode="contained" onPress={register} style={styles.button}>
        محاسبه
      </Button>

      <Portal>
        <Dialog visible={isDialogVisible} onDismiss={() => setDialogVisible(false)}>
          <Dialog.Title>خطا در محاسبه</Dialog.Title>
          <Dialog.Content>
            <Paragraph>لطفا اطلاعات را به درستی وارد کنید.</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setDialogVisible(false)}>باشه</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 12,
    textAlign: 'right', // Align text to the right for RTL
    direction: 'rtl', // Set direction to RTL
    backgroundColor: '#ccffcc',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 6,
  },
  numberInput: {
    width: '48%',
    marginBottom: 6,
    textAlign: 'center', // Align text to the right for RTL
    direction: 'rtl', // Set direction to RTL
    backgroundColor: '#ffeb99',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#ff4081',
  },
});

export default Register;
