import React from 'react';
import {
  CREATE_CONTACT_FAIL,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../constants/actionTypes';

const contactsReducer = (state, {type, payload}) => {
  switch (type) {
    case GET_CONTACTS_LOADING:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: true,
          error: null,
        },
      };

    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_CONTACTS_FAIL:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: payload,
        },
      };

    case CREATE_CONTACT_LOADING:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          loading: true,
          error: null,
        },
      };

    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          loading: false,
          data: payload,
          error: null,
        },

        getContacts: {
          ...state.getContacts,
          loading: false,
          data: [payload, ...state.getContacts.data],
          error: null,
        },
      };

    case CREATE_CONTACT_FAIL:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};

export default contactsReducer;
