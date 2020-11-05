import * as actionTypes from './actionTypes';

export const authUser = () => {
  return {
    type: actionTypes.AUTH_USER,
  };
};

export const removeAuthUser = () => {
  return {
    type: actionTypes.REMOVE_AUTH_USER,
  };
};