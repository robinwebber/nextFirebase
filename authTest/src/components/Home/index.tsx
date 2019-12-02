import React from "react";
import { NextPage, NextPageContext } from "next";

type HomeProps = ComponentProps & NextProps;

type ComponentProps = {
  userAgent: string;
};

type NextProps = {};

const Home: NextPage<HomeProps, NextProps> = ({ userAgent }) => {
  return <h1>Hello World - user agent: {userAgent}</h1>;
};

Home.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Home;
