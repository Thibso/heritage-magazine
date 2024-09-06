import { useTranslations } from "next-intl";
import Image from "next/image";
import SliderCards from "../components/SliderCards";
import woman from "../img/magazine-innovation-sante.jpg";

type Params = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  if (locale === "en") {
    return {
      title: "Titre EN",
      description: "Description EN",
    };
  } else if (locale === "fr") {
    return {
      title: "Titre FR",
      description: "Description FR",
    };
  }
}

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <section className="myContainer relative grid items-center bg-headerBlue h-screen max-h-[1080px] w-full">
        <video className="m-auto" width="80%" height="auto" autoPlay loop>
          <source src="/motion-logo.mp4" type="video/mp4" />
        </video>
        <h1 className="absolute w-fit top-[60%] left-1/2 -translate-x-1/2 header-title text-white text-center">
          {t("title")}
        </h1>
      </section>

      <section className="grid grid-cols-8 max-w-[1920px] m-auto">
        <div className="col-span-3 w-full h-full relative">
          <Image
            src={woman}
            alt="Illustration esthétique"
            className="absolute w-full h-full object-cover object-center"
          />
        </div>

        <div className="myContainer col-span-5 space-y-16">
          <div>
            <h2 className="h2">Heritage Magazine</h2>
            <h3 className="h3 mt-4 font-monaLight">
              Le média dédié à l&apos;innovation
            </h3>
          </div>

          <div className="space-y-4">
            <p className="font-medium">
              Qu&apos;est-ce qu&apos;(H)ERITAGE Magazine et en quoi il se
              distingue
            </p>

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

      <section className="grid grid-cols-8 max-w-[1920px] m-auto">
        <div className="myContainer bg-mainBlue col-span-3 space-y-16">
          <div>
            <h2 className="h2 text-white">Heritage Magazine</h2>
            <h3 className="h3 mt-4">Le média dédié à l&apos;innovation</h3>
          </div>

          <div className="space-y-4 text-white">
            <p>
              Print & digital : Une double plateforme pour valoriser les marques
            </p>

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
            <p>
              Que ce soit pour présenter vos dernières innovations en matière de
              dispositifs médicaux, ou valoriser vos produits phares, (H)ERITAGE
              est le lieu idéal pour vous connecter avec des chirurgiens,
              médecins et dermatologues qui sont à la recherche de nouvelles
              solutions pour optimiser leurs pratiques.
            </p>
            <p>
              Faire partie d&apos;(H)ERITAGE Magazine, c’est s’assurer une
              visibilité pérenne dans un secteur compétitif et en constante
              évolution. Rejoignez-nous pour développer la notoriété de votre
              marque dans un cadre de prestige où l&apos;excellence est à
              l&apos;honneur.
            </p>
          </div>

          <button>Lire l&apos;article</button>
        </div>

        <div className="bg-bgLight col-span-5 grid items-center overflow-hidden">
          <video className="m-auto scale-125 object-cover" autoPlay loop>
            <source src="/magazine.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="overflow-hidden max-w-[1920px] m-auto">
        <div className="myContainer max-w-screen-xl m-auto space-y-16">
          <div className="text-center">
            <h2 className="h2 text-mainBlue">Heritage Magazine</h2>
            <h3 className="h3 mt-4">Le média dédié à l&apos;innovation</h3>
          </div>

          <SliderCards />
        </div>
      </section>
    </main>
  );
}
