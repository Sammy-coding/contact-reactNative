import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Container from './../../components/common/index';
import {useNavigation} from '@react-navigation/native';
import Icon from './../../components/common/Icon/index';
import ContactsComponents from '../../components/ContactsComponents';
import ContactsComponents from './../../components/ContactsComponents/index';
import {GlobalContext} from './../../context/Provider';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch)
  })

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon
            type="materialIcon"
            name="menu"
            size={25}
            style={{padding: 10}}
          />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <Container>
      <ContactsComponents
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={data}
        loading={loading}
      />
    </Container>
  );
};

export default Contacts;
