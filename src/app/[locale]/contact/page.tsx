import DisplayForms from "@/app/components/contact/displayForms";
import header from "@/app/img/apparaitre-magazine-heritage-esthetique.jpg";
import { useTranslations } from "next-intl";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import Image from "next/image";

type Params = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  if (locale === "en") {
    return {
      title: "Contact HERITAGE Magazine | Surgery & Aesthetic Medicine",
      description:
        "If you're a doctor or a medical device company and would like to write an article for HERITAGE Magazine, please contact us.",
    };
  } else if (locale === "fr") {
    return {
      title: "Contact HERITAGE Magazine | Chirurgie & Médecine Esthétique",
      description:
        "Vous êtes médecin ou industriel de santé et vous souhaitez rédiger un article dans HERITAGE Magazine, contactez-nous.",
    };
  }
}

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <ReCaptchaProvider reCaptchaKey="6LdAc1wqAAAAAOLRUrOEymoW5NoitJlgkQTaGK7B">
      <main>
        <section>
          <div className="px-5 py-4 max-lg:h-[500px] lg:h-screen max-h-[1200px] grid items-end relative lg:px-7 lg:py-4">
            <h1 className="text-white uppercase text-3xl lg:text-8xl">
              {t("h1")}
            </h1>
            <Image
              src={header}
              alt=""
              className="absolute lg:fixed size-full top-0 left-0 object-cover object-top -z-[1] "
            />
          </div>
        </section>
        <DisplayForms />
      </main>
    </ReCaptchaProvider>
  );
}
