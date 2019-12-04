import React from "react";
import { NextPage, NextPageContext } from "next";
import { connect } from "react-redux";
import { AppState } from "../../redux/reducers";

// Components
import Layout from "../Layout";

type HomeProps = ComponentProps & NextProps;

type ComponentProps = {
  userAgent: string;
};

type NextProps = {};

const Home: NextPage<HomeProps, NextProps> = ({ userAgent }) => {
  return (
    <Layout>
      <h1> Totally top secret </h1>
      <p>user agent: {userAgent}</p>
    </Layout>
  );
};

Home.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

const mapStateToProps = (state: AppState) => ({
  user: state.authReducer.user
});
export default connect(mapStateToProps)(Home);
