import React, {useContext} from 'react';
import {Text, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/Provider';
import {useEffect, useState} from 'react';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

const AppNavContainer = () => {
  const [isAutheticated, setIsAutheticated] = useState(false);
  const [authLoaded, setAuthLoadeded] = useState(false);

  const {
    authState: {isLoggenIn},
  } = useContext(GlobalContext);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');

      if (user) {
        setAuthLoadeded(true);
        setIsAutheticated(true);
      } else {
        setAuthLoadeded(true);
        setIsAutheticated(false);
      }
    } catch (e) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isLoggenIn || isAutheticated ? (
            <DrawerNavigator />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      ) : (
        ActivityIndicator
      )}
    </>
  );
};

export default AppNavContainer;
