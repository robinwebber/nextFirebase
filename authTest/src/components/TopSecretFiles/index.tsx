import React from "react";
import { NextPage, NextPageContext } from "next";
import { connect } from "react-redux";
import { NextJSContext } from "next-redux-wrapper";
import { AppState } from "../../redux/reducers";
import {
  getUserIdToken,
  getUser,
  loginUser
} from "../../redux/modules/auth/index";

// Components
import Layout from "../Layout";
import { bindActionCreators, Dispatch } from "redux";

// Types
type ComponentProps = {
  title: string;
  body: string;
  user: any;
};

const styles = {
  fontSize: "12px"
};
export type TopSecretFilesProps = ComponentProps & NextProps & ReducerProps;
type NextProps = {};

const TopSecretFiles: NextPage<TopSecretFilesProps, NextProps> = props => {
  const { title, body, user } = props;
  const token = getUserIdToken().then(token => {
    console.log("tk", token);
  });
  const firebaseUser = getUser();
  console.log("token", typeof token);
  console.log("firebaseUser", firebaseUser);

  return (
    <Layout>
      <h1>Super top secret documents.</h1>
      <h4>{title}</h4>
      <p>{body}</p>
      <p style={styles}>*burn after reading</p>
      {/* <p>logged in as: {user.user.email}</p> */}
    </Layout>
  );
};

TopSecretFiles.getInitialProps = async (ctx: NextPageContext) => {
  const { store } = (ctx as unknown) as NextJSContext;
  const state: AppState = store.getState();

  return {};
};

const mapStateToProps = (state: AppState) => ({
  title: state.topSecretFilesReducer.title,
  body: state.topSecretFilesReducer.body,
  user: state.authReducer.user
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ loginUser }, dispatch);
type ReducerProps = ReturnType<typeof mapStateToProps>;
export default connect(mapStateToProps, mapDispatchToProps)(TopSecretFiles);
