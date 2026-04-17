import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "../components/buttons/Button";
import YoutubeVideo from "../components/videos/YoutubeVideo";
import last_mag from "../img/MEDIA-SPECIALISE-MEDECINE-ESTHETIQUE-CHIRURGIE.jpg";
import mag from "../img/magazine-innovation-sante.jpg";

type Params = {
  params: { locale: string };
};

const titleEN =
  "HERITAGE Magazine | Innovations in aesthetic & anti-aging medicine";
const descriptionEN =
  "(H)ERITAGE Magazine. Premium media dedicated to innovation in aesthetic surgery, medicine and dermatology. Discover (H)ERITAGE Magazine";

const titleFR =
  "HERITAGE Magazine | Innovations en médecine esthétique & anti-âge";
const descriptionFR =
  "(H)ERITAGE Magazine. Média premium dédié à l'innovation en chirurgie, médecine et dermatologie esthétique. Découvrez (H)ERITAGE Magazine";

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

export default function Home() {
  const t = useTranslations("HomePage");

  // JSON MICRO-DATA

  const micro_data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsMediaOrganization",
        "@id": "https://magazine-heritage.com/#organization",
        name: "HERITAGE Magazine",
        url: "https://magazine-heritage.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://magazine-heritage.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheritage-magazine-anti-age-innovation.f7e3326f.png&w=640&q=75",
          width: "600",
          height: "60",
        },
        description:
          "International ecosystem and media dedicated to the future of aesthetic medicine and surgery. Merging scientific excellence with business innovation.",
        alternateName: "HERITAGE Magazine Aesthetic Medicine & Surgery",
        foundingDate: "2024",
        masthead:
          "https://magazine-heritage.com/en/media-plastic-surgery-antiaging-medicine",
        knowsAbout: [
          "Aesthetic Surgery",
          "Medical Innovation",
          "Regenerative Medicine",
          "Health Business Strategy",
        ],
        sameAs: [
          "https://www.linkedin.com/company/magazine-heritage/",
          "https://www.instagram.com/magazine_heritage/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://magazine-heritage.com/#website",
        url: "https://magazine-heritage.com/en",
        name: "HERITAGE Magazine",
        inLanguage: "en-US",
      },
      {
        "@type": "Periodical",
        name: "HERITAGE Magazine",
        issn: "3076-3673",
        genre: "Scientific and Business Journal",
        audience: {
          "@type": "Audience",
          audienceType:
            "Plastic Surgeons, Aesthetic Doctors, MedTech Executives",
        },
      },
    ],
  };
  //
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(micro_data) }}
      />
      <section className="relative h-[450px] lg:h-screen max-h-[1080px]">
        <div className="bg-[url(/Influence-magazine-plastic-surgery-aesthetic-medicine.png)] bg-cover bg-fixed bg-center max-lg:hidden absolute size-full"></div>
        <div className="bg-[url(/Influence-media-plastic-surgery-aesthetic-medicine.png)] bg-cover bg-[50%_75%] lg:hidden absolute size-full"></div>

        <span className="h2 absolute bottom-[55px] lg:bottom-[85px] left-1/2 -translate-x-1/2 text-white">
          {t("header")}
        </span>

        <a
          href="#discover"
          className="bg-orange px-12 py-2 rounded-3xl absolute w-fit bottom-[15px] lg:bottom-[35px] left-1/2 -translate-x-1/2 text-white font-sfPro font-medium leading-none"
        >
          {t("cta")}
        </a>
      </section>

      <section className="lg:grid lg:grid-cols-8 m-auto max-lg:bg-bgLight">
        <div className="col-span-3 w-full h-full relative">
          <Image
            src={mag}
            alt="Illustration (H)ERITAGE magazine"
            quality={100}
            className="max-lg:hidden absolute w-full h-full object-cover object-center"
          />
        </div>

        <div className="myContainer col-span-5 space-y-8 lg:space-y-16">
          <div>
            <h1 className="h2">{t("p1.h1")}</h1>
            <h2 className="h3 mt-2 lg:mt-4 font-sfPro">{t("p1.h2")}</h2>
          </div>

          <div className="space-y-4">
            {t.rich("p1.content", {
              p: (chunks) => <p>{chunks}</p>,
            })}
          </div>

          <Button link={t("p1.cta_link")}>{t("p1.cta")}</Button>
        </div>
      </section>

      <section
        id="discover"
        className="max-lg:flex max-lg:flex-col-reverse lg:grid lg:grid-cols-8 m-auto"
      >
        <div className="myContainer bg-mainBlue col-span-3 space-y-8 lg:space-y-16 h-full flex flex-col justify-center">
          <div>
            <h2 className="h2 text-white">{t("p2.h2")}</h2>
            <h3 className="h3 mt-2 lg:mt-4">{t("p2.h3")}</h3>
          </div>

          <div className="space-y-4 text-white">
            {t.rich("p2.content", {
              p: (chunks) => <p>{chunks}</p>,
            })}
          </div>

          <Button link={t("p2.cta_link")}>{t("p2.cta")}</Button>
        </div>

        <div className="bg-bgLight col-span-5 grid items-start lg:pt-[75px] overflow-hidden relative">
          <Image
            src={last_mag}
            alt="Magazine (H)ERITAGE last version"
            quality={100}
            className="lg:absolute max-lg:m-auto w-full lg:h-[100%] lg:bottom-0 lg:left-0 object-cover"
          />
        </div>
      </section>

      <section className="bg-white overflow-hidden" id="youtube">
        <div className="myContainer grid space-y-8 lg:space-y-16">
          <div className="text-center">
            <h2 className="h2">{t("interviews.h2")}</h2>
            <h3 className="h3 mt-2 lg:mt-4">{t("interviews.h3")}</h3>
          </div>

          <YoutubeVideo url="https://www.youtube.com/embed/D4UpiuIn23g" />
        </div>
      </section>
    </main>
  );
}
