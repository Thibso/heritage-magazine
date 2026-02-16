import aerolase from "@/app/img/aerolase-partenaire-heritage-magazine.png";
import aime from "@/app/img/congres/aime-congress-aesthetic-medicine-paris.png";
import imcas from "@/app/img/congres/imcas-congres-medecine-esthetique-chirurgie-plastique-dermatologie.png";
import sfme from "@/app/img/congres/sfme-congress-paris-aesthetic-medicine.png";
import fr from "@/app/img/fr.jpg";
import healthcie from "@/app/img/healthcie-partenaire-heritage-magazine.png";
import idocteur from "@/app/img/idocteur-partner-heritage-magazine.png";
import julien from "@/app/img/Julien-vervel-consultant-médical-laboratoires.jpg";
import logo from "@/app/img/logo-heritage.png";
import mais from "@/app/img/medical-injectable-summit.png";
import texture from "@/app/img/meilleure-agence-web-medicale-paris.png";
import olivier from "@/app/img/olivier-claire-partenaire-heritage-magazine.png";
import slide_5 from "@/app/img/plastic-surgeons-best-magazine.jpg";
import praguelab from "@/app/img/prague-lab-partner-heritage-magazine.png";
import thinkin from "@/app/img/thinkin-partenaire-heritage-magazine.png";
import vivacy from "@/app/img/vivacy-logo-official.webp";
import Image from "next/image";
// Major Images
import magazine_vertical from "@/app/img/media-kit/magazine-heritage-book.jpg";
import la_padula from "@/app/img/media-kit/mockup-simone-lapadula.jpg";
// =============

import hydra from "@/app/img/hydrafacial-partner-heritage-magazine-aesthetic.png";
import nooance from "@/app/img/nooance-partner-heritage-magazine.png";
import josse from "@/app/img/thomas-josse-partenaire-heritage-magazine.png";

import aptos from "@/app/img/aptos-heritage-magazine-partner.png";
import canfield from "@/app/img/canfield-heritage-magazine-partner.png";
import cutera from "@/app/img/cutera-heritage-magazine-partner.png";
import rejuran from "@/app/img/rejuran-heritage-magazine-partner.png";
import skinceuticals from "@/app/img/skinceuticals-heritage-magazine-partner.png";
import sunekos from "@/app/img/sune-kos-heritage-magazine-partner.png";

type Params = {
  params: { locale: string };
};

const titleEN = "";
const descriptionEN = "";

const titleFR = "";
const descriptionFR = "";

