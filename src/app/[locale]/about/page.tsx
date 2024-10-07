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
        <div className=" h-screen max-h-[1200px] grid items-end relative px-7 py-4">
          <span className="text-white uppercase text-8xl">{t("h1")}</span>
          <Image
            src={header}
            alt=""
            className="fixed size-full top-0 left0 object-cover -z-[1] opacity-85"
          />
        </div>
      </section>

      <section className="grid grid-cols-2 bg-mainBlue text-white">
        <div className="px-44 py-32 space-y-16">
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

        <div className="relative">
          <Image
            src={miror}
            alt=""
            className="absolute size-full object-cover left-0 top-0"
          />
        </div>
      </section>

      <section className="grid grid-cols-8 bg-white">
        <div className="col-span-3 relative">
          <Image
            src={follow}
            alt=""
            className="absolute size-full top-0 left-0 object-cover"
          />
        </div>
        <div className="col-span-5 px-44 py-32 space-y-16">
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
