import Button from "@/app/components/buttons/Button";
import logo from "@/app/img/articles/dr_adda/aerolase-logo-laser-elite-dr-adda.png";
import header from "@/app/img/articles/dr_adda/dr-adda-aerolase-laser-elite.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Params = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  if (locale === "en") {
    return {
      title: "Dr. Adda | Interview on the Neo ELITE Aerolase Laser | HERITAGE",
      description:
        "Discover Dr. Adda's exclusive interview on the NEO Elite laser, Aerolase's new device. (H)ERITAGE Magazine",
    };
  } else if (locale === "fr") {
    return {
      title: "Dr Adda | Interview sur le Laser Neo ELITE Aerolase | HERITAGE",
      description:
        "Découvrez en exclusivité l’interview du Dr Adda sur le laser NEO Elite, le nouveau dispositif d’Aerolase. (H)ERITAGE Magazine",
    };
  }
}

export default function Article() {
  const t = useTranslations("Articles.Dr_Adda");
  const tags = ["t1"] as const;
  const contents = ["p1", "p2", "p3", "p4", "p5"] as const;
  return (
    <div>
      <section className="myContainer lg:space-x-16 full-screen max-lg:flex max-lg:flex-col-reverse max-lg:gap-10 lg:grid lg:grid-cols-5 text-mainBlue">
        <div className="lg:col-span-2">
          <Image
            priority
            placeholder="blur"
            src={header}
            alt={t("img_alt")}
            title={t("img_alt")}
            className="size-full max-md:h-[400px] max-lg:h-[550px] object-cover object-top max-lg:m-auto"
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
              <h1 className="text-left font-sfPro font-bold text-3xl lg:text-5xl xl:text-6xl uppercase">
                {t("h1")}
              </h1>
              <h2 className="text-left font-sfPro font-semibold text-sm lg:text-xl uppercase">
                {t("author")}
              </h2>
            </div>

            <div>
              <Button link="https://aerolase.com/fr/" target="_blank">
                {t("cta_text")}
              </Button>
            </div>
          </div>

          <p className="text-left font-sfPro font-bold text-3xl lg:text-5xl xl:text-6xl uppercase">
            &quot;{t("abstract")}&quot;
          </p>
        </div>
      </section>

      <section className="myContainer lg:space-x-16 max-lg:flex max-lg:flex-col-reverse max-lg:gap-10 lg:grid lg:grid-cols-5 text-mainBlue">
        {/* Pub */}
        <div className="col-span-2">
          <a
            href="https://aerolase.com/fr/"
            target="_blank"
            title="Aerolase"
            className="lg:sticky lg:top-[35%] flex flex-col items-center gap-4"
          >
            <Image
              src={logo}
              alt="Aerolase"
              title="Aerolase"
              className="size-full max-h-[200px] max-lg:max-w-[450px] object-contain m-auto"
            />
            <span className="lg:hidden text-orange uppercase font-sfPro font-light">
              {t("cta_text")} +
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
                {t.rich(`${key}.content`, {
                  br: () => <br />,
                })}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
