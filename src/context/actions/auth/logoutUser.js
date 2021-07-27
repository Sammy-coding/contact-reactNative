import axios from './../../../helpers/axiosInterceptor';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import {LOGOUT_USER} from './../../../constants/actionTypes/index';

export default () => (dispatch) => {
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('token');
  dispatch({
    type: LOGOUT_USER,
  });
};
