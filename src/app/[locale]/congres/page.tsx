import CongresReactiveDisplay from "@/app/components/congres/congresReactiveDisplay";
import header from "@/app/img/congres-esthetiques-2025.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Params = {
  params: { locale: string };
};

const titleEN = "Aesthetic Medicine & Plastic Surgery Congresses";
const descriptionEN =
  "Aesthetic medicine and plastic surgery congresses. Discover the calendar of international events in aesthetic medicine and dermatology.";

const titleFR = "Congrès de Médecine Esthétique & de Chirurgie Plastique";
const descriptionFR =
  "Congrès de médecine esthétique et de chirurgie plastique. Découvrez le calendrier des événements internationnaux en médecine esthétique.";

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

export default function Congres() {
  const t = useTranslations("Congres");

  return (
    <main>
      <section>
        <div className="px-5 py-4 max-lg:h-[500px] lg:h-screen max-h-[1200px] grid items-end relative lg:px-7 lg:py-4">
          <h1 className="text-white uppercase text-3xl lg:text-8xl">
            {t("h1")}
          </h1>
          <Image
            src={header}
            alt=""
            className="absolute lg:fixed size-full top-0 left-0 object-cover -z-[2]"
          />

          <div className="absolute bg-mainBlue/40 -z-[1] size-full top-0 left-0"></div>
        </div>
      </section>

      <CongresReactiveDisplay />
    </main>
  );
}
