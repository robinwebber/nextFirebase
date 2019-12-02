import React from "react";
import App, { AppContext } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import initializeStore, { IStoreType } from "./redux/store";
import withRedux, { NextJSContext } from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
//import { AppState } from "./redux/reducers"; //------ For future use RW

interface IAppProps {
  store: IStoreType;
}

class MyApp extends App<IAppProps> {
  static async getInitialProps({ Component, router, ctx }: AppContext) {
    let pageProps = {};
    const { store } = (ctx as unknown) as NextJSContext;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Head>
          <title>Top-Secret</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRedux(initializeStore)(withReduxSaga(MyApp));
