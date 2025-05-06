import AllPublications from "@/app/components/publications/allPublications";
import header from "@/app/img/plastic-surgeons-best-magazine.jpg";
import fs from "fs";
import { useTranslations } from "next-intl";
import Image from "next/image";
import path from "path";

type Params = {
  params: { locale: string };
};

const titleEN = "Innovations in surgery and aesthetic medicine | Articles";
const descriptionEN =
  "Discover all the latest innovations in cosmetic surgery & anti-ageing medicine. Articles & interview (H)ERITAGE.";

const titleFR = "Innovations en chirurgie & médecine esthétique | Articles";
const descriptionFR =
  "Découvrez toutes les dernières innovations en chirurgie esthétique & médecine anti-âge. Articles & interview (H)ERITAGE.";

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

type Item = {
  image: string;
  alt: string;
  h2: string;
  h3: string;
  p: string;
  linkTo: string;
  linkText: string;
  tags: string[];
};

export default function Articles() {
  const t = useTranslations("Articles_base");

  const filePath = path.join(process.cwd(), "src/data/data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data: Item[] = JSON.parse(jsonData);

  return (
    <div>
      <section>
        <div className="px-5 py-4 max-lg:h-[500px] lg:h-screen max-h-[1200px] grid items-end relative lg:px-7 lg:py-4">
          <span className="text-white uppercase text-3xl lg:text-8xl">
            {t("title")}
          </span>
          <Image
            priority
            placeholder="blur"
            src={header}
            alt=""
            className="absolute lg:fixed size-full top-0 left-0 object-cover -z-[1]"
          />
        </div>
      </section>

      <section className="myContainer text-mainBlue bg-white">
        <div className="space-y-12 max-w-screen-xl m-auto">
          <div className="text-center">
            <h1 className="h2 text-mainBlue">{t("h1")}</h1>
            <h2 className="h3 mt-2 lg:mt-4">{t("h2")}</h2>
          </div>

          <AllPublications data={data} />
        </div>
      </section>
    </div>
  );
}
