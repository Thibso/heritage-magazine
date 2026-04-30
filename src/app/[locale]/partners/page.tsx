import aerolase from "@/app/img/Aerolase-aesthetic-device-plastic-surgeons.png";
import aime from "@/app/img/congres-aime-partenaire-heritage-magazine.png";
import sfme from "@/app/img/congres-sfme-partenaire-heritage-magazine.png";
import header from "@/app/img/Formation-marketing-equipe-laboratoire-pharmaceutique.jpg";
import healthcie from "@/app/img/healthcie-partenaire-heritage-magazine.png";
import hydra from "@/app/img/hydrafacial-partner-heritage-magazine-aesthetic.png";
import idocteur from "@/app/img/idocteur-partner-heritage-magazine.png";
import imcas from "@/app/img/imcas-congres-partner-heritage-magazine.png";
import mais from "@/app/img/medical-injectable-summit.png";
import nooance from "@/app/img/nooance-partner-heritage-magazine.png";
import olivier from "@/app/img/olivier-claire-partenaire-heritage-magazine.png";
import praguelab from "@/app/img/prague-lab-partner-heritage-magazine.png";
import thinkin from "@/app/img/thinkin-partenaire-heritage-magazine.png";
import josse from "@/app/img/thomas-josse-partenaire-heritage-magazine.png";
import vivacy from "@/app/img/vivacy-partenaire-heritage-magazine.png";

import aptos from "@/app/img/aptos-heritage-magazine-partner.png";
import canfield from "@/app/img/canfield-heritage-magazine-partner.png";
import cutera from "@/app/img/cutera-heritage-magazine-partner.png";
import rejuran from "@/app/img/rejuran-heritage-magazine-partner.png";
import skinceuticals from "@/app/img/skinceuticals-heritage-magazine-partner.png";
import sunekos from "@/app/img/sune-kos-heritage-magazine-partner.png";

import { useTranslations } from "next-intl";
import Image from "next/image";

type Params = {
  params: { locale: string };
};

const titleEN = "Partners & Distributors | HERITAGE Magazine";
const descriptionEN =
  "HERITAGE Magazine partners and distributors. Discover the distribution network of the magazine specialized in plastic surgery and anti-aging medicine.";

const titleFR = "Partenaires & distributeurs | HERITAGE Magazine";
const descriptionFR =
  "Partenaires et distributeurs du Magazine HERITAGE. Découvrez le réseau de distribution du magazine spécialisé en chirurgie esthétique et médecine anti-âge.";

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

export default function Partners() {
  const t = useTranslations("Partners");

  return (
    <main>
      <section>
        <div className="px-5 py-4 max-lg:h-[500px] lg:h-screen max-h-[1200px] grid items-end relative lg:px-7 lg:py-4">
          <span className="text-white uppercase text-3xl lg:text-8xl">
            {t("h1")}
          </span>
          <Image
            priority
            placeholder="blur"
            src={header}
            alt=""
            className="absolute lg:fixed size-full top-0 left-0 object-cover object-top -z-[1] "
          />
        </div>
      </section>
      <section className="myContainer bg-white text-center max-lg:space-y-8">
        <div>
          <h1 className="h2 text-mainBlue">{t("distribution")}</h1>
          <h2 className="h3 mt-2 lg:mt-4">{t("distribution_h3")}</h2>
        </div>

        <div className="grid md:grid-cols-3 items-center max-w-[1024px] m-auto gap-x-8 gap-y-8">
          <Image
            src={aime}
            alt=""
            className="m-auto max-lg:max-w-[150px] max-w-[200px] aspect-square object-contain"
          />
          <Image
            src={thinkin}
            alt=""
            className="m-auto  max-lg:max-w-[150px] max-w-[200px] aspect-square object-contain"
          />
          <Image
            src={imcas}
            alt=""
            className="m-auto max-lg:max-w-[150px] max-w-[200px] aspect-square object-contain"
          />
          <Image
            src={sfme}
            alt=""
            className="m-auto max-lg:max-w-[150px] max-w-[200px] aspect-square object-contain"
          />
          <Image
            src={mais}
            alt=""
            className="m-auto max-lg:max-w-[150px] max-w-[200px] aspect-square object-contain"
          />
          <Image
            src={praguelab}
            alt=""
            className="m-auto max-lg:max-w-[150px] max-w-[250px] aspect-square object-contain"
          />
        </div>
      </section>

      <section className="myContainer bg-white pt-0 text-center max-lg:space-y-8">
        <div>
          <h1 className="h2 text-mainBlue">{t("partners")}</h1>
          <h2 className="h3 mt-2 lg:mt-4">{t("partners_h3")}</h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 items-center max-w-[1200px] m-auto gap-x-8 gap-y-8">
          <Image
            src={olivier}
            alt=""
            className="m-auto w-[188px] aspect-square object-contain"
          />
          <Image
            src={vivacy}
            alt=""
            className="m-auto w-[188px]  aspect-square object-contain"
          />
          <Image
            src={aerolase}
            alt=""
            className="m-auto w-[188px] aspect-square object-contain"
          />
          <Image
            src={josse}
            alt=""
            className="m-auto max-h-[60%] object-contain w-[188px] aspect-square"
          />
          <Image
            src={healthcie}
            alt=""
            className="m-auto max-h-[60%] object-contain w-[188px] aspect-square"
          />
          <Image
            src={hydra}
            alt=""
            className="m-auto w-[250px] aspect-square object-contain"
          />
          <Image
            src={nooance}
            alt=""
            className="m-auto w-[250px] aspect-square object-contain"
          />
          <Image
            src={idocteur}
            alt=""
            className="m-auto w-[250px] aspect-square object-contain"
          />

          <Image
            src={cutera}
            alt=""
            className="m-auto w-[200px] aspect-square object-contain"
          />
          <Image
            src={canfield}
            alt=""
            className="m-auto w-[200px] aspect-square object-contain"
          />
          <Image
            src={rejuran}
            alt=""
            className="m-auto w-[200px] aspect-square object-contain"
          />
          <Image
            src={skinceuticals}
            alt=""
            className="m-auto w-[250px] aspect-square object-contain"
          />
          <Image
            src={sunekos}
            alt=""
            className="m-auto w-[200px] lg:col-start-2 aspect-square object-contain"
          />
          <Image
            src={aptos}
            alt=""
            className="m-auto w-[200px] lg:col-start-3 aspect-square object-contain"
          />
        </div>
      </section>
    </main>
  );
}
