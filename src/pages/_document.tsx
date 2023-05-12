import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="jednodnevni izlet iz Zagreba, Zagorje, Istra, što posjetiti u Istri, Pula, Rim putovanje, Prag putovanje, budget travel blog, budget, travel, blog"
        />
        <meta name="description" content="Savjeti za budget putovanja!" />
        <meta name="author" content="Jakov Knežević & Ema Belošević" />
        <link rel="canonical" href="https://plahutica.vercel.app/" />
        <meta
          name="google-site-verification"
          content="_NncHz24yni_gPGd22214uhUbIg-8jdRGHTAaPEMECc"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Budget travel blog" />
        <meta
          property="og:description"
          content="Savjeti za budget putovanja!"
        />
        <meta property="og:image" content="/search-engine-bg.webp" />
        <meta property="og:url" content="https://plahutica.vercel.app/" />
        <meta property="og:site_name" content="Budget travel blog" />
        <meta name="twitter:title" content="Budget travel blog" />
        <meta
          name="twitter:description"
          content="Savjeti za budget putovanja!"
        />
        <meta name="twitter:image" content="/search-engine-bg.webp" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
