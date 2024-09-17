import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "../components/buttons/Button";
import woman from "../img/magazine-innovation-sante.jpg";

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
      title:
        "(H)ERITAGE Magazine | Innovations en médecine esthétique & anti-âge",
      description:
        "(H)ERITAGE Magazine. Média premium dédié à l&apos;innovation en chirurgie, médecine et dermatologie esthétique. Découvrez (H)ERITAGE Magazine",
    };
  }
}

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <section className="myContainer relative overflow-hidden grid items-center bg-headerBlue h-screen max-h-[500px] lg:max-h-[1080px] w-full">
        <video
          className="max-lg:hidden absolute h-full top-0 left-1/2 -translate-x-1/2 right-0 bottom-0 max-w-[2550px]"
          autoPlay
          muted
          playsInline
          loop
        >
          <source
            src="/magazine-esthetique-heritage-antiage.mp4"
            type="video/mp4"
          />
        </video>
        <h2 className="absolute w-[70%] lg:w-fit top-[60%] lg:top-[60%] left-1/2 -translate-x-1/2 header-title text-white text-center font-semibold">
          {t("title")}
        </h2>

        <a
          href="#discover"
          className="bg-orange px-12 py-2 rounded-3xl absolute w-fit top-[80%] lg:top-[80%] left-1/2 -translate-x-1/2 text-white font-sfPro font-medium leading-none"
        >
          Découvrir
        </a>
      </section>

      <section className="lg:grid lg:grid-cols-8 max-w-[1920px] m-auto max-lg:bg-bgLight">
        <div className="col-span-3 w-full h-full relative">
          <Image
            src={woman}
            alt="Illustration esthétique"
            className="lg:absolute w-full h-full object-cover max-lg:max-h-[350px] object-center"
          />
        </div>

        <div className="myContainer col-span-5 space-y-8 lg:space-y-16">
          <div>
            <h1 className="h2">(H)eritage Magazine</h1>
            <h2 className="h3 mt-2 lg:mt-4 font-sfPro">
              Le média dédié à l&apos;innovation en chirurgie, médecine et
              dermatologie esthétique
            </h2>
          </div>

          <div className="space-y-4">
            <p>
              (H)ERITAGE Magazine est bien plus qu&apos;une publication annuelle
              dans le domaine de la médecine esthétique ; c&apos;est une
              plateforme unique qui célèbre l&apos;équilibre entre tradition et
              innovation.
            </p>

            <p>
              Notre mission est claire : fournir aux professionnels du secteur
              de l&apos;esthétique (chirurgiens, médecins, dermatologues,
              laboratoires et fabricants de dispositifs médicaux) une vue
              d&apos;ensemble des avancées les plus récentes en produits,
              technologies et pratiques.
            </p>

            <p>
              Chaque numéro met en avant les innovations disruptives, tout en
              rendant hommage aux pratiques éprouvées qui façonnent le secteur.
              Pour les acteurs de l&apos;esthétique médicale, (H)ERITAGE est une
              source d&apos;inspiration et de réflexion, un carrefour où se
              rencontrent les esprits créatifs et les solutions de demain.
            </p>

            <p>
              (H)ERITAGE Magazine se positionne comme un guide de référence, en
              phase avec les besoins d&apos;une industrie en perpétuelle
              évolution, tout en restant fidèle aux valeurs fondatrices de
              l&apos;excellence médicale.
            </p>
          </div>
        </div>
      </section>

      <section
        id="discover"
        className="max-lg:flex max-lg:flex-col-reverse lg:grid lg:grid-cols-8 max-w-[1920px] m-auto"
      >
        <div className="myContainer bg-mainBlue col-span-3 space-y-8 lg:space-y-16">
          <div>
            <h2 className="h2 text-white">(H)eritage Magazine</h2>
            <h3 className="h3 mt-2 lg:mt-4">Une plateforme print & digitale</h3>
          </div>

          <div className="space-y-4 text-white">
            <p>
              Avec (H)ERITAGE Magazine, les laboratoires et fabricants de
              dispositifs médicaux de l&apos;esthétique ont une opportunité
              unique de renforcer leur visibilité.
            </p>

            <p>
              Nous offrons une plateforme double – print et digitale –
              permettant aux marques de communiquer efficacement auprès
              d&apos;une audience spécialisée et exigeante. Notre version
              imprimée, au design raffiné, incarne le prestige et
              l&apos;expertise de l&apos;industrie, tandis que notre version
              digitale ouvre un canal interactif et moderne, accessible à tout
              moment.
            </p>
          </div>

          <Button link="/">A propos</Button>
        </div>

        <div className="bg-bgLight max-lg:pb-12 col-span-5 grid items-center overflow-hidden">
          <video
            className="m-auto w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/magazine-heritage-specialiste-innovations-sante.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
    </main>
  );
}
