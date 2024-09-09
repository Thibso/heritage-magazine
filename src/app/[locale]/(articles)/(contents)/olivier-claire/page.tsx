import Button from "@/app/components/buttons/Button";
import header from "@/app/img/articles/olivier_claire/header.jpg";
import logo from "@/app/img/articles/olivier_claire/logo.jpg";
import { useTranslations } from "next-intl";
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
      title: "Olivier Claire",
      description: "Articles description",
    };
  }
}

export default function Test() {
  const t = useTranslations("Articles.Olivier_Claire");
  const tags = ["t1", "t2", "t3"] as const;
  const contents = ["p1", "p2", "p3", "p4", "p5", "p6"] as const;
  return (
    <>
      <section className="myContainer lg:space-x-16 full-screen max-lg:flex max-lg:flex-col-reverse max-lg:gap-10 lg:grid lg:grid-cols-5 text-mainBlue">
        <div className="lg:col-span-2">
          <Image
            src={header}
            alt={t("img_alt")}
            title={t("img_alt")}
            className="size-full max-lg:h-[400px] object-cover object-top"
          />
        </div>

        <div className="lg:col-span-3 flex flex-col justify-around gap-8">
          <div className="flex flex-col justify-between gap-4 lg:gap-6">
            {/* Tags */}
            <div className="flex gap-2 lg:gap-4 justify-left flex-wrap">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border-orange border-solid border-[1px] px-2 py-1 text-orange font-sfPro font-light rounded-full text-[12px] lg:text-sm"
                >
                  {t(`tags.${tag}.title`)}
                </span>
              ))}
            </div>

            <div className="space-y-2">
              <h1 className="text-left font-sfPro font-bold text-3xl lg:text-7xl uppercase">
                {t("h1")}
              </h1>
              <h2 className="text-left font-sfPro font-semibold text-sm lg:text-xl uppercase">
                {t("author")}
              </h2>
            </div>

            <div>
              <Button link="#">Découvrir la marque</Button>
            </div>
          </div>

          <p className="text-left font-sfPro font-bold text-3xl lg:text-7xl">
            &quot;{t("abstract")}&quot;
          </p>
        </div>
      </section>

      <section className="myContainer lg:space-x-16 max-lg:flex max-lg:flex-col-reverse max-lg:gap-10 lg:grid lg:grid-cols-5 text-mainBlue">
        {/* Pub */}
        <div className="col-span-2">
          <a
            href="#"
            target="_blank"
            title="La marque Olivier Claire"
            className="lg:sticky lg:top-[35%] flex flex-col items-center gap-4"
          >
            <Image
              src={logo}
              alt="Logo Olivier Claire"
              title="Logo Olivier Claire"
              className="size-full max-lg:max-h-[350px] object-contain m-auto"
            />
            <span className="lg:hidden text-orange uppercase font-sfPro font-light">
              Découvrir la marque +
            </span>
          </a>
        </div>

        {/* Content */}
        <div className="col-span-3 space-y-8 lg:space-y-12">
          {contents.map((key) => (
            <div key={key} className="space-y-4">
              <h3 className="font-sfPro font-semibold text-base lg:text-lg">
                {t(`${key}.title`)}
              </h3>
              <p className="font-sfPro font-light text-base">
                {t(`${key}.content`)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
