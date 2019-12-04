import { createReducer } from "redux-starter-kit";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  LoginRequestAction,
  LoginSuccessAction,
  LoginFailureAction,
  LogoutRequestAction,
  LogoutSuccessAction,
  LogoutFailureAction
} from "./types";

export interface AuthReducerState {
  isLoggingIn: boolean;
  isLoggingOut: boolean;
  isVerifying: boolean;
  loginError: boolean;
  logoutError: boolean;
  isAuthenticated: boolean;
  user?: any;
}

const initialState: AuthReducerState = {
  isLoggingIn: false,
  isLoggingOut: false,
  isVerifying: false,
  loginError: false,
  logoutError: false,
  isAuthenticated: false,
  user: {}
};

export default createReducer<AuthReducerState>(initialState, {
  [LOGIN_REQUEST]: (state, action: LoginRequestAction) => {
    state.isLoggingIn = true;
    state.loginError = false;
  },
  [LOGIN_SUCCESS]: (state, action: LoginSuccessAction) => {
    state.isLoggingIn = false;
    state.isAuthenticated = true;
    state.user = action.user;
  },
  [LOGIN_FAILURE]: (state, action: LoginFailureAction) => {
    state.isLoggingIn = false;
    state.isAuthenticated = false;
    state.loginError = true;
  },
  [LOGOUT_REQUEST]: (state, action: LogoutRequestAction) => {
    state.isLoggingOut = true;
    state.logoutError = false;
  },
  [LOGOUT_SUCCESS]: (state, action: LogoutSuccessAction) => {
    state.isLoggingOut = false;
    state.isAuthenticated = false;
    state.user = {};
  },
  [LOGOUT_FAILURE]: (state, action: LogoutFailureAction) => {
    state.isLoggingOut = false;
    state.logoutError = true;
  }
});
