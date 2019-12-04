// export const LOGIN_REQUEST = "LOGIN_REQUEST";
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGIN_FAILURE = "LOGIN_FAILURE";
// export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
// export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
// export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
// // export const VERIFY_REQUEST = "VERIFY_REQUEST";
// // export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  user: any;
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
}

export interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST;
}

export interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

export interface LogoutFailureAction {
  type: typeof LOGOUT_FAILURE;
}
import { myFirebase } from "../../../../firebase/firebase";
import { Dispatch } from "react";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const receiveLogin = (user: any) => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

const loginError = () => {
  return {
    type: LOGIN_FAILURE
  };
};

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

const logoutError = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  };
};

export const loginUser = (email: string, password: string) => (
  dispatch: any
) => {
  dispatch(requestLogin());
  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(loginError());
    });
};
export const getUserIdToken = async () => {
  const user = myFirebase.auth().currentUser;
  return user ? user.getIdToken() : null;
};

export const getUser = () => {
  const user = myFirebase.auth().currentUser;
  return user;
};

export const logoutUser = () => (dispatch: any) => {
  dispatch(requestLogout());
  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(logoutError());
    });
};

export const verifyAuth = () => (dispatch: any) => {
  dispatch(verifyRequest());
  myFirebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
      dispatch(receiveLogin(user));
    }
    dispatch(verifySuccess());
  });
};
