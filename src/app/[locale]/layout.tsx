import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

import BrandOfTheMonth from "../components/brandOfTheMonth";
import PopUpValidation from "../components/layout/popUpValidation";
import "../globals.css";

import { Metadata } from "next";
import { cookies } from "next/headers";
import LastPublications from "../components/layout/LastPublications";

const sfPro = localFont({
  src: "./SF-Pro.ttf",
  variable: "--font-sfPro",
});

export const metadata: Metadata = {
  // robots: "noindex",
  robots: {
    index: true,
    follow: true,
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  const cookieStore = await cookies();
  const hasCookie = cookieStore.has("popup");

  return (
    <html lang={locale} className={sfPro.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="-QKRvd7-p6MLOV-f9k66HH_c-pyIvALPTOPKHD2Sghk"
        />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>
        <GoogleAnalytics gaId="G-WPVQNN32N0" />

        <NextIntlClientProvider messages={messages}>
          {hasCookie ? null : <PopUpValidation locale={locale} />}

          <Header locale={locale} />
          <BrandOfTheMonth />
          {children}
          <Toaster />
          {/* Slider */}
          <LastPublications />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
