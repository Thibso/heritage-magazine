import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
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
      <body>
        <Header />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
