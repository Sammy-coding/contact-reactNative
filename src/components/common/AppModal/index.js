import React from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style';
import Icon from './../Icon/index';

const AppModal = ({modalVisible, setModalVisible, title, modalBody}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        onPress={() => setModalVisible(false)}
        style={styles.wrapper}></TouchableOpacity>

      <View style={styles.modal}>
        <ScrollView>
          <View style={styles.header}>
            <Icon size={27} type="evil" name="close" />
            <Text style={styles.title}>{title || RnContacts}</Text>
          </View>
          <View />
          <View />
          <View />
          <View style={styles.body}>{modalBody}</View>
          {modalFooter}

          {!modalFooter && (
            <View>
              <>
                <View style={styles.footerSeperator} />
                <View style={styles.footerItems}>
                  <View style={styles.footer}>
                    <Text style={styles.footerText}>Privacy Policy</Text>
                    <View style={styles.termView} />
                    <Text style={styles.footerText}>Terms of Service</Text>
                  </View>
                </View>
              </>
            </View>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default AppModal;
