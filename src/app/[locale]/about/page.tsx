import header from "@/app/img/heritage-magazine-by-healthcie.jpg";
import miror from "@/app/img/heritage-magazine-sante.png";
import follow from "@/app/img/magazine-innovation-sante.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const t = useTranslations("About");

  return (
    <main>
      <section>
        <div className="px-5 py-4 max-lg:h-[500px] lg:h-screen max-h-[1200px] grid items-end relative lg:px-7 lg:py-4">
          <span className="text-white uppercase text-3xl lg:text-8xl">
            {t("h1")}
          </span>
          <Image
            src={header}
            alt=""
            className="absolute lg:fixed size-full top-0 left-0 object-cover -z-[1] opacity-85"
          />
        </div>
      </section>

      <section className="lg:grid lg:grid-cols-2 bg-mainBlue text-white">
        <div className="px-4 py-12 lg:px-44 lg:py-32 lg:space-y-16 space-y-8">
          <div>
            <h1 className="h2 text-white">{t("first.h2")}</h1>
            <h2 className="h3 mt-2 lg:mt-4">{t("first.h3")}</h2>
          </div>

          <div className="space-y-4">
            {t.rich("first.content", {
              p: (chunks) => <p>{chunks}</p>,
              healthcie: (chunks) => (
                <Link
                  href="https://www.healthcie.fr"
                  className=" underline"
                  target="_blank"
                >
                  {chunks}
                </Link>
              ),
              julien: (chunks) => (
                <Link
                  href="https://medical-reputation-consulting.com"
                  className=" underline"
                  target="_blank"
                >
                  {chunks}
                </Link>
              ),
            })}
          </div>
        </div>

        <div className="relative max-lg:h-[350px]">
          <Image
            src={miror}
            alt=""
            className="absolute size-full object-cover left-0 top-0"
          />
        </div>
      </section>

      <section className="max-lg:flex max-lg:flex-col-reverse lg:grid lg:grid-cols-8 bg-white">
        <div className="col-span-3 relative max-lg:h-[350px]">
          <Image
            src={follow}
            alt=""
            className="absolute size-full top-0 left-0 object-cover"
          />
        </div>
        <div className="col-span-5 px-4 py-12 lg:px-44 lg:py-32 space-y-8 lg:space-y-16">
          <div>
            <h2 className="h2 text-mainBlue">{t("follow.h2")}</h2>
            <h3 className="h3 mt-2 lg:mt-4">{t("follow.h3")}</h3>
          </div>

          <div className="space-y-4">
            {t.rich("follow.content", {
              p: (chunks) => <p>{chunks}</p>,
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
