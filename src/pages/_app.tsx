import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";

// Context
import { AppWrapper } from "context/state";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AppWrapper>
      <Component {...pageProps} height={"auto"} width={"auto"} />
    </AppWrapper>
  );
};

export default MyApp;
