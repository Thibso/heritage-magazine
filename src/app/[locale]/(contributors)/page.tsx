import DisplayCards from "@/app/components/contributors/DisplayCards";
import header from "@/app/img/contributors-heritage-magazine.jpeg";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Params = {
  params: { locale: string };
};

const titleEN = "Scientific contributors & editors | Aesthetic medicine";
const descriptionEN =
  "HERITAGE Magazine scientific contributors. Discover all the writers specialising in aesthetic and anti-ageing medicine who help shape the pages of our specialist magazine.";

const titleFR =
  "Contributeurs & rédacteurs scientifiques | Médecine esthétique";
const descriptionFR =
  "Contributeurs scientifiques HERITAGE Magazine. Découvrez tous les rédacteurs spécialistes de la médecine esthétique & anti-âge qui contribuent à façonner les pages de notre média spécialisé.";

export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  if (locale === "en") {
    return {
      title: titleEN,
      description: descriptionEN,
      authors: [{ name: "HEALTHCIE" }],
      openGraph: {
        title: titleEN,
        description: descriptionEN,
        url: "https://magazine-heritage.com/",
        siteName: "(H)ERITAGE Magazine",
        images: [
          {
            url: "https://magazine-heritage.com/magazine-innovation-sante.jpg",
            width: 800,
            height: 600,
          },
        ],
        locale: "en_US",
        type: "website",
      },
    };
  } else if (locale === "fr") {
    return {
      title: titleFR,
      description: descriptionFR,
      authors: [{ name: "HEALTHCIE" }],
      openGraph: {
        title: titleFR,
        description: descriptionFR,
        url: "https://magazine-heritage.com/",
        siteName: "(H)ERITAGE Magazine",
        images: [
          {
            url: "https://magazine-heritage.com/magazine-innovation-sante.jpg",
            width: 800,
            height: 600,
          },
        ],
        locale: "fr_FR",
        type: "website",
      },
    };
  }
}

export default function About() {
  const t = useTranslations("Contributors");

  return (
    <main>
      <section>
        <div className="px-5 py-4 max-lg:h-[500px] lg:h-screen max-h-[1200px] grid items-end relative lg:px-7 lg:py-4">
          <Image
            priority
            placeholder="blur"
            src={header}
            alt=""
            className="max-lg:h-[500px] max-lg:w-[1024px] absolute lg:fixed size-full top-0 left-0 object-cover -z-[1]"
          />
          <span className="text-white uppercase text-3xl lg:text-8xl">
            {t("h1")}
          </span>
        </div>
      </section>

      <section className="myContainer text-mainBlue bg-white">
        <div className="space-y-28 max-w-screen-xl m-auto">
          <div className="text-center">
            <h1 className="h2 text-mainBlue">{t("h2")}</h1>
            <h2 className="h3 mt-2 lg:mt-4">{t("h3")}</h2>
          </div>

          <DisplayCards />
        </div>
      </section>
    </main>
  );
}