export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  if (locale === "en") {
    return {
      title: titleEN,
      description: descriptionEN,
      robots: {
        index: false,
        follow: false,
        nocache: true,
      },
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
      robots: {
        index: false,
        follow: false,
        nocache: true,
      },
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

export default function MediaKitFrench() {
  return (
    <>
      {/* 1 */}
      <section className="lg:min-h-screen relative grid max-lg:pt-16">
        <Image
          src={texture}
          alt="texture"
          quality={100}
          fill
          className="absolute top-0 left-0 object-cover"
        />
        <div className="myContainer relative flex flex-col max-lg:space-y-8 justify-end size-full">
          <Image
            src={logo}
            alt="Logo HERITAGE Magazine"
            quality={100}
            className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 object-contain w-[70%] max-lg:mx-auto lg:left-1/2 lg:-translate-x-1/2"
          />
          <div className="space-y-8 lg:space-y-12 text-white text-center">
            <div className="space-y-6">
              <h1 className="text-lg lg:text-2xl">
                Un ecosystème premium pour les leaders de l’industrie
              </h1>
              <Image src={fr} alt="UK" className="w-10 mx-auto" />
            </div>
            <p className="text-base opacity-80">By HEALTHCIE</p>
          </div>
        </div>
      </section>
      {/* 2 */}
      <section className="min-h-screen relative grid lg:pl-32">
        <h3 className="text-orange font-bold text-4xl lg:text-[115px] lg:absolute -bottom-[0.5em] left-[0.3em] lg:origin-left lg:-rotate-90 leading-[0.9em]">
          PREAMBULE
        </h3>
        <div className="myContainer my-auto space-y-8 lg:space-y-16">
          <div className="space-y-4">
            <p className="text-base lg:text-lg lg:flex">
              <span className="lg:text-[150px] leading-[0.8em]">A</span>
              <span>
                près le succès des deux premières éditions, nous sommes ravis de
                vous présenter la troisième édition d&apos;HERITAGE Magazine,
                devenu un rendez-vous incontournable dans l’univers exigeant et
                en constante évolution de la médecine esthétique.
                <br />
                <br />
                Positionné en France comme un Média influent et disruptif,
                HERITAGE se distingue avec sa plateforme éditoriale pensée pour
                décrypter les stratégies et dévoiler les innovations majeures du
                secteur.
              </span>
            </p>
            <p className="text-base lg:text-lg">
              Fidèles à notre ADN, nous conservons une approche centrée sur le
              Practice Management, avec une lecture orientée performance,
              positionnement et développement maîtrisé des pratiques.
            </p>
            <p className="text-base lg:text-lg">
              HERITAGE Magazine s’adresse aux chirurgiens, médecins,
              dermatologues et acteurs stratégiques de l’industrie. Diffusé lors
              des congrès majeurs et d’événements privés, le support print est
              transmis à la main aux Leaders d&apos;opinion afin de vous offrir
              une diffusion ultra-ciblée auprès des acteurs qui influencent
              réellement le marché.
            </p>
            <p>
              Notre écosystème intègre également une plateforme web dédiée,
              conçue pour référencer les marques partenaires de manière pérenne.
              Cette présence digitale assure une visibilité sur les moteurs de
              recherche et au sein des IA génératives, renforçant ainsi leur
              reconnaissance et leur visibilité dans le temps.
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-8 lg:gap-8 max-lg:space-y-4">
            <div className="lg:col-span-2 relative w-full lg:w-[80%] h-[350px] lg:h-auto lg:aspect-[9/11]">
              <Image
                src={julien}
                alt="Julien VERVEL"
                className="absolute object-cover object-top top-0 left-0 size-full"
              />
            </div>

            <div className="lg:col-span-6 lg:h-full lg:flex lg:flex-col lg:justify-between max-lg:space-y-8">
              <div className="space-y-4">
                <p>
                  HERITAGE Magazine constitue un cadre éditorial sélectif pour
                  les marques souhaitant affirmer leur positionnement,
                  promouvoir leurs innovations et inscrire leur image dans une
                  dynamique durable et qualitative.
                </p>

                <p>
                  Rejoindre HERITAGE, c’est intégrer un écosystème privilégié au
                  service de votre marque soutenue par les Leaders d’Opinion.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-sfPro">Julien Vervel</h4>
                <p>Directeur de la rédaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3 */}
      <section className="lg:min-h-screen relative lg:grid lg:px-32 bg-slate-50">
        <h3 className="text-orange font-bold text-4xl lg:text-[115px] lg:absolute -bottom-[0.5em] left-[0.3em] lg:origin-left lg:-rotate-90 leading-[0.9em]">
          REDACTION
        </h3>
        <div className="max-lg:hidden absolute right-0 top-0 w-[300px] h-full">
          <Image
            src={magazine_vertical}
            alt="HERITAGE Magazine"
            quality={100}
            className="absolute top-0 left-0 size-full object-cover"
          />
        </div>
        <div className="myContainer w-full my-auto grid grid-cols-2 max-lg:gap-4">
          <div className="space-y-12 col-span-1">
            <div>
              <h4 className="font-semibold text-base lg:text-lg">
                DIRECTEUR DE RÉDACTION
              </h4>
              <p>JULIEN VERVEL</p>
            </div>
            <div>
              <h4 className="font-semibold text-base lg:text-lg">
                RÉDACTEUR EN CHEF
              </h4>
              <p>HUGO NIVAULT</p>
            </div>

            <div>
              <h4 className="font-semibold text-base lg:text-lg">TRADUCTION</h4>
              <p>HUGO NIVAULT</p>
            </div>

            <div>
              <h4 className="font-semibold text-base lg:text-lg">
                PHOTOGRAPHIE
              </h4>
              <p>THÉO VEILLARD</p>
            </div>

            <div>
              <h4 className="font-semibold text-base lg:text-lg">
                DIRECTION ARTISTIQUE
              </h4>
              <p>MATHILDE PIVIDAL</p>
            </div>
          </div>

          <div className="space-y-12 col-span-1">
            <div>
              <h4 className="font-semibold text-base lg:text-lg">
                SITE INTERNET
              </h4>
              <p> MAGAZINE-HERITAGE.COM</p>
            </div>
            <div>
              <h4 className="font-semibold text-base lg:text-lg">
                RÉSEAUX SOCIAUX
              </h4>
              <p>@MAGAZINE_HERITAGE - INSTAGRAM</p>
              <p>HERITAGE MAGAZINE - LINKEDIN</p>
            </div>

            <div>
              <h4 className="font-semibold text-base lg:text-lg">IMPRESSION</h4>
              <p>SODAL</p>
            </div>

            <div>
              <h4 className="font-semibold text-base lg:text-lg">
                COUVERTURE ET 4EME DE COUVERTURE
              </h4>
              <p>MATHILDE PIVIDAL</p>
            </div>
          </div>
        </div>
      </section>
      {/* 4 */}
      <section className="lg:min-h-screen relative lg:grid lg:pl-32 bg-mainBlue">
        <h3 className="text-orange font-bold text-4xl lg:text-[115px] lg:absolute -bottom-[0.5em] left-[0.3em] lg:origin-left lg:-rotate-90 leading-[0.9em]">
          PRINT
        </h3>
        <div className="lg:grid lg:grid-cols-7 size-full">
          <div className="lg:col-span-3 myContainer text-white size-full">
            <div className="lg:pt-[100px] space-y-4">
              <p>
                (H)ERITAGE offre un support print pour promouvoir vos produits
                et services auprès des chirurgiens et des médecins français et
                internationaux.
              </p>
              <p>
                Notre version imprimée, au design raffiné, incarne le prestige
                et l’expertise de l’industrie.
              </p>
              <p>
                Son contenu exclusif explore les dernières tendances,
                innovations et meilleures pratiques de l’industrie, offrant une
                visibilité directe à votre marque auprès des professionnels de
                santé.
              </p>
              <p>
                Ne manquez pas l’opportunité de rejoindre notre communauté et
                ainsi témoigner de votre engagement envers l’innovation et
                l’avancement des pratiques médicales.
              </p>

              <div className="flex justify-center gap-4 pt-4 lg:pt-24">
                <Image src={fr} alt="FR" className="w-10" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 relative z-[1] grid h-[450px] lg:h-full">
            <Image
              src={slide_5}
              alt="Magazine HERITAGE"
              quality={100}
              className="absolute top-0 left-0 size-full object-cover -z-[1]"
            />

            <div className="text-white p-4 lg:p-8 m-auto mb-0 ml-0 space-y-4 lg:space-y-6">
              <p>
                <span className="text-orange">Dimensions :</span> 210mm x 275mm
              </p>
              <p>
                <span className="text-orange">Nombre de pages :</span> 80 + 4
              </p>
              <p>
                <span className="text-orange">Date butoir :</span> Mai 2026
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 5 */}
      <section className="lg:min-h-screen relative lg:grid lg:pl-32 bg-slate-50">
        <h3 className="text-orange font-bold text-4xl lg:text-[115px] lg:absolute -bottom-[0.5em] left-[0.3em] lg:origin-left lg:-rotate-90 leading-[0.9em]">
          DIGITAL
        </h3>
        <div className="lg:grid lg:grid-cols-7 size-full">
          <div className="lg:col-span-3 myContainer text-mainBlue space-y-4 size-full flex flex-col justify-end">
            <p>
              Nous offrons une plateforme double – print et digitale –
              permettant aux marques de communiquer efficacement auprès d’une
              audience spécialisée et exigeante. Notre version digitale ouvre un
              canal interactif et moderne, accessible à tout moment.
            </p>
            <p>
              Que ce soit pour présenter vos dernières innovations en matière de
              dispositifs médicaux, ou valoriser vos produits phares, (H)ERITAGE
              est le lieu idéal pour vous connecter avec des chirurgiens,
              médecins et dermatologues qui sont à la recherche de nouvelles
              solutions pour optimiser leurs pratiques.
            </p>
            <p>
              Faire partie d’(H)ERITAGE Magazine, c’est s’assurer une visibilité
              pérenne dans un secteur compétitif et en constante évolution.
            </p>
          </div>
          <div className="col-span-4 relative grid h-[350px] lg:h-full">
            <Image
              src={la_padula}
              alt="Magazine HERITAGE"
              quality={100}
              className="absolute top-0 left-0 size-full object-cover object-bottom"
            />
          </div>
        </div>
      </section>
      {/* 6 */}
      <section className="lg:min-h-screen relative lg:px-32 lg:grid bg-white">
        <h3 className="text-orange font-bold text-4xl lg:text-[115px] lg:absolute -bottom-[0.5em] left-[0.3em] lg:origin-left lg:-rotate-90 leading-[0.9em]">
          PARTENAIRES
        </h3>
        <div className="myContainer w-full space-y-8 lg:space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="h2">RÉSEAU DE DISTRIBUTION</h2>
            <h3 className="h3">
              Notre réseau de distribution évolue en permanence
            </h3>
          </div>

          <div className="grid md:grid-cols-3 items-center max-w-[1024px] m-auto gap-x-8">
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

          <div className="space-y-2 text-center">
            <h2 className="h2">
              ENTREPRISES DE DISPOSITIFS MÉDICAUX PARTENAIRES
            </h2>
            <h3 className="h3">
              Notre réseau de partenaires évolue en permanence
            </h3>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 items-center max-w-[1200px] m-auto gap-x-8 ">
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
        </div>
      </section>
      {/* 7 */}
      <section className="lg:min-h-screen relative lg:px-32 lg:grid bg-slate-50">
        <h3 className="text-orange font-bold text-4xl lg:text-[115px] lg:absolute -bottom-[0.5em] left-[0.3em] lg:origin-left lg:-rotate-90 leading-[0.9em]">
          PACK(H)
        </h3>
        <div className="myContainer w-full lg:w-[90%] mx-auto space-y-8 lg:space-y-16">
          <h2 className="text-xl font-semibold text-center">Pack (H)ERITAGE</h2>
          <div className="space-y-4">
            <p>
              Pour les laboratoires et les fabricants de dispositifs médicaux,
              nous proposons le pack (H)ERITAGE comprennant :
            </p>
            <ul className="ml-4 list-disc text-lg space-y-2">
              <li>
                1 interview de deux doubles-pages avec 2 encarts photos (FR-EN)
              </li>
              <li>1 page de publicité dans la prochaine édition</li>
              <li>
                backlink (lien « entrant » depuis notre site vers le vôtre)
              </li>
              <li>
                publication de votre article résumé dans notre newsletter (11
                000 médecins)
              </li>
            </ul>
            <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center !mt-12">
              <p>Prix du pack (H)ERITAGE</p>
              <div className="border-t-[1px] border-mainBlue/70"></div>
              <p>4000 EUROS HT</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-center">
            Options du Pack (H)ERITAGE
          </h2>
          <div className="space-y-4">
            <ul className="ml-4 list-disc text-lg space-y-2">
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p>Bannière publicitaire (en-tête du site web)</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p>1000 EUROS HT</p>
                </div>
              </li>
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p>3 crossposts + 3 stories Instagram</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p>500 EUROS HT</p>
                </div>
              </li>
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p>100 exemplaires (livraison en France)</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p>1200 EUROS HT</p>
                </div>
              </li>
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p>100 exemplaires (livraison dans votre pays)</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p>SUR DEMANDE</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* 8 */}
      {/* <section className="lg:min-h-screen relative lg:px-32 lg:grid bg-white">
        <h3 className="text-orange font-bold text-4xl lg:text-[115px] lg:absolute -bottom-[0.5em] left-[0.3em] lg:origin-left lg:-rotate-90 leading-[0.9em]">
          EXEMPLES
        </h3>
        <div className="myContainer w-full lg:w-[90%] mx-auto space-y-8 lg:space-y-20 lg:mb-0">
          <ul className="list-disc space-y-8 lg:space-y-12 ml-4">
            <li className="space-y-4">
              <span>Une interview de deux doubles pages</span>
              <Image
                src={example1}
                alt="Double page interview"
                quality={100}
                className="max-h-[250px] object-contain w-fit"
              />
            </li>
            <li className="space-y-4">
              <span>
                L’article complet optimisé pour le référencement sur la
                plateforme numérique + backlink
              </span>
              <Image
                src={example2}
                alt="Article SEO"
                quality={100}
                className="max-h-[250px] object-contain w-fit"
              />
            </li>
          </ul>
        </div>
      </section> */}
      {/* 9 */}
      <section className="lg:min-h-screen relative lg:px-32 lg:grid bg-white">
        <h3 className="text-orange font-bold text-4xl lg:text-[115px] lg:absolute -bottom-[0.5em] left-[0.3em] lg:origin-left lg:-rotate-90 leading-[0.9em]">
          TARIFS PUB
        </h3>
        <div className="myContainer w-full lg:w-[80%] mx-auto space-y-8 lg:space-y-20">
          <h2 className="text-xl font-semibold text-center">Publicité</h2>
          <div className="space-y-4">
            <ul className="space-y-6">
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p className="text-base lg:text-xl">DEUXIÈME COUVERTURE</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p className="text-base lg:text-xl">3500 EUROS HT</p>
                </div>
              </li>
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p className="text-base lg:text-xl">TROISIÈME COUVERTURE</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p className="text-base lg:text-xl">3000 EUROS HT</p>
                </div>
              </li>
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p className="text-base lg:text-xl">
                    QUATRIÈME DE COUVERTURE
                  </p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p className="text-base lg:text-xl">4500 EUROS HT</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p className="text-base lg:text-xl"> PACK SUR MESURE</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p className="text-base lg:text-xl">SUR DEMANDE</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* 10 */}
      <section className="lg:min-h-screen relative lg:px-32 lg:grid bg-mainBlue text-white">
        <h3 className="text-orange font-bold text-4xl lg:text-[115px] lg:absolute -bottom-[0.5em] left-[0.3em] lg:origin-left lg:-rotate-90 leading-[0.9em]">
          CONTACT
        </h3>
        <div className="myContainer w-full lg:w-[90%] mx-auto max-lg:space-y-4 lg:grid lg:grid-cols-2">
          <div className="space-y-8 lg:space-y-16">
            <div className="space-y-4">
              <h3 className="text-base lg:text-2xl font-light">
                Site internet
              </h3>
              <p className="text-lg lg:text-3xl ">magazine-heritage.com</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-base lg:text-2xl font-light">Email</h3>
              <p className="text-lg lg:text-3xl ">
                contact@magazine-heritage.com
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-base lg:text-2xl font-light">
                Numéro de téléphone
              </h3>
              <p className="text-lg lg:text-3xl ">+33 6 77 39 02 75</p>
            </div>
          </div>
          <div className="h-full flex flex-col lg:justify-between max-lg:gap-4 max-lg:items-center">
            <Image
              src={logo}
              alt="Logo HERITAGE Magazine"
              quality={100}
              className="object-contain w-[70%] lg:w-[100%] max-lg:mx-auto"
            />
            <div className="flex gap-4 justify-center col-span-1">
              {/* instagram */}
              <a
                href="https://www.instagram.com/magazine_heritage/"
                target="_blank"
                title="Intagram (H)ERITAGE Magazine"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-12 h-auto stroke-white"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61564632284607"
                target="_blank"
                title="Facebook (H)ERITAGE Magazine"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth="0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-12 h-auto fill-white stroke-white"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/magazine-heritage/"
                target="_blank"
                title="Linkedin (H)ERITAGE Magazine"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth="0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-12 h-auto fill-white stroke-white"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
