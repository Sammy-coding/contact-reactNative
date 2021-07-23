import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import colors from '../../../assets/theme/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useState} from 'react';

const Message = ({
  message,
  primary,
  danger,
  info,
  success,
  style,
  retry,
  retryFn,
  onDismiss,
}) => {
  const getBackgroundColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (info) {
      return colors.secondary;
    }
    if (success) {
      return colors.success;
    }
    if (danger) {
      return colors.danger;
    }
  };

  const [userDismissed, setDismissed] = useState(false);
  return (
    <>
      {userDismissed ? null : (
        <TouchableOpacity
          style={[
            styles.wrapper,
            style,
            {backgroundColor: getBackgroundColor()},
          ]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                color: colors.white,
              }}>
              {message}
            </Text>
            {retry && !typeof onDismiss === 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text style={{color: colors.white}}>Retry</Text>
              </TouchableOpacity>
            )}

            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  onDismiss();
                  setDismissed(true);
                }}>
                <Text style={{color: colors.white}}>X</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
