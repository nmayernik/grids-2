import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Nick Mayernik</title>
        <meta
          name="Description"
          content="UX Researcher & Designer based in PA."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
