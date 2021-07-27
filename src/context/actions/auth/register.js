import axios from './../../../helpers/axiosInterceptor';
import {
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from './../../../constants/actionTypes/index';

export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({
    email,
    password,
    userName: username,
    firstName: first_name,
    lastName: last_name,
  }) =>
  dispatch =>
  onSuccess => {
    dispatch({
      type: REGISTER_LOADING,
    });
    axios
      .post('auth/register', {
        email,
        password,
        first_name,
        last_name,
        username,
      })
      .then(res => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'something went wrong'},
        });
        console.log(err.message);
      });
  };
