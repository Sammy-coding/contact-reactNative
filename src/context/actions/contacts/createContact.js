import axios from './../../../helpers/axiosInterceptor';
import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
} from './../../../constants/actionTypes/index';

export default form => dispatch => onSuccess => {
  const requestPayload = {
    country_code: form.phoneCode || '',
    first_name: form.firstName || '',
    last_name: form.lastName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || null,
    is_favourite: form.isFavourite || false,
  };
  dispatch({
    type: CREATE_CONTACTS_LOADING,
  });

  axios
    .post('/contacts/', requestPayload)
    .then(response => {
      dispatch({
        type: CREATE_CONTACTS_SUCCESS,
        payload: response.data,
      });
      onSuccess();
    })
    .catch(error => {
      dispatch({
        type: CREATE_CONTACTS_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong'},
      });
    });
};
