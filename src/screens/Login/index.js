import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState, useContext} from 'react';
import loginUser from '../../context/actions/auth/loginUser';
import LoginComponent from './../../components/Login/index';
import {GlobalContext} from './../../context/Provider';

const Login = () => {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };
  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
