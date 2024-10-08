import header from "@/app/img/congres-esthetiques-2025.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Congres() {
  const t = useTranslations("Congres");

  const content: Array<Array<string>> = [
    [t("sfme.h2"), t("sfme.h3"), t("sfme.content")],
    [t("imcas.h2"), t("imcas.h3"), t("imcas.content")],
    [t("aime.h2"), t("aime.h3"), t("aime.content")],
  ];

  return (
    <main>
      <section>
        <div className="px-5 py-4 max-lg:h-[500px] lg:h-screen max-h-[1200px] grid items-end relative lg:px-7 lg:py-4">
          <span className="text-white uppercase text-3xl lg:text-8xl">
            Congrès à venir
          </span>
          <Image
            src={header}
            alt=""
            className="absolute lg:fixed size-full top-0 left-0 object-cover -z-[2]"
          />

          <div className="absolute bg-mainBlue/40 -z-[1] size-full top-0 left-0"></div>
        </div>
      </section>
      {content.map((congres, index) => {
        if (index % 2 == 0) {
          return (
            <section
              key={index}
              className="sreenPerso max-h-[1080px] grid grid-cols-12 bg-white"
            >
              <div className=" col-span-7 size-full flex flex-col justify-center px-32 py-24 space-y-12">
                <div>
                  <h2 className="h2">{congres[0]}</h2>
                  <h3 className="h3 text-mainBlue">{congres[1]}</h3>
                </div>
                <p>{congres[2]}</p>
              </div>
              <div className="col-span-5 size-full relative">
                <Image
                  src={header}
                  alt=""
                  className="absolute size-full object-cover top-0 left-0"
                />
              </div>
            </section>
          );
        } else {
          return (
            <section
              key={index}
              className="sreenPerso max-h-[1080px] grid grid-cols-12 bg-bgLight"
            >
              <div className="col-span-5 size-full relative">
                <Image
                  src={header}
                  alt=""
                  className="absolute size-full object-cover top-0 left-0"
                />
              </div>

              <div className=" col-span-7 size-full flex flex-col justify-center px-32 py-24 space-y-12">
                <div>
                  <h2 className="h2">{congres[0]}</h2>
                  <h3 className="h3 text-mainBlue">{congres[1]}</h3>
                </div>
                <p>{congres[2]}</p>
              </div>
            </section>
          );
        }
      })}
    </main>
  );
}
