import Head from "next/head";

// Analytics
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";

// Context
import { AppWrapper } from "context/state";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AppWrapper>
      <Head>
        <title key="title">Plahutica blog</title>
        <meta name="description" content="Savjeti za budget putovanja!" />
      </Head>

      <Toaster />
      <Component {...pageProps} height={"auto"} width={"auto"} />
      <Analytics />
    </AppWrapper>
  );
};

export default MyApp;
