import React from "react";
import { NextPage, NextPageContext } from "next";

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

export default Home;
