import aerolase from "@/app/img/aerolase-partenaire-heritage-magazine.png";
import header from "@/app/img/audit-digital-laboratoires-pharmaceutiques-consultant.jpg";
import aime from "@/app/img/congres-aime-partenaire-heritage-magazine.png";
import sfme from "@/app/img/congres-sfme-partenaire-heritage-magazine.png";
import healthcie from "@/app/img/healthcie-partenaire-heritage-magazine.png";
import imcas from "@/app/img/imcas-congres-partner-heritage-magazine.png";
import olivier from "@/app/img/olivier-claire-partenaire-heritage-magazine.png";
import thinkin from "@/app/img/thinkin-partenaire-heritage-magazine.png";
import josse from "@/app/img/thomas-josse-partenaire-heritage-magazine.png";
import vivacy from "@/app/img/vivacy-partenaire-heritage-magazine.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Params = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  if (locale === "en") {
    return {
      title: "Partners & Distributors | HERITAGE Magazine",
      description:
        "HERITAGE Magazine partners and distributors. Discover the distribution network of the magazine specialized in plastic surgery and anti-aging medicine.",
    };
  } else if (locale === "fr") {
    return {
      title: "Partenaires & distributeurs | HERITAGE Magazine",
      description:
        "Partenaires et distributeurs du Magazine HERITAGE. Découvrez le réseau de distribution du magazine spécialisé en chirurgie esthétique et médecine anti-âge.",
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
            src={header}
            alt=""
            className="absolute lg:fixed size-full top-0 left-0 object-cover object-top -z-[1] "
          />
        </div>
      </section>
      <section className="myContainer bg-white text-center max-lg:space-y-8">
        <div>
          <h1 className="h2 text-mainBlue">{t("h2")}</h1>
          <h2 className="h3 mt-2 lg:mt-4">{t("h3")}</h2>
        </div>

        <div className="grid grid-cols-3 items-center max-w-[1200px] m-auto gap-x-8 lg:gap-x-12 gap-y-8 lg:gap-y-16">
          <Image src={imcas} alt="" className="m-auto" />
          <Image src={aime} alt="" className="m-auto" />
          <Image src={sfme} alt="" className="m-auto" />
          <Image src={olivier} alt="" className="m-auto" />
          <Image src={vivacy} alt="" className="m-auto" />
          <Image src={aerolase} alt="" className="m-auto" />
          <Image
            src={josse}
            alt=""
            className="m-auto max-h-[70%] object-contain"
          />
          <Image
            src={healthcie}
            alt=""
            className="m-auto max-h-[80%] object-contain"
          />
          <Image src={thinkin} alt="" className="m-auto" />
        </div>
        <p className="mt-8">{t("p")}</p>
      </section>
    </main>
  );
}
