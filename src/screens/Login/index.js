import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {useState, useContext, useEffect} from 'react';
import loginUser from '../../context/actions/auth/loginUser';
import LoginComponent from './../../components/Login/index';
import {GlobalContext} from './../../context/Provider';

const Login = () => {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const {params} = useRoute();
  const [justSignedIn, setJustSignedIn] = useState(false);

  useEffect(() => {
    if (params?.data) {
      setForm({...form, userName: params.data.username});
      setJustSignedIn(true);
    }
  }, [params]);
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setJustSignedIn(false);
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
      form={form}
      justSignedIn={justSignedIn}
    />
  );
};

export default Login;
