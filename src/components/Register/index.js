import React from 'react';
import {View, Text, Image} from 'react-native';
import {LOGIN} from './../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Input from './../common/Input/index';
import Container from './../common/index';
import CustomButton from './../common/CustomButton/index';
import styles from './styles';
import Message from '../common/Message';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  loading,
  error,
  errors,
}) => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logoforcon.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to RnContacts</Text>
        <Text style={styles.subtitle}>Create a free account</Text>

        <View style={styles.form}>
          {error?.error && (
            <Message
              danger
              message={error?.error}
              retry
              retryFn={() => {
                console.log(222);
              }}
            />
          )}
          <Input
            label="Username"
            iconPosition="right"
            placeholder="enter username"
            error={errors.userName || error?.userName?.[0]}
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />

          <Input
            label="First Name"
            iconPosition="right"
            placeholder="Enter Your First Name"
            error={errors.firstName || error?.first_name?.[0]}
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName}
          />

          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Your Last Name"
            error={errors.lastName || error?.last_name?.[0]}
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
          />

          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Your Email"
            error={errors.email || error?.email?.[0]}
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
          />

          <Input
            label="Password"
            placeholder="Enter password"
            icon={<Text>SHOW</Text>}
            secureTextEntry={true}
            iconPosition="right"
            error={errors.password || error?.password?.[0]}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />

          <CustomButton
            title="Submit"
            loading={loading}
            disabled={loading}
            primary
            onPress={onSubmit}
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkButton}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
