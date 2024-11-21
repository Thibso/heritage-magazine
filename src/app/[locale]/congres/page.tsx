import CongresReactiveDisplay from "@/app/components/congres/congresReactiveDisplay";
import header from "@/app/img/congres-esthetiques-2025.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Params = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  if (locale === "en") {
    return {
      title: "Aesthetic Medicine & Plastic Surgery Congresses",
      description:
        "Aesthetic medicine and plastic surgery congresses. Discover the calendar of international events in aesthetic medicine and dermatology.",
    };
  } else if (locale === "fr") {
    return {
      title: "Congrès de Médecine Esthétique & de Chirurgie Plastique",
      description:
        "Congrès de médecine esthétique et de chirurgie plastique. Découvrez le calendrier des événements internationnaux en médecine esthétique.",
    };
  }
}

export default function Congres() {
  const t = useTranslations("Congres");

  return (
    <main>
      <section>
        <div className="px-5 py-4 max-lg:h-[500px] lg:h-screen max-h-[1200px] grid items-end relative lg:px-7 lg:py-4">
          <h1 className="text-white uppercase text-3xl lg:text-8xl">
            {t("h1")}
          </h1>
          <Image
            src={header}
            alt=""
            className="absolute lg:fixed size-full top-0 left-0 object-cover -z-[2]"
          />

          <div className="absolute bg-mainBlue/40 -z-[1] size-full top-0 left-0"></div>
        </div>
      </section>

      <CongresReactiveDisplay />
    </main>
  );
}
