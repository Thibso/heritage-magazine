import Button from "@/app/components/buttons/Button";
import hugo from "@/app/img/antiage-magazine-heritage-sante-innovation.jpg";
import adda from "@/app/img/article-heritage-magazine-aerolase.jpg";
import ascher from "@/app/img/article-heritage-magazine-benjamin-ascher.jpg";
import olivier from "@/app/img/article-heritage-magazine-olivier-claire.jpg";
import logo from "@/app/img/heritage-magazine-anti-age-innovation.png";
import julien from "@/app/img/magazine-heritage-innovation-sante.jpg";
import barbara from "@/app/img/pr-hersant-barbara-magazine-heritage.jpg";
import Image from "next/image";

type Params = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  // if (locale === "en") {
  //   return {
  //     title: "Titre EN",
  //     description: "Description EN",
  //   };
  // } else
  if (locale === "fr") {
    return {
      title: "Innovations en chirurgie & médecine esthétique | Articles",
      description:
        "Découvrz toutes les dernières innovations en chirurgie esthétique & médecine anti-âge. Articles & interview (H)ERITAGE.",
    };
  }
}

export default function Articles() {
  return (
    <>
      <section className="myContainer bg-mainBlue mt-[44px] lg:mt-[60px] space-y-6">
        <Image
          src={logo}
          alt="Logo (H)RITAGE Magazine"
          title="Logo (H)RITAGE Magazine"
          className="m-auto"
        />
        <h1 className="header-title text-white text-center">
          LE MÉDIA DÉDIÉ À L’INNOVATION EN SANTÉ
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
                className="w-full h-auto object-contain lg:h-[370px] lg:object-cover"
              />
            </div>

            <div className="col-span-3 space-y-6 flex flex-col justify-center">
              <div>
                <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
                  The medical aesthetic injectable summit
                </h2>
                <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
                  Avec le Dr Benjamain Ascher
                </h3>
              </div>

              <p className="text-base">
                Benjamin Ascher, MD, est un chirurgien plasticien certifié,
                membre des sociétés françaises, américaines et internationales
                de chirurgie plastique, reconstructrice et esthétique (SOFCPRE,
                SOFCEP, ASPS, ISAPS).
                <br />
                Il a été Chef Résident, Assistant des Hôpitaux de Paris et
                Président et Chef de la Clinique de Chirurgie Esthétique IENA à
                Paris - France.
              </p>
              <Button link="/fr/benjamin-ascher">Lire l&apos;article</Button>
            </div>
          </div>

          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-6 lg:grid lg:grid-cols-5 lg:space-x-12 ">
            <div className="col-span-3 space-y-6 flex flex-col justify-center">
              <div>
                <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
                  Olivier Claire, l’histoire
                </h2>
                <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
                  par Olivier Couraud
                </h3>
              </div>

              <p className="text-base">
                Un raccourci rapide. Oui, je suis né au Chili. J’y ai passé ma
                toute petite enfance. Je garde de ce pays des souvenirs flous,
                mais colorés, olfactifs, des impressions qui m’ont, sans doute,
                inconsciemment marqué. Je conserve davantage de sensations,
                d’émotions, de souvenirs, du Maroc où j’ai vécu enfant.
              </p>
              <Button link="/fr/olivier-claire">Lire l&apos;article</Button>
            </div>

            <div className="col-span-2">
              <Image
                src={olivier}
                alt="Olivier Claire HERITAGE Magazine"
                title="Olivier Claire HERITAGE Magazine"
                className="w-full h-auto object-contain lg:h-[370px] lg:object-cover"
              />
            </div>
          </div>

          <div className="max-lg:flex max-lg:flex-col max-lg:gap-6 lg:grid lg:grid-cols-5 lg:space-x-12 ">
            <div className="col-span-2">
              <Image
                src={adda}
                alt="Aerolase HERITAGE Magazine"
                title="Aerolase HERITAGE Magazine"
                className="w-full h-auto object-contain lg:h-[370px] lg:object-cover"
              />
            </div>

            <div className="col-span-3 space-y-6 flex flex-col justify-center">
              <div>
                <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
                  Entretien avec Dr Adda
                </h2>
                <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
                  Laser Neo Elite® d’Aerolase
                </h3>
              </div>

              <p className="text-base">
                L’innovation joue un rôle crucial dans l’évolution de la
                dermatologie et de la médecine esthétique. Les avancées
                technologiques, comme celles d’Aerolase, transforment les soins
                prodigués aux patients en les rendant plus efficaces, plus
                confortables et plus accessibles.
                <br />
                Aujourd’hui, présenter le laser Neo Elite® d’Aerolase, c’est
                présenter un dispositif révolutionnaire qui redéfinit les
                traitements dermatologiques.
              </p>
              <Button link="/fr/dr-adda">Lire l&apos;article</Button>
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

          <div className="max-lg:flex max-lg:flex-col max-lg:gap-6 lg:grid lg:grid-cols-5 lg:space-x-12 ">
            <div className="col-span-2">
              <Image
                src={julien}
                alt="Julien Vervel HERITAGE Magazine"
                title="Julien Vervel HERITAGE Magazine"
                className="w-full h-auto object-contain lg:h-[370px] lg:object-cover"
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
                className="w-full h-auto object-contain lg:h-[370px] lg:object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
