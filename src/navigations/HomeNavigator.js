import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CONTACT_DETAIL,
  CREATE_CONTACT,
  CONTACT_LIST,
  LOGOUT,
  SETTINGS,
} from '../constants/routeNames';

const Contacts = () => {
  return (
    <View>
      <Text>hi</Text>
    </View>
  );
};

const ContactDetail = () => {
  return (
    <View>
      <Text>conc</Text>
    </View>
  );
};

const CreateContact = () => {
  return <View></View>;
};

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen
        name={CONTACT_LIST}
        component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTACT_DETAIL}
        component={ContactDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name={CREATE_CONTACT}
        component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen
        name={SETTINGS}
        component={Settings}></HomeStack.Screen>
      <HomeStack.Screen
        name={LOGOUT}
        component={Logout}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
