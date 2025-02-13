import DisplayForms from "@/app/components/contact/displayForms";
import { useTranslations } from "next-intl";
// import { ReCaptchaProvider } from "next-recaptcha-v3";

type Params = {
  params: { locale: string };
};

const titleEN = "Contact HERITAGE Magazine | Surgery & Aesthetic Medicine";
const descriptionEN =
  "If you're a doctor or a medical device company and would like to write an article for HERITAGE Magazine, please contact us.";

const titleFR = "Contact HERITAGE Magazine | Chirurgie & Médecine Esthétique";
const descriptionFR =
  "Vous êtes médecin ou industriel de santé et vous souhaitez rédiger un article dans HERITAGE Magazine, contactez-nous.";

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

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    // <ReCaptchaProvider reCaptchaKey="6LdAc1wqAAAAAOLRUrOEymoW5NoitJlgkQTaGK7B">
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
        <h1 className="text-white uppercase text-3xl lg:text-8xl absolute left-5 bottom-4">
          {t("h1")}
        </h1>
      </section>
      <DisplayForms />
    </main>
    // </ReCaptchaProvider>
  );
}
