import { AppProps } from "next/app";
import { Layout } from "@/components/layout";
import Head from "next/head";
import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/tailwind.css";

const MyApp = (data: AppProps) => {
  const { Component, pageProps } = data;

  useEffect(() => {
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
          a {
            text-decoration: none;
          }
        `}
      </style>
      <Head>
        <title>BBS.NYC | 2023</title>
        <link rel="shortcut icon" href="/v2/bbs_nyc_icon.png"></link>
        <meta
          name="description"
          content="BBS.NYC is the largest AI + Web3 Summit in NYC"
        />
        <meta name="renderer" content="webkit" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes"
        ></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp;
