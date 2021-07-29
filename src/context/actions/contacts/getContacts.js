import axios from './../../../helpers/axiosInterceptor';
import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from './../../../constants/actionTypes/index';

export default () => dispatch => {
  dispatch({
    type: GET_CONTACTS_LOADING,
  });

  axios
    .get('/contacts/')
    .then(response => {
      dispatch({
        type: GET_CONTACTS_SUCCESS,
        payload: response.data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_CONTACTS_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong'},
      });
    });
};
