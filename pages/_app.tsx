import type { AppProps, AppContext } from "next/app";
import App from "next/app";
import { Layout } from "@/components/layout";
import code from "@/public/code.png";
import Head from "next/head";
import { useEffect } from "react";

const MyApp = (data: AppProps) => {
  const { Component, pageProps } = data;

  useEffect(() => {
    // @ts-ignore
    import("amfe-flexible");
  }, []);

  return (
    <div>
      <style global jsx>
        {`
          body {
            margin: 0;
            padding: 0;
          }
          div {
            flex-shrink: 0;
          }
        `}
      </style>
      <Head>
        <title>nyc-blockchain-conference-website</title>
        <meta name="description" content="nyc-blockchain-conference-website" />
        <meta name="renderer" content="webkit" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        ></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp;
