import React from 'react';
import {Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Input from './../common/Input/index';
import Container from './../common/index';
import CustomButton from './../common/CustomButton/index';
import styles from './styles';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Message';

const LoginComponent = ({onSubmit, onChange, form, error, loading}) => {
  const navigate = useNavigation();

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
        <Text style={styles.subtitle}>Please LogIn</Text>

        <View style={styles.form}>
          {error && !error.error && (
            <Message
              danger
              onDismiss={() => {}}
              message="invalid credentials"
            />
          )}
          {error?.error && <Message danger onDismiss message={error?.error} />}

          <Input
            label="Username"
            iconPosition="right"
            placeholder="enter username"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />

          <Input
            label="Password"
            placeholder="Enter password"
            icon={<Text>SHOW</Text>}
            secureTextEntry={true}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />

          <CustomButton
            disabled={loading}
            loading={loading}
            onPress={onSubmit}
            title="Submit"
            primary
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkButton}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
