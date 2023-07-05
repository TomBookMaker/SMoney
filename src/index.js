import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Firstpage from './screens/Firstpage';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const stack = createNativeStackNavigator();
export default function Root() {

  return (
   <NavigationContainer >
        <stack.Navigator initialRouteName="First" screenOptions={{headerShown:false}}>
               <stack.Screen name="First" component={Firstpage}/>
               <stack.Screen name="SignUp" component={SignUp}/>
               <stack.Screen name="Login" component={Login}/>
        </stack.Navigator>
   </NavigationContainer>
  )
}