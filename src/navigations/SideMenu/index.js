import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SETTINGS} from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';
import Container from './../../components/common/index';
import styles from './styles';
import Icon from './../../components/common/Icon/index';

const SideMenu = ({navigation, authDispatch}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('logout!', 'Are you sure you want to log out?', [
      {
        text: 'cancel',
        onPress: () => {},
      },
      {
        text: 'confirm',
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };
  const menuItems = [
    {
      icon: <Icon type="fontisto" name="player-settings" size={17} />,
      name: 'settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Icon type="materialIcon" name="logout" size={17} />,
      name: 'logout',
      onPress: () => {
        handleLogout;
      },
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logoforcon.png')}
          style={styles.logoImage}
        />
        <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({icon, name, onPress}) => (
            <TouchableOpacity key={name} onPress={onPress} style={styles.item}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
