import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          height={"auto"}
          width={"auto"}
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
          height={"auto"}
          width={"auto"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap"
          rel="stylesheet"
          height={"auto"}
          width={"auto"}
        />
      </Head>
      <body>
        <Main height={"auto"} width={"auto"} />
        <NextScript height={"auto"} width={"auto"} />
      </body>
    </Html>
  );
}
