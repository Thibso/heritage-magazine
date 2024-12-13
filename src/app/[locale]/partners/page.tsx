import aerolase from "@/app/img/aerolase-partenaire-heritage-magazine.png";
import aime from "@/app/img/congres-aime-partenaire-heritage-magazine.png";
import sfme from "@/app/img/congres-sfme-partenaire-heritage-magazine.png";
import header from "@/app/img/Formation-marketing-equipe-laboratoire-pharmaceutique.jpg";
import healthcie from "@/app/img/healthcie-partenaire-heritage-magazine.png";
import hydra from "@/app/img/hydrafacial-partner-heritage-magazine-aesthetic.png";
import imcas from "@/app/img/imcas-congres-partner-heritage-magazine.png";
import mais from "@/app/img/medical-injectable-summit.png";
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

        <div className="grid md:grid-cols-5 items-center max-w-[1200px] m-auto gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-16">
          <Image src={aime} alt="" className="m-auto max-lg:max-w-[150px]" />
          <Image
            src={thinkin}
            alt=""
            className="m-auto  max-lg:max-w-[150px]"
          />
          <Image src={imcas} alt="" className="m-auto max-lg:max-w-[150px]" />
          <Image src={sfme} alt="" className="m-auto max-lg:max-w-[150px]" />
          <Image src={mais} alt="" className="m-auto max-lg:max-w-[150px]" />
        </div>
      </section>

      <section className="myContainer bg-white pt-0 text-center max-lg:space-y-8">
        <div>
          <h1 className="h2 text-mainBlue">{t("partners")}</h1>
          <h2 className="h3 mt-2 lg:mt-4">{t("partners_h3")}</h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 items-center max-w-[1200px] m-auto gap-x-8 lg:gap-x-12 gap-y-8 lg:gap-y-16">
          <Image src={olivier} alt="" className="m-auto w-[188px]" />
          <Image src={vivacy} alt="" className="m-auto w-[188px]" />
          <Image src={aerolase} alt="" className="m-auto w-[188px]" />
          <Image
            src={josse}
            alt=""
            className="m-auto max-h-[60%] object-contain w-[188px]"
          />
          <Image
            src={healthcie}
            alt=""
            className="m-auto max-h-[60%] object-contain w-[188px]"
          />
          <Image src={hydra} alt="" className="m-auto w-[250px]" />
        </div>
      </section>
    </main>
  );
}
