import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import Container from './../../components/common/index';
import styles from './styles';

const SideMenu = ({navigation}) => {
  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logoforcon.png')}
          style={styles.logoImage}
        />
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
