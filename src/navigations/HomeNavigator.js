import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

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
    <HomeStack.Navigator initialRouteName="contacts">
      <HomeStack.Screen name="contacts" component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen
        name="contactsDeail"
        component={ContactsDetails}></HomeStack.Screen>
      <HomeStack.Screen
        name="createContacts"
        component={CreateContact}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
