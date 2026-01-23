import header from "@/app/img/DSC04548.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Params = {
  params: { locale: string };
};

const titleEN = "Interviews with opinion leaders for HERITAGE";
const descriptionEN =
  "Interviews with opinion leaders for HERITAGE. Discover the latest innovations in plastic surgery and anti-aging medicine. (H)ERITAGE Magazine";

const titleFR = "Interviews des leaders d'opinion pour HERITAGE";
const descriptionFR =
  "Interviews des leaders d'opinion pour HERITAGE. Découvrez les dernières innovations en chirurgie esthétique & médecine anti-âge. (H)ERITAGE Magazine";

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

export default function Vidéos({ params }: Params) {
  const t = useTranslations("Videos");
  const locale = params.locale;

  return (
    <main>
      <section>
        <div className="px-5 py-4 max-lg:h-[500px] lg:h-screen max-h-[1200px] grid items-end relative lg:px-7 lg:py-4">
          <Image
            priority
            placeholder="blur"
            src={header}
            alt=""
            className="max-lg:h-[500px] max-lg:w-[1024px] absolute lg:fixed size-full top-0 left-0 object-cover -z-[1] object-[50%_40%]"
          />
          <h1 className="text-white uppercase text-3xl lg:text-8xl">
            {t("h1")}
          </h1>
        </div>
      </section>

      <section className="bg-bgLight">
        <div className="myContainer space-y-8 lg:space-y-16">
          <div>
            <h2 className="h2 text-black">{t("h2")}</h2>
            <h3 className="h3 mt-2 lg:mt-4">{t("h3")}</h3>
            <div className="w-full bg-orange h-px block mt-6"></div>
          </div>

          {locale === "fr" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <iframe
                width="1194"
                height="672"
                src="https://www.youtube.com/embed/fiWonCcWNuY"
                title="Histoire Médecine Esthétique | Docteur Deutsch Jean-Jacques"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-auto aspect-video"
              ></iframe>
              <iframe
                width="1194"
                height="672"
                src="https://www.youtube.com/embed/QtugbyL_vm0"
                title="Vision humaniste de la médecine esthétique | Docteur Loison Damien"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-auto aspect-video"
              ></iframe>
              <iframe
                width="1194"
                height="672"
                src="https://www.youtube.com/embed/qAW3An2Fw8I"
                title="Docteur Ascher Benjamin | Sibus-In | Interview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-auto aspect-video"
              ></iframe>
              <iframe
                width="1194"
                height="672"
                src="https://www.youtube.com/embed/Lsswpplttbs"
                title="Traitements de la rosacée en dermatologie | Docteur Foucourt Romain | Interview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-auto aspect-video"
              ></iframe>
              <iframe
                width="1194"
                height="672"
                src="https://www.youtube.com/embed/5dajGLqnIqc"
                title="Réglementation des injections de Botox | Gabour Luiza | Interview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-auto aspect-video"
              ></iframe>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <iframe
                width="1194"
                height="672"
                src="https://www.youtube.com/embed/Yffi9tIJvEI"
                title="Aesthetic Medicine History | Doctor Deutsch Jean-Jacques"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-auto aspect-video"
              ></iframe>
              <iframe
                width="1194"
                height="672"
                src="https://www.youtube.com/embed/ksnnZKBjIsk"
                title="Doctor Ascher Benjamin | Sibus-In | Interview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-auto aspect-video"
              ></iframe>
              <iframe
                width="1194"
                height="672"
                src="https://www.youtube.com/embed/3i-1TIgZxEc"
                title="Rosacea treatments in dermatology | Doctor Foucourt Romain | Interview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-auto aspect-video"
              ></iframe>
              <iframe
                width="1194"
                height="672"
                src="https://www.youtube.com/embed/ScDFUayPt54"
                title="Botox Injection regulation | Gabour Luiza | Interview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-auto aspect-video"
              ></iframe>
              <iframe
                width="1194"
                height="672"
                src="https://www.youtube.com/embed/hbKIoZjBLA0"
                title="A humanistic approach to aesthetic medicine | Loison Damien  | Interview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-auto aspect-video"
              ></iframe>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
