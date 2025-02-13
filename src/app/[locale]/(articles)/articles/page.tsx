import Button from "@/app/components/buttons/Button";
import adda from "@/app/img/doctor-adda-jean-marc-heritage-magazine.jpg";
import ascher from "@/app/img/doctor-ascher-benjamin-heritage-magazine.jpg";
import cartier from "@/app/img/doctors-cartier-garson-imcas-interview-heritage-magazine.jpg";
import diala from "@/app/img/dr-haykal-interview-hydrafacial-heritage-magazine.jpg";
import coste from "@/app/img/jean-yves-coste-focus-market-overview-heritage-magazine.jpg";
import hugo from "@/app/img/nivault-hugo-heritage-magazine.jpg";
import olivier from "@/app/img/olivier-claire-couraud-heritage-magazine.jpg";
import header from "@/app/img/plastic-surgeons-best-magazine.jpg";
import lapadula from "@/app/img/pr-la-padula-expertise-heritage-magazine.jpg";
import barbara from "@/app/img/professor-hersant-barbara-heritage-magazine.jpg";
import julien from "@/app/img/vervel-julien-heritage-magazine.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";

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

export default function Articles() {
  const t = useTranslations("Articles_base");

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
        <div className="space-y-28 max-w-screen-xl m-auto">
          <div className="text-center">
            <h1 className="h2 text-mainBlue">{t("h1")}</h1>
            <h2 className="h3 mt-2 lg:mt-4">{t("h2")}</h2>
          </div>

          <div className="flex flex-col max-lg:gap-6 lg:grid lg:grid-cols-5">
            <div className="col-span-2">
              <Image
                src={cartier}
                alt="Hugues Cartier et Sébastien Garson HERITAGE Magazine"
                title="Hugues Cartier et Sébastien Garson HERITAGE Magazine"
                className="max-lg:m-auto w-full max-lg:max-w-[400px] object-contain rounded-sm"
              />
            </div>

            <div className="col-span-3 space-y-6 flex flex-col justify-center md:ml-12 lg:ml-20">
              <div>
                <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
                  {t("cartier.h2")}
                </h2>
                <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
                  {t("cartier.h3")}
                </h3>
              </div>

              <p className="text-base">
                {t.rich("cartier.content", {
                  br: () => <br />,
                })}
              </p>
              <Button link={t("cartier.cta_link")}>{t("cartier.cta")}</Button>
            </div>
          </div>

          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-6 lg:grid lg:grid-cols-5">
            <div className="col-span-3 space-y-6 flex flex-col justify-center md:mr-12 lg:mr-20">
              <div>
                <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
                  {t("lapadula.h2")}
                </h2>
                <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
                  {t("lapadula.h3")}
                </h3>
              </div>

              <p className="text-base">
                {t.rich("lapadula.content", {
                  br: () => <br />,
                })}
              </p>
              <Button link={t("lapadula.cta_link")}>{t("lapadula.cta")}</Button>
            </div>

            <div className="col-span-2">
              <Image
                src={lapadula}
                alt="Simone La Padula HERITAGE Magazine"
                title="Simone La Padula HERITAGE Magazine"
                className="max-lg:m-auto w-full max-lg:max-w-[400px] object-contain rounded-sm"
              />
            </div>
          </div>

          <div className="flex flex-col max-lg:gap-6 lg:grid lg:grid-cols-5">
            <div className="col-span-2">
              <Image
                src={coste}
                alt="Jean-Yves Coste HERITAGE Magazine"
                title="Jean-Yves Coste HERITAGE Magazine"
                className="max-lg:m-auto w-full max-lg:max-w-[400px] object-contain rounded-sm"
              />
            </div>

            <div className="col-span-3 space-y-6 flex flex-col justify-center md:ml-12 lg:ml-20">
              <div>
                <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
                  {t("coste.h2")}
                </h2>
                <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
                  {t("coste.h3")}
                </h3>
              </div>

              <p className="text-base">
                {t.rich("coste.content", {
                  br: () => <br />,
                })}
              </p>
              <Button link={t("coste.cta_link")}>{t("coste.cta")}</Button>
            </div>
          </div>

          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-6 lg:grid lg:grid-cols-5">
            <div className="col-span-3 space-y-6 flex flex-col justify-center md:mr-12 lg:mr-20">
              <div>
                <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
                  {t("diala.h2")}
                </h2>
                <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
                  {t("diala.h3")}
                </h3>
              </div>

              <p className="text-base">
                {t.rich("diala.content", {
                  br: () => <br />,
                })}
              </p>
              <Button link={t("diala.cta_link")}>{t("diala.cta")}</Button>
            </div>

            <div className="col-span-2">
              <Image
                src={diala}
                alt="Diala haykal HERITAGE Magazine"
                title="Diala haykal HERITAGE Magazine"
                className="max-lg:m-auto w-full max-lg:max-w-[400px] object-contain rounded-sm"
              />
            </div>
          </div>

          <div className="max-lg:flex max-lg:flex-col max-lg:gap-6 lg:grid lg:grid-cols-5">
            <div className="col-span-2">
              <Image
                src={ascher}
                alt="Dr Benjamin Ascher HERITAGE Magazine"
                title="Dr Benjamin Ascher HERITAGE Magazine"
                className="max-lg:m-auto w-full max-lg:max-w-[400px] object-contain rounded-sm"
              />
            </div>

            <div className="col-span-3 space-y-6 flex flex-col justify-center md:ml-12 lg:ml-20">
              <div>
                <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
                  {t("ascher.h2")}
                </h2>
                <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
                  {t("ascher.h3")}
                </h3>
              </div>

              <p className="text-base">
                {t.rich("ascher.content", {
                  br: () => <br />,
                })}
              </p>
              <Button link={t("ascher.cta_link")}>{t("ascher.cta")}</Button>
            </div>
          </div>

          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-6 lg:grid lg:grid-cols-5">
            <div className="col-span-3 space-y-6 flex flex-col justify-center md:mr-12 lg:mr-20">
              <div>
                <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
                  {t("olivier.h2")}
                </h2>
                <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
                  {t("olivier.h3")}
                </h3>
              </div>

              <p className="text-base">
                {t.rich("olivier.content", {
                  br: () => <br />,
                })}
              </p>
              <Button link={t("olivier.cta_link")}>{t("olivier.cta")}</Button>
            </div>

            <div className="col-span-2">
              <Image
                src={olivier}
                alt="Olivier Claire HERITAGE Magazine"
                title="Olivier Claire HERITAGE Magazine"
                className="max-lg:m-auto w-full max-lg:max-w-[400px] object-contain rounded-sm"
              />
            </div>
          </div>

          <div className="max-lg:flex max-lg:flex-col max-lg:gap-6 lg:grid lg:grid-cols-5">
            <div className="col-span-2">
              <Image
                src={adda}
                alt="Aerolase HERITAGE Magazine"
                title="Aerolase HERITAGE Magazine"
                className="max-lg:m-auto w-full max-lg:max-w-[400px] object-contain rounded-sm"
              />
            </div>

            <div className="col-span-3 space-y-6 flex flex-col justify-center md:ml-12 lg:ml-20">
              <div>
                <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
                  {t("adda.h2")}
                </h2>
                <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
                  {t("adda.h3")}
                </h3>
              </div>

              <p className="text-base">
                {t.rich("adda.content", {
                  br: () => <br />,
                })}
              </p>
              <Button link={t("adda.cta_link")}>{t("adda.cta")}</Button>
            </div>
          </div>

          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-6 lg:grid lg:grid-cols-5">
            <div className="col-span-3 space-y-6 flex flex-col justify-center md:mr-12 lg:mr-20">
              <div>
                <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
                  {t("barbara.h2")}
                </h2>
                <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
                  {t("barbara.h3")}
                </h3>
              </div>

              <p className="text-base">
                {t.rich("barbara.content", {
                  br: () => <br />,
                })}
              </p>
              <Button link={t("barbara.cta_link")}>{t("barbara.cta")}</Button>
            </div>

            <div className="col-span-2">
              <Image
                src={barbara}
                alt="Pr Barbara Hersant HERITAGE Magazine"
                title="Pr Barbara Hersant HERITAGE Magazine"
                className="max-lg:m-auto w-full max-lg:max-w-[400px] object-contain rounded-sm"
              />
            </div>
          </div>

          <div className="flex flex-col max-lg:gap-6 lg:grid lg:grid-cols-5">
            <div className="col-span-2">
              <Image
                src={julien}
                alt="Julien Vervel HERITAGE Magazine"
                title="Julien Vervel HERITAGE Magazine"
                className="max-lg:m-auto w-full max-lg:max-w-[400px] object-contain rounded-sm"
              />
            </div>

            <div className="col-span-3 space-y-6 flex flex-col justify-center md:ml-12 lg:ml-20">
              <div>
                <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
                  {t("julien.h2")}
                </h2>
                <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
                  {t("julien.h3")}
                </h3>
              </div>

              <p className="text-base">
                {t.rich("julien.content", {
                  br: () => <br />,
                })}
              </p>
              <Button link={t("julien.cta_link")}>{t("julien.cta")}</Button>
            </div>
          </div>

          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-6 lg:grid lg:grid-cols-5">
            <div className="col-span-3 space-y-6 flex flex-col justify-center md:mr-12 lg:mr-20">
              <div>
                <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
                  {t("hugo.h2")}
                </h2>
                <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
                  {t("hugo.h3")}
                </h3>
              </div>

              <p className="text-base">
                {t.rich("hugo.content", {
                  br: () => <br />,
                })}
              </p>
              <Button link={t("hugo.cta_link")}>{t("hugo.cta")}</Button>
            </div>

            <div className="col-span-2">
              <Image
                src={hugo}
                alt="Hugo Nivault HERITAGE Magazine"
                title="Hugo Nivault HERITAGE Magazine"
                className="max-lg:m-auto w-full max-lg:max-w-[400px] object-contain rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
