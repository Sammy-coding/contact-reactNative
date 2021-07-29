import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import SettingsComponent from '../../components/SettingsComponent';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

const Settings = () => {
  const [email, setEmail] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  const saveSetting = (key, value) => {
    AsyncStorage.setItem(key, value);
  };

  const settingsOptions = [
    {title: 'My Info', subTitle: 'Setup your profile', onPress: () => {}},
    {title: 'Accounts', subTitle: null, onPress: () => {}},
    {
      title: 'Default account for new contacts',
      subTitle: email,
      onPress: () => {},
    },
    {
      title: 'Contacts to display',
      subTitle: 'All contacts',
      onPress: () => {},
    },
    {title: 'Name format', subTitle: 'First name', onPress: () => {}},
    {
      title: 'SortBy',
      subTitle: 'First name',
      onPress: () => {
        setModalVisible(true);
      },
    },
    {title: 'Import', subTitle: null, onPress: () => {}},
    {title: 'Export', subTitle: null, onPress: () => {}},
    {title: 'Blocked number', subTitle: null, onPress: () => {}},
  ];

  const prefArr = [
    {
      name: 'First Name',
      selected: false,
      onPress: () => {
        saveSetting('sortBy', 'First Name');
      },
    },
    {
      name: 'Last Name',
      selected: false,
      onPress: () => {
        saveSetting('sortBy', 'Last Name');
      },
    },
  ];
  const getSettings = async () => {
    const user = await AsyncStorage.getItem('user');
    setEmail(JSON.parse(user).email);

    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };
  useEffect(() => {
    getSettings();
  });
  return (
    <SettingsComponent
      settingsOptions={settingsOptions}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      prefArr={prefArr}
    />
  );
};

export default Settings;
