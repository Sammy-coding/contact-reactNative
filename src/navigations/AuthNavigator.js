import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Login = () => {
  return (
    <View>
      <Text>Hi</Text>
    </View>
  );
};

const Register = () => {
  return (
    <View>
      <Text>Hey</Text>
    </View>
  );
};

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();

  // headeShown is used to remove header
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={REGISTER} component={Register}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
