import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import favicon from "../favicon.png";
import "./globals.css";

// const mona = localFont({
//   src: [
//     {
//       path: "./Mona-Sans-LightWide.ttf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "./Mona-Sans-MediumWide.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "./Mona-Sans-BoldWide.ttf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-mona",
// });

const sfPro = localFont({
  src: "./SF-Pro.ttf",
  variable: "--font-mona",
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={sfPro.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="-QKRvd7-p6MLOV-f9k66HH_c-pyIvALPTOPKHD2Sghk"
        />
        <link rel="shortcut icon" href={favicon.src} sizes="any" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="(H)ERITAGE Magazine | Innovations en médecine esthétique & anti-âge"
        />
        <meta property="og:site_name" content="(H)ERITAGE Magazine" />
        <meta
          property="og:description"
          content="(H)ERITAGE Magazine. Média premium dédié à l'innovation en chirurgie, médecine et dermatologie esthétique. Découvrez (H)ERITAGE Magazine"
        />
        <meta
          property="og:image"
          content="https://magazine-heritage.com/magazine-innovation-sante.jpg"
        />
        <meta property="og:url" content="https://magazine-heritage.com/fr" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="(H)ERITAGE Magazine | Innovations en médecine esthétique & anti-âge"
        />
        <meta
          name="twitter:description"
          content="(H)ERITAGE Magazine. Média premium dédié à l'innovation en chirurgie, médecine et dermatologie esthétique. Découvrez (H)ERITAGE Magazine"
        />
        <meta
          name="twitter:image"
          content="https://magazine-heritage.com/magazine-innovation-sante.jpg"
        />
      </head>
      <body>
        <GoogleAnalytics gaId="G-WPVQNN32N0" />
        <Header />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
