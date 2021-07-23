import axios from './../../../helpers/axiosInterceptor';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from './../../../constants/actionTypes/index';

export default ({password, userName: username}) =>
  dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    });
    axios
      .post('auth/login', {
        password,
        username,
      })
      .then(res => {
        AsyncStorage.setItem("token", res.data.token);
        AsyncStorage.setItem("token", JSON.stringify(res.data.user));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'something went wrong'},
        });
        console.log(err.message);
      });
  };
