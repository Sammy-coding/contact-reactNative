import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import CustomButton from './../common/CustomButton/index';
import Message from './../common/Message/index';
import styles from './style';
import Icon from './../common/Icon/index';
import {useNavigation} from '@react-navigation/native';
import {CREATE_CONTACT} from './../../constants/routeNames';

const ContactsComponents = ({modalVisible, setModalVisible, data, loading}) => {
  const {navigate} = useNavigation();
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message message="No Contact to show" info />
      </View>
    );
  };

  const renderItem = ({item}) => {
    const {contact_picture, first_name, last_name, phone_number, country_code} =
      item;
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View>
          {contact_picture ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 100}}
              source={{uri: contact_picture}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: colors.grey,
                justifyContent: 'center',
                backgroundColor: colors.grey,
                alignItems: 'center',
              }}>
              <Text style={[styles.name, {color: colors.white}]}>
                {first_name[0]}
              </Text>
              <Text style={[styles.name, {color: colors.white}]}>
                {last_name[0]}
              </Text>
            </View>
          )}

          <View style={{paddingLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{first_name}</Text>
              <Text style={styles.name}>{last_name}</Text>
            </View>
            <Text
              style={
                styles.phoneNumber
              }>{`${phone_number} ${country_code}`}</Text>
          </View>

          <Icon type="ant" name="right" size={21} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={styles.item}>
        {/* <CustomButton
        title="Show Modal"
        onPress={() => {
          setModalVisible(true);
        }}
      /> */}
        <AppModal
          modalFooter={<View></View>}
          modalBody={<View></View>}
          title="my profile"
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />

        {loading && (
          <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}
        {!loading && (
          <View style={[{paddingVertical: 20}]}>
            <FlatList
              renderItem={renderItem}
              ItemSeparatorComponent={() => (
                <View style={{height: 1, backgroundColor: colors.grey}}></View>
              )}
              data={data}
              keyExtractor={item => String(item.id)}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<View style={{height: 50}}></View>}
            />
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => navigate(CREATE_CONTACT)}>
        <Icon name="plus" size="21" type="material" color={colors.white} />
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponents;
