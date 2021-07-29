import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../common';
import Icon from '../common/Icon';
import AppModal from './../common/AppModal/index';

const SettingsComponent = ({
  settingsOptions,
  modalVisible,
  setModalVisible,
  prefArr
}) => {
  return (
    <>
      <AppModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        closedOnTouchOutside={false}
        title="Sort by"
        modalBody={<View>
            {prefArr.map((name, onPress, selected, index) => (
                <TouchableOpacity key={name} onPress={onPress} style={{flexDirection:'row', alignItems: 'center'}}>
                    {selected && <Icon name="check" size={17} />}
                    <Text style={{fontSize: 17, paddingLeft:15}}>{name}</Text>
                </TouchableOpacity>
            ))}
        </View>}
        modalFooter={<></>}
      />
      <ScrollView style={{backgroundColor: colors.white}}>
        {settingsOptions.map(({title, onPress, subTitle, index}) => (
          <TouchableOpacity key={index} onPress={onPress}>
            <View
              style={{
                paddingHorizontal: 20,
                paddingBottom: 20,
                paddingTop: 20,
              }}>
              <Text style={{fontSize: 17}}>{title}</Text>
              {subTitle && (
                <Text style={{fontSize: 14, opacity: 0.7, paddingTop: 5}}>
                  {subTitle}
                </Text>
              )}
            </View>

            <View style={{height: 0.5, backgroundColor: colors.grey}} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default SettingsComponent;
