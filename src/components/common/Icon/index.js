import React from 'react';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import Octicon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/IonIcons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FAIcon5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const getFontIcon = type => {
  switch (type) {
    case 'fontisto':
      return Fontisto;

    case 'zocialIcon':
      return ZocialIcon;

    case 'octicon':
      return Octicon;

    case 'materialIcon':
      return MaterialIcon;

    case 'ionIcon':
      return IonIcon;

    case 'foundation':
      return FoundationIcon;

    case 'evil':
      return EvilIcon;

    case 'entypo':
      return EntypoIcon;

    case 'FA':
      return FAIcon;

    case 'FA5':
      return FAIcon5;

    case 'simple':
      return SimpleLineIcon;

    case 'ant':
      return AntDesign;

    case 'feather':
      return Feather;

    default:
      return FAIcon;
  }
};
const Icon = ({type, ...props}) => {
  const FontIcon = getFontIcon(type);

  return <FontIcon {...props} />;
};

export default Icon;
