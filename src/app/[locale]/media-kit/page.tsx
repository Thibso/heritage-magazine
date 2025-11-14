import ascher from "@/app/img/media-kit/mockup-dr-ascher.jpg";
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
      <section className="min-h-screen relative z-[1] grid pt-20 lg:pt-16">
        <Image
          src={texture}
          alt="texture"
          quality={100}
          fill
          className="absolute top-0 left-0 object-cover -z-[1]"
        />
        <div className="myContainer w-full my-auto space-y-8">
          <h1 className="text-white uppercase text-3xl lg:text-8xl text-center">
            MEDIA KIT
          </h1>

          <div className="text-white space-y-2">
            {t.rich("abstract", {
              p: (chunk) => <p className="font-sfPro">{chunk}</p>,
              orange: (chunk) => <span className="text-orange">{chunk}</span>,
              br: () => <br />,
            })}
          </div>
          <div className="max-lg:space-y-8 lg:grid lg:grid-cols-3 lg:gap-8">
            {/* FR */}
            <div className="col-span-1 relative space-y-8">
              <Link
                href={"/" + params.locale + "/media-kit/french"}
                className="group relative w-full aspect-[16/11] z-[1]"
              >
                <Image
                  src={ascher}
                  alt=""
                  quality={100}
                  fill
                  className="absolute top-0 left-0 size-full object-cover -z-[2]"
                />
                <div className="opacity-0 transition-all group-hover:opacity-55 absolute top-0 left-0 size-full bg-mainBlue -z-[1]"></div>
                {/* <div className="hidden absolute size-full top-0 left-0 group-hover:grid p-4">
                  <div className="w-full text-center my-auto text-white space-y-2">
                    <p>
                      zdkido zaojdazj dzaddzdizoajdoi zajdzjd
                      zadjzadjzadjzaduzahduzah dzahd zadhzadzahd zad zad
                    </p>
                  </div>
                </div> */}
              </Link>

              <h2 className="h2 text-white text-center">{t("versions.fr")}</h2>
            </div>

            {/* INTERNATIONAL */}
            <div className="col-span-1 relative space-y-8">
              <Link
                href={"/" + params.locale + "/media-kit/english"}
                className="group relative w-full aspect-[16/11] z-[1]"
              >
                <Image
                  src={ascher}
                  alt=""
                  quality={100}
                  fill
                  className="absolute top-0 left-0 size-full object-cover -z-[2]"
                />
                <div className="opacity-0 transition-all group-hover:opacity-55 absolute top-0 left-0 size-full bg-mainBlue -z-[1]"></div>
                {/* <div className="hidden absolute size-full top-0 left-0 group-hover:grid p-4">
                  <div className="w-full text-center my-auto text-white space-y-2">
                    <p>
                      zdkido zaojdazj dzaddzdizoajdoi zajdzjd
                      zadjzadjzadjzaduzahduzah dzahd zadhzadzahd zad zad
                    </p>
                  </div>
                </div> */}
              </Link>

              <h2 className="h2 text-white text-center">
                {t("versions.inter")}
              </h2>
            </div>

            {/* EXCLUSIVE */}
            <div className="col-span-1 relative space-y-8">
              <Link
                href={""}
                className="group relative w-full aspect-[16/11] z-[1]"
              >
                <Image
                  src={ascher}
                  alt=""
                  quality={100}
                  fill
                  className="absolute top-0 left-0 size-full object-cover -z-[2]"
                />
                <div className="opacity-0 transition-all group-hover:opacity-55 absolute top-0 left-0 size-full bg-mainBlue -z-[1]"></div>
                {/* <div className="hidden absolute size-full top-0 left-0 group-hover:grid p-4">
                  <div className="w-full text-center my-auto text-white space-y-2">
                    <p>
                      zdkido zaojdazj dzaddzdizoajdoi zajdzjd
                      zadjzadjzadjzaduzahduzah dzahd zadhzadzahd zad zad
                    </p>
                  </div>
                </div> */}
              </Link>

              <h2 className="h2 text-white text-center">
                {t("versions.exclusive")}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
