import fr from "@/app/img/media-kit/france-heritage-magazine.jpg";
import en from "@/app/img/media-kit/international-heritage-magazine.jpg";
import header from "@/app/img/MEDIA-SPECIALISE-MEDECINE-ESTHETIQUE-CHIRURGIE.jpg";
import texture from "@/app/img/meilleure-agence-web-medicale-paris.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

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

export default function About({ params }: Params) {
  const t = useTranslations("Media_kit");

  return (
    <main>
      <section>
        <div className="px-5 py-4 max-lg:h-[500px] lg:h-screen max-h-[1200px] grid items-end relative lg:px-7 lg:py-4">
          <h1 className="text-white uppercase text-3xl lg:text-8xl">
            MEDIA KIT
          </h1>
          <Image
            src={header}
            alt=""
            className="absolute lg:fixed size-full top-0 left-0 object-cover -z-[2]"
          />

          <div className="absolute bg-mainBlue/40 -z-[1] size-full top-0 left-0"></div>
        </div>
      </section>
      <section className="relative z-[1] grid md:pt-16">
        <Image
          src={texture}
          alt="texture"
          quality={100}
          fill
          className="absolute top-0 left-0 object-cover -z-[1]"
        />
        <div className="myContainer w-full my-auto space-y-8">
          <div className="text-white space-y-2">
            {t.rich("abstract", {
              p: (chunk) => <p className="font-sfPro">{chunk}</p>,
              orange: (chunk) => <span className="text-orange">{chunk}</span>,
              br: () => <br />,
            })}
          </div>
          <div className="max-md:space-y-8 md:grid md:grid-cols-2 md:gap-8 max-w-screen-md md:mx-auto">
            {/* FR */}
            <div className="col-span-1 relative space-y-8 ">
              <Link
                href={"/" + params.locale + "/media-kit/french"}
                className="group relative w-full aspect-[9/12] z-[1]"
              >
                <Image
                  src={fr}
                  alt=""
                  quality={100}
                  fill
                  className="absolute bottom-0 left-1/2 size-full object-cover -z-[2]"
                />
                <div className="opacity-0 transition-all group-hover:opacity-55 absolute top-0 left-0 size-full bg-mainBlue -z-[1]"></div>
              </Link>

              <h2 className="h2 text-white text-center">{t("versions.fr")}</h2>
            </div>

            {/* INTERNATIONAL */}
            <div className="col-span-1 relative space-y-8">
              <Link
                href={"/" + params.locale + "/media-kit/english"}
                className="group relative w-full aspect-[9/12] z-[1]"
              >
                <Image
                  src={en}
                  alt=""
                  quality={100}
                  fill
                  className="absolute bottom-0 left-0 size-full object-cover -z-[2]"
                />
                <div className="opacity-0 transition-all group-hover:opacity-55 absolute top-0 left-0 size-full bg-mainBlue -z-[1]"></div>
              </Link>

              <h2 className="h2 text-white text-center">
                {t("versions.inter")}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
