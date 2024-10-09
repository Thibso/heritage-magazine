import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import SliderCards from "../components/SliderCards";
import SliderCardsEN from "../components/SliderCardsEN";

import BrandOfTheMonth from "../components/brandOfTheMonth";
import Button from "../components/buttons/Button";
import "./globals.css";

const sfPro = localFont({
  src: "./SF-Pro.ttf",
  variable: "--font-sfPro",
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
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
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
        <Header locale={locale} />
        <BrandOfTheMonth />

        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster />
        </NextIntlClientProvider>

        {/* Slider */}
        <section className="overflow-hidden  m-auto bg-bgLight">
          <div className="myContainer max-w-screen-xl m-auto flex flex-col items-center gap-8 lg:gap-16 lg:pb-[70px]">
            <div className="text-center">
              <h2 className="h2 text-mainBlue">
                {locale === "fr"
                  ? "Heritage un Magazine dédié aux acteurs de l'esthétique"
                  : "Heritage a Magazine dedicated to the beauty industry"}
              </h2>
              <h3 className="h3 mt-2 lg:mt-4">
                {locale === "fr"
                  ? "L'innovation au service de l'excellence médicale"
                  : "Innovation at the service of medical excellence"}
              </h3>
            </div>

            {locale === "fr" ? <SliderCards /> : <SliderCardsEN />}
            {locale === "fr" ? (
              <Button link="/fr/publications-innovations-medecine-esthetique">
                Découvrir toutes les publications
              </Button>
            ) : (
              <Button link="/en/publications-aesthetic-medicine-innovations">
                Discover all publications
              </Button>
            )}
          </div>
        </section>

        <Footer />
      </body>
    </html>
  );
}
