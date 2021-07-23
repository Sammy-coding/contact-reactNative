import React, {useEffect} from 'react';
import {useState, useContext} from 'react';
import {View, Text} from 'react-native';
import RegisterComponent from './../../components/Register/index';
import envs from '../../config/env';
import axios from './../../helpers/axiosInterceptor';
import {GlobalContext} from './../../context/Provider';
import register, { clearAuthState } from '../../context/actions/auth/register';
import {LOGIN} from './../../constants/routeNames';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);
  const {navigate} = useNavigation();

  useEffect(() => {
    if (data) {
      navigate(LOGIN);
    }
  }, [data]);

  useFocusEffect(
    React.useCallback(() => {
      if(data || error) {
        clearAuthState()(authDispatch)
      }
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {
              ...prev,
              [name]: 'Password should be at least 6 characters',
            };
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required.'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'please add a username'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'please add your first Name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'please add your last Name'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'please input password'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'please add an email address'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch);
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
