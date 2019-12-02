import App, { Container, AppContext } from "next/app";
import React from "react";
import Head from "next/head";

interface IAppProps {}

class MyApp extends App<IAppProps> {
  static async getInitialProps({ Component, router, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Top-Secret</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
