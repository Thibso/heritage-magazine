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
  head: string;
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

  // JSON MICRO-DATA

  const micro_data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id":
          "https://magazine-heritage.com/en/publications-aesthetic-medicine-innovations/#webpage",
        url: "https://magazine-heritage.com/en/publications-aesthetic-medicine-innovations",
        name: "Scientific Publications & Medical Innovations - HERITAGE Magazine",
        description:
          "Exhaustive collection of international publications on surgical innovations, aesthetic medicine trends, and MedTech business strategy.",
        publisher: {
          "@type": "NewsMediaOrganization",
          name: "HERITAGE Magazine",
          logo: "https://magazine-heritage.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheritage-magazine-anti-age-innovation.f7e3326f.png&w=640&q=75",
        },
      },
      {
        "@type": "DataFeed",
        name: "HERITAGE Magazine Issues",
        description:
          "Feed of the latest magazine editions and scientific white papers.",
        mainEntityOfPage: {
          "@id":
            "https://magazine-heritage.com/en/publications-aesthetic-medicine-innovations/#webpage",
        },
        dataFeedElement: [
          {
            "@type": "CreativeWorkSeries",
            name: "HERITAGE Magazine Annual Edition",
            issn: "3076-3673",
            audience: {
              "@type": "Audience",
              audienceType: "Healthcare Professionals, Industry Leaders",
            },
            keywords:
              "Aesthetic Medicine, Plastic Surgery, Innovation, MedTech Business",
            genre: "Medical Journal",
            inLanguage: "en-US",
          },
          {
            "@type": "CreativeWorkSeries",
            name: "The Business of Aesthetics - Special Reports",
            genre: "Economic Analysis",
            description: "Strategic insights into the global aesthetic market.",
          },
        ],
      },
    ],
  };
  //

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(micro_data) }}
      />
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
        </div>
      </section>

      <AllPublications data={data} />
    </div>
  );
}
