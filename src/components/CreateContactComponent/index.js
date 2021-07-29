import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Container from './../common/index';
import Input from './../common/Input/index';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from './../../constants/general';
import colors from '../../assets/theme/colors';
import ImagePicker from '../common/ImagePicker';

const CreateContactComponent = ({
  form,
  onChangeText,
  onSubmit,
  error,
  loading,
  toggleValueChange,
  setForm,
  sheetRef,
  openSheet,
  closeSheet,
  onFileSelected,
  localFile,
}) => {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          source={{uri: localFile.path || DEFAULT_IMAGE_URI}}
          style={styles.imageView}
          width={150}
          height={150}
        />
        <TouchableOpacity
          onPress={() => {
            openSheet;
          }}>
          <Text style={styles.chooseImage}>Choose Image</Text>
        </TouchableOpacity>
        <Input
          label="First name"
          placeholder="Enter First Name"
          error={error?.first_name?.[0]}
          onChangeText={value => {
            onChangeText({name: firstName, value});
          }}
        />
        <Input
          label="Last name"
          placeholder="Enter Last Name"
          error={error?.last_name?.[0]}
          onChangeText={value => {
            onChangeText({name: lastName, value});
          }}
        />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={form.countryCode || undefined}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={value => {
                console.log(value);
                const phoneCode = value.callingCode[0];
                const cCode = value.cca2;
                setForm({...form, phoneCode, countryCode: cCode});
              }}
              visible
            />
          }
          iconPosition="left"
          style={{paddingLeft: 10}}
          label="Phone Number"
          error={error?.phone_number?.[0]}
          placeholder="Enter Phone Number"
          onChangeText={value => {
            onChangeText({name: phoneNumber, value});
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17}}>Add to favourite</Text>

          <Switch
            trackColor={{false: '#767577', true: colors.primary}}
            thumbColor={form.isFavourite ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={form.isFavourite}
          />
        </View>

        <CustomButton
          loading={loading}
          disabled={loading}
          primary
          title="submit"
          onPress={onSubmit}
        />
      </Container>

      <ImagePicker ref={sheetRef} onFileSelected={onFileSelected} />
    </View>
  );
};

export default CreateContactComponent;
