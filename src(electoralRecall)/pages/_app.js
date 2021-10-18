/*
 * page: _app
 * author: Favour George
 * Date: April 9, 2020
 * Override default Next.js app behaviour
 */

import React from "react";
import App from "next/app";
import Head from "next/head";
import ThemeProvider from "../config/themes/ThemeProvider";
import { withApollo } from "../lib/apollo/withApollo";
import { CURRENT_USER } from "../lib/queries/index.gql";
import { MODE } from "../lib/constants";
import Provider from "../store/provider";

class ElectoralRecall extends App {
  static async getInitialProps({ Component, ctx, apolloClient }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    try {
      let user = await apolloClient.query({
        query: CURRENT_USER,
        variables: { random: Math.random().toString() },
      });

      console.log(user, 'user')

      if (user) {
        user = user.data.getCurrentUser;
        return {user, pageProps}
      }
    } catch (e) {
      if (ctx.res
        && ctx.req
        && !ctx.req.url.includes('/login')
        && !ctx.req.url.includes('/admin')
        && !ctx.req.url.includes('/recall')
      ) {
        ctx.res.writeHead(302, {
          Location: MODE
            ? "https://electoralrecall.ng/login"
            : "http://localhost:3000/login",
        });
        return ctx.res.end();
      }

      return { pageProps };
    }
  }

  render() {
    const { Component, pageProps, user } = this.props;

    return (
      <>
        <Head>
          <title>Electoral Recall</title>
        </Head>
        <ThemeProvider>
          <Provider {...user}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </>
    );
  }
}

export default withApollo(ElectoralRecall);
