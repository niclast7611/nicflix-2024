import Head from "next/head";
import Layout from "../app/layout";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Nicflix</title>
        <meta name="Netflix Clone" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
