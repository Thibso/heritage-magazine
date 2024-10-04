import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "../components/buttons/Button";
import magMobile from "../img/magazine-innovation-sante-mobile.jpg";
import mag from "../img/magazine-innovation-sante.jpg";

type Params = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  if (locale === "en") {
    return {
      title:
        "HERITAGE Magazine | Innovations in aesthetic & anti-aging medicine",
      description:
        "(H)ERITAGE Magazine. Premium media dedicated to innovation in aesthetic surgery, medicine and dermatology. Discover (H)ERITAGE Magazine",
    };
  } else if (locale === "fr") {
    return {
      title:
        "HERITAGE Magazine | Innovations en médecine esthétique & anti-âge",
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

        <video
          className="lg:hidden absolute h-full top-0 left-1/2 -translate-x-1/2 right-0 bottom-0 max-w-[2550px]"
          autoPlay
          muted
          playsInline
          loop
        >
          <source
            src="/magazine-esthetique-heritage-antiage-2.mp4"
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
          {t("cta")}
        </a>
      </section>

      <section className="lg:grid lg:grid-cols-8 max-w-[1920px] m-auto max-lg:bg-bgLight">
        <div className="col-span-3 w-full h-full relative">
          <Image
            src={mag}
            alt="Illustration (H)ERITAGE magazine"
            className="max-lg:hidden absolute w-full h-full object-cover object-center"
          />
          <Image
            src={magMobile}
            alt="Illustration (H)ERITAGE magazine"
            className="lg:hidden h-80 object-cover object-center"
          />
        </div>

        <div className="myContainer col-span-5 space-y-8 lg:space-y-16">
          <div>
            <h1 className="h2">{t("p1.h1")}</h1>
            <h2 className="h3 mt-2 lg:mt-4 font-sfPro">{t("p1.h2")}</h2>
          </div>

          <div className="space-y-4">
            {t.rich("p1.content", {
              p: (chunks) => <p>{chunks}</p>,
            })}
          </div>
        </div>
      </section>

      <section
        id="discover"
        className="max-lg:flex max-lg:flex-col-reverse lg:grid lg:grid-cols-8 max-w-[1920px] m-auto"
      >
        <div className="myContainer bg-mainBlue col-span-3 space-y-8 lg:space-y-16">
          <div>
            <h2 className="h2 text-white">{t("p2.h2")}</h2>
            <h3 className="h3 mt-2 lg:mt-4">{t("p2.h3")}</h3>
          </div>

          <div className="space-y-4 text-white">
            {t.rich("p2.content", {
              p: (chunks) => <p>{chunks}</p>,
            })}
          </div>

          <Button link="/">{t("p2.cta")}</Button>
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
