// In the name of ALLAH!
// Mahdi Salehi

import React, { useContext, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Register from './components/Register';
import Table from './components/Table';
import { UserContext } from '../../context/UserProvider';


const Main: React.FC = () => {
  const { values: { tableIsShown } } = useContext(UserContext)

  return (
    <ScrollView style={styles.container}>
      <Register />
      {tableIsShown &&
        <Table />
      }
    </ScrollView>
  )
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffebee',
  },
})


export default Main