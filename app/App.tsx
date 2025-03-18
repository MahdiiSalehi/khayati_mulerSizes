// In the name of ALLAH!
// Mahdi Salehi


import React, { useEffect } from "react"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider as PaperProvider } from 'react-native-paper';

import Main from "./pages/Main/Main"
import Users from "./pages/Users/Users"
import Home from "./pages/Home/Home"

import UserProvider from "./context/UserProvider"

import { createTable } from './db/users/createTable';

import Test from "./Test"


const Stack = createNativeStackNavigator();

const App : React.FC = () => {
  useEffect(createTable, []);

  return (
    <PaperProvider>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Users" component={Users} />
            <Stack.Screen name="Main" component={Main} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </PaperProvider>
  )
}


export default App