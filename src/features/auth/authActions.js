import { SIGN_OUT_USER, SIGN_IN_USER } from './AuthConstants';

export function signInUser(payload) {
  return {
    type: SIGN_IN_USER,
    payload,
  };
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER,
  };
}
