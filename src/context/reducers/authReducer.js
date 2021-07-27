import React from 'react';
import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_AUTH_STATE,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGOUT_USER,
} from './../../constants/actionTypes/index';

const authReducer = (state, {type, payload}) => {
  switch (type) {
    case REGISTER_LOADING:
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };

    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        data: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        isLoggedIn: true,
      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        error: null,
        data: null,
      };

    default:
      return state;
  }
};

export default authReducer;
