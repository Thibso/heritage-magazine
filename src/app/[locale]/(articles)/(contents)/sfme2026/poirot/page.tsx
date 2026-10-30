import header from "@/app/img/articles/sfme2026/poirot/dr-fanny-poirot-heritage-magazine.jpg";
import logo from "@/app/img/heritage-magazine.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Params = {
  params: Promise<{ locale: string }>;
};

const titleEN =
  "Dr. Poirot | Interview French Society of Aesthetic Medicine (SFME)";
const descriptionEN =
  "Discover Dr. Fanny Poirot's interview on the innovations of the 46th SFME Congress and her vision of aesthetic medicine.";

const titleFR =
  "Dr Poirot | Interview Société Française de Médecine Esthétique (SFME)";
const descriptionFR =
  "Découvrez l’interview du Dr Fanny Poirot sur les innovations de la 46e édition du congrès de la SFME et sa vision de la médecine esthétique.";

export async function generateMetadata(props: Params) {
  const params = await props.params;
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

export default function Poirot() {
  const t = useTranslations("Articles.sfme2026_poirot");
  const tags = ["t1"] as const;
  const contents = ["p1"] as const;
  return (
    <div>
      <section className="myContainer lg:space-x-16 full-screen max-lg:flex max-lg:flex-col-reverse max-lg:gap-10 lg:grid lg:grid-cols-5 text-mainBlue">
        <div className="lg:col-span-2 relative size-full">
          <Image
            priority
            placeholder="blur"
            src={header}
            alt={t("img_alt")}
            title={t("img_alt")}
            className="lg:absolute lg:top-0 lg:left-0 size-full max-md:h-[400px] max-lg:h-[550px] object-cover object-top max-lg:m-auto"
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
          </div>

          <p className="text-left font-sfPro italic font-bold text-xl lg:text-3xl xl:text-4xl uppercase">
            &quot;{t("abstract")}&quot;
          </p>
        </div>
      </section>

      <section className="myContainer lg:space-x-16 max-lg:flex max-lg:flex-col-reverse max-lg:gap-10 lg:grid lg:grid-cols-5 text-mainBlue">
        {/* Pub */}
        <div className="col-span-2">
          <a
            href="/"
            title="Heritage Magazine"
            className="lg:sticky lg:top-[35%] flex flex-col items-center gap-4"
          >
            <Image
              src={logo}
              alt="Heritage Magazine"
              title="Heritage Magazine"
              className="size-full max-h-[350px] max-lg:max-w-[450px] object-contain m-auto"
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
              {t.rich(`${key}.content`, {
                br: () => <br />,
                p: (chunk) => (
                  <p className="font-sfPro font-light text-base">{chunk}</p>
                ),
                em: (chunk) => <em>{chunk}</em>,
                h3: (chunk) => (
                  <h3 className="font-sfPro font-semibold text-base lg:text-lg">
                    {chunk}
                  </h3>
                ),
                h4: (chunk) => (
                  <h4 className="font-sfPro font-bold text-base">{chunk}</h4>
                ),
                h5: (chunk) => (
                  <h5 className="font-sfPro underline text-base">{chunk}</h5>
                ),
                ul: (chunk) => (
                  <ul className="font-sfPro font-light text-base list-disc ml-6">
                    {chunk}
                  </ul>
                ),
                ol: (chunk) => (
                  <ul className="font-sfPro font-light text-base list-decimal ml-6">
                    {chunk}
                  </ul>
                ),
                strong: (chunk) => (
                  <strong className="font-bold">{chunk}</strong>
                ),
                li: (chunk) => (
                  <li className="font-sfPro font-light text-base">{chunk}</li>
                ),
                imgContainer: (chunk) => (
                  <div className="grid grid-cols-3 gap-x-4">{chunk}</div>
                ),
                divImg: (chunk) => <div className="space-y-4">{chunk}</div>,
                pImg: (chunk) => (
                  <p className="font-sfPro font-light text-sm">{chunk}</p>
                ),
                img: (chunk) => (
                  <Image
                    src={chunk!.toString()}
                    alt=""
                    width={250}
                    height={250}
                    quality={100}
                  />
                ),
                bigImg: (chunk) => (
                  <Image
                    src={chunk!.toString()}
                    alt=""
                    width={1080}
                    height={450}
                    quality={100}
                  />
                ),
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
