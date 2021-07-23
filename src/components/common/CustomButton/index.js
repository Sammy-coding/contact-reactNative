import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import colors from '../../../assets/theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomButton = ({
  title,
  primary,
  secondary,
  danger,
  disabled,
  loading,
  style,
  onPress,
}) => {
  const getBackgroundColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (secondary) {
      return colors.secondary;
    }
    if (danger) {
      return colors.danger;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      loading={loading}
      onPress={onPress}
      style={[styles.wrapper, style, {backgroundColor: getBackgroundColor()}]}>
      <View style={[styles.loaderSection]}>
        {loading && <ActivityIndicator color={primary ? color.secondary : colors.primary} />}

        {title && (
          <Text
            style={{
              color: disabled ? 'black' : colors.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
