import React from "react";
import { NextPage } from "next";
import { connect } from "react-redux";
import { AppState } from "../../redux/reducers";

// Components
import Layout from "../Layout";

const About: NextPage = () => {
  return (
    <Layout>
      <h1>We do top secret stuff. Need to know basis only.</h1>
    </Layout>
  );
};

const mapStateToProps = (state: AppState) => ({
  user: state.authReducer.user
});

export default connect(mapStateToProps)(About);
