// Analytics
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";

// Context
import { AppWrapper } from "context/state";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AppWrapper>
      <Component {...pageProps} height={"auto"} width={"auto"} />
      <Analytics />
    </AppWrapper>
  );
};

export default MyApp;
