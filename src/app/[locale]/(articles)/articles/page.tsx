import Button from "@/app/components/buttons/Button";
import barbara from "@/app/img/articles/barbara_hersant/pr-hersant-barabara-chirurgie-esthetique-paris.jpg";
import ascher from "@/app/img/articles/benjamin_ascher/dr-benjamin-ascher-thinkin.jpg";
import adda from "@/app/img/articles/dr_adda/dr-adda-aerolase-laser-elite.jpg";
import hugo from "@/app/img/articles/hugo_nivault/hugo-nivault-chef-projet-digital-healthcie.jpg";
import julien from "@/app/img/articles/julien_vervel/Julien-vervel-consultant-médical-laboratoires.jpg";
import olivier from "@/app/img/articles/olivier_claire/portrait-olivier-claire.jpg";
import logo from "@/app/img/heritage-magazine-anti-age-innovation.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Params = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  if (locale === "en") {
    return {
      title: "Innovations in surgery and aesthetic medicine | Articles",
      description:
        "Discover all the latest innovations in cosmetic surgery & anti-ageing medicine. Articles & interview (H)ERITAGE.",
    };
  } else if (locale === "fr") {
    return {
      title: "Innovations en chirurgie & médecine esthétique | Articles",
      description:
        "Découvrez toutes les dernières innovations en chirurgie esthétique & médecine anti-âge. Articles & interview (H)ERITAGE.",
    };
  }
}

export default function Articles() {
  const t = useTranslations("Articles_base");

  return (
    <div>
      <section className="myContainer bg-mainBlue mt-[44px] lg:mt-[60px]">
        <Image
          src={logo}
          alt="Logo (H)ERITAGE Magazine"
          title="Logo (H)ERITAGE Magazine"
          className="m-auto max-w-[80%]"
        />
        <h1 className="header-title text-white text-center mt-6">
          {t("title")}
        </h1>
      </section>

      <section className="myContainer text-mainBlue">
        <div className="space-y-20 max-w-screen-xl m-auto">
          <div className="max-lg:flex max-lg:flex-col max-lg:gap-6 lg:grid lg:grid-cols-5 md:space-x-12 lg:space-x-20 ">
            <div className="col-span-2">
              <Image
                src={ascher}
                alt="Dr Benjamin Ascher HERITAGE Magazine"
                title="Dr Benjamin Ascher HERITAGE Magazine"
                className="w-full h-[350px] object-cover lg:h-[370px] lg:object-cover"
              />
            </div>

            <div className="col-span-3 space-y-6 flex flex-col justify-center">
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

          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-6 lg:grid lg:grid-cols-5 lg:space-x-12 ">
            <div className="col-span-3 space-y-6 flex flex-col justify-center">
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
                className="w-full h-auto object-contain lg:h-[370px] lg:object-cover object-top"
              />
            </div>
          </div>

          <div className="max-lg:flex max-lg:flex-col max-lg:gap-6 lg:grid lg:grid-cols-5 lg:space-x-12 ">
            <div className="col-span-2">
              <Image
                src={adda}
                alt="Aerolase HERITAGE Magazine"
                title="Aerolase HERITAGE Magazine"
                className="w-full h-auto object-contain lg:h-[370px] lg:object-cover object-top"
              />
            </div>

            <div className="col-span-3 space-y-6 flex flex-col justify-center">
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

          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-6 lg:grid lg:grid-cols-5 lg:space-x-12 ">
            <div className="col-span-3 space-y-6 flex flex-col justify-center">
              <div>
                <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
                  L&apos;information digitale en santé
                </h2>
                <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
                  avec le Pr Barbara Hersant
                </h3>
              </div>

              <p className="text-base">
                Le Professeur Barbara Hersant est une éminente chirurgienne
                exerçant à l’Hôpital Henri Mondor à Créteil. Son expertise et
                son dévouement dans le domaine de la chirurgie en font une
                figure respectée au sein de la communauté médicale. Spécialisée
                dans plusieurs branches de la chirurgie, notamment la chirurgie
                esthétique et reconstructrice, le Professeur Hersant est
                reconnue pour sa précision chirurgicale, sa compassion envers
                ses patients et son engagement à fournir des soins de la plus
                haute qualité.
              </p>
              <Button link="/fr/barbara-hersant">Lire l&apos;article</Button>
            </div>

            <div className="col-span-2">
              <Image
                src={barbara}
                alt="Pr Barbara Hersant HERITAGE Magazine"
                title="Pr Barbara Hersant HERITAGE Magazine"
                className="w-full h-auto object-contain lg:h-[370px] lg:object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col max-lg:gap-6 lg:grid lg:grid-cols-5 lg:space-x-12 ">
            <div className="col-span-2">
              <Image
                src={julien}
                alt="Julien Vervel HERITAGE Magazine"
                title="Julien Vervel HERITAGE Magazine"
                className="w-full h-auto object-contain max-h-[370px] lg:object-cover object-top"
              />
            </div>

            <div className="col-span-3 space-y-6 flex flex-col justify-center">
              <div>
                <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
                  Dossier E-Réputation
                </h2>
                <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
                  Par Julien Vervel
                </h3>
              </div>

              <p className="text-base">
                Avec l’avènement du digital, il est naturel de se tourner vers
                Internet pour obtenir des informations sur un professionnel, une
                entreprise ou une marque afin d’évaluer ce que l’on appelle
                communément leur réputation en ligne, ou E-réputation.
                <br />
                J’entends souvent dire de la part des médecins que ce soit à
                l’agence ou à la Faculté : «l’E-réputation médicale c’est la
                note sur Google».
              </p>
              <Button link="/fr/julien-vervel">Lire l&apos;article</Button>
            </div>
          </div>

          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-6 lg:grid lg:grid-cols-5 lg:space-x-12 ">
            <div className="col-span-3 space-y-6 flex flex-col justify-center">
              <div>
                <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
                  Préparer son projet digital
                </h2>
                <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
                  Avec Hugo Nivault, chef de projet digital
                </h3>
              </div>

              <p className="text-base">
                Pour commencer à se familiariser au domaine du digital et pour
                s’assurer d’être visible, il est essentiel de construire un site
                Internet. Il représente la pierre angulaire de toute stratégie
                de communication digitale. L’objectif n’est pas simplement
                d’avoir une présence en ligne, mais d’être visible et engageant
                pour les patients potentiels.
              </p>
              <Button link="/fr/hugo-nivault">Lire l&apos;article</Button>
            </div>

            <div className="col-span-2">
              <Image
                src={hugo}
                alt="Hugo Nivault HERITAGE Magazine"
                title="Hugo Nivault HERITAGE Magazine"
                className="w-full h-auto object-contain lg:h-[370px] lg:object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
