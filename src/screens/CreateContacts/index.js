import React from 'react';
import {useState, useContext, useRef} from 'react';
import {View, Text} from 'react-native';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from './../../context/Provider';
import {useNavigation} from '@react-navigation/native';
import {CONTACT_LIST} from '../../constants/routeNames';

const CreateContact = () => {
  const [form, setForm] = useState({});
  const [localFile, setLoaclFile] = useState({});
  const {
    contactsDispatch,
    contactsState: {
      createContact: {data, error, loading},
    },
  } = useContext(GlobalContext);
  const sheetRef = useRef(null);
  const {navigate} = useNavigation();

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const onFileSelected = images => {
    closeSheet();
    setLocalFile(images);
  };

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {};
  createContact(form)(contactsDispatch)(() => {
    navigate(CONTACT_LIST);
  });

  const toggleValueChange = () => {
    setForm({...form, isFavourite: !form.isFavourite});
  };
  return (
    <CreateContactComponent
      form={form}
      onChangeText={onChangeText}
      onSubmit={onSubmit}
      setForm={setForm}
      loading={loading}
      error={error}
      toggleValueChange={toggleValueChange}
      closeSheet={closeSheet}
      openSheet={openSheet}
      sheetRef={sheetRef}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
};

export default CreateContact;
