import { useTranslations } from "next-intl";
import Image from "next/image";
import SliderCards from "../components/SliderCards";
import logo from "../img/logo-heritage-magazine.png";
import woman from "../img/magazine-innovation-sante.jpg";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <section className="myContainer bg-mainBlue h-screen max-h-[1080px] w-full">
        <h1 className="header-title text-white">{t("title")}</h1>
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

      <section className="grid grid-cols-8 max-w-[1920px] m-auto">
        <div className="myContainer bg-mainBlue col-span-3 space-y-16">
          <div>
            <h2 className="h2 text-white">Heritage Magazine</h2>
            <h3 className="h3 mt-4">Le média dédié à l&apos;innovation</h3>
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

          <button>Lire l&apos;article</button>
        </div>

        <div className="bg-bgLight col-span-5"></div>
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

      <footer className="myContainer bg-mainBlue text-white grid grid-cols-5">
        <div className="grid grid-cols-2 gap-6 col-span-2">
          <div className="space-y-4">
            <h2 className="h2 text-lg">
              <a href="">Heritage magazine</a>
            </h2>
            <ul>
              <li>
                <a href="" className="h3 text-white text-lg">
                  A propos
                </a>
              </li>
              <li>
                <a href="" className="h3 text-white text-lg">
                  Media kit / Prestations
                </a>
              </li>
              <li>
                <a href="" className="h3 text-white text-lg">
                  Informations
                </a>
              </li>
              <li>
                <a href="" className="h3 text-white text-lg">
                  Articles
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="h2 text-center text-lg">
              <a href="">Contact</a>
            </h2>
          </div>
        </div>

        <div className="flex gap-8 justify-center col-span-1">
          {/* instagram */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-auto"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>

          {/* Facebook */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-auto"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>

          {/* LinkedIn */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-auto"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </div>

        <div className="col-span-2 flex justify-end">
          <div className="w-[70%] space-y-4">
            <Image
              src={logo}
              alt="Illustration esthétique"
              className="w-[200px]"
            />

            <p className="text-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
