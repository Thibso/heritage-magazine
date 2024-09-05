import { useTranslations } from "next-intl";
import Image from "next/image";
import woman from "../img/magazine-innovation-sante.jpg";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <section className="container bg-mainBlue min-h-screen w-full">
        <h1 className="header-title text-white">{t("title")}</h1>
      </section>

      <section className="grid grid-cols-6 max-w-[1920px] m-auto">
        <div className="col-span-2 w-full h-full relative">
          <Image
            src={woman}
            alt="Illustration esthétique"
            className="absolute w-full h-full object-cover object-center"
          />
        </div>

        <div className="container col-span-4 space-y-16">
          <div>
            <h2 className="h2">Heritage Magazine</h2>
            <h3 className="h3 mt-4">Le média dédié à l'innovation</h3>
          </div>

          <div className="space-y-4">
            <p>
              Nous sommes ravis de vous dévoiler la seconde édition d’HERITAGE
              Magazine, votre nouveau rendez-vous incontournable dans l’univers
              vibrant de la médecine esthétique.
            </p>

            <p>
              Ce magazine annuel a pour objectif de mettre en avant les
              innovations les plus récentes en matière de produits et de
              technologies dans le secteur de l’esthétique.
            </p>

            <p>
              Pourquoi HERITAGE ? Parce que nous croyons que le passé de la
              chirurgie et de la médecine esthétique forme les fondations
              solides sur lesquelles nous bâtissons le présent et l’avenir. En
              nous appuyant sur les valeurs de la médecine, nous aspirons à
              sublimer l’avenir de la profession, en alliant tradition et
              innovation.
            </p>

            <p>
              HERITAGE Magazine s’adresse principalement aux chirurgiens, aux
              médecins et aux acteurs clés de l’industrie, notamment les
              laboratoires et les fabricants de dispositifs médicaux.
            </p>

            <p>
              Nous voulons créer une plateforme unique, print et digitale, où
              les idées innovantes, les meilleures pratiques et les succès les
              plus marquants se rencontrent et se célèbrent.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-6 max-w-[1920px] m-auto">
        <div className="container bg-mainBlue col-span-2 space-y-16">
          <div>
            <h2 className="h2 text-white">Heritage Magazine</h2>
            <h3 className="h3 mt-4">Le média dédié à l'innovation</h3>
          </div>

          <div className="space-y-4 text-white">
            <p>
              HERITAGE offre un support print pour promouvoir vos produits et
              services auprès des chirurgiens et des médecins français et
              internationaux.
            </p>

            <p>
              Notre contenu exclusif explore les dernières tendances,
              innovations et meilleures pratiques de l’industrie, offrant une
              visibilité directe à votre marque auprès des professionnels de
              santé.
            </p>

            <p>
              Ne manquez pas l’opportunité de rejoindre notre communauté et
              ainsi témoigner de votre engagement envers l’innovation et
              l’avancement des pratiques médicales.
            </p>
          </div>

          <button>Lire l'article</button>
        </div>

        <div className="bg-bgLight col-span-4"></div>
      </section>
    </main>
  );
}
