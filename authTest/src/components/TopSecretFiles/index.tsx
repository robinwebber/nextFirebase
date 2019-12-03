import React from "react";
import { NextPage } from "next";
import { connect } from "react-redux";
import { AppState } from "../../redux/reducers";

// Components
import Layout from "../Layout";

// Types
type TopSecretFilesProps = {
  title: string;
  body: string;
};

const styles = {
  fontSize: "8px"
};

const TopSecretFiles: NextPage<TopSecretFilesProps> = props => {
  const { title, body } = props;
  return (
    <Layout>
      <h1>Super top secret documents.</h1>
      <h4>{title}</h4>
      <p>{body}</p>
      <p style={styles}>burn after reading</p>
    </Layout>
  );
};

const mapStateToProps = (state: AppState) => ({
  title: state.topSecretFilesReducer.title,
  body: state.topSecretFilesReducer.body
});
export default connect(mapStateToProps)(TopSecretFiles);
