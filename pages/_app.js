import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link
          rel="preload"
          href="fonts/oi-regular.woff2"
          as="font"
          type="font/woff2"
      />
    </Head>
    <Component {...pageProps} /></>
}

export default MyApp
