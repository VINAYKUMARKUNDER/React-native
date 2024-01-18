import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


// screen
import Home from './components/Home';
import Details from './components/Details';


export type RootStackParamList ={
  Home:undefined,
  Details: {ProductId:string}
}


const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
      >
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title:'home page'
        }}
        >
        </Stack.Screen>


        <Stack.Screen
        name='Details'
        component={Details}
        options={{
          title:'deatils page'
        }}
        >
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    textAlign:'center'
  }
})