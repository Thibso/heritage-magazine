import { useTranslations } from "next-intl";
import Button from "../buttons/Button";
import LastPublicationsSlider from "./LastPublicationsSlider";

export default function LastPublications() {
  const t = useTranslations("HomePage");

  const data = [
    {
      image: "",
      head: "/publications/skinceuticals-aesthetic-media-heritage-magazine.jpg",
      alt: "Skinceuticals HERITAGE Magazine",
      h2: "Prague_Skinceuticals.h2",
      h3: "Prague_Skinceuticals.h3",
      p: "Prague_Skinceuticals.content",
      linkTo: "Prague_Skinceuticals.cta_link",
      linkText: "Prague_Skinceuticals.cta",
      tags: ["Prague_Skinceuticals.tags.t1.title"],
    },
    {
      image: "",
      head: "/publications/biosolution-co-exosomes-specialiste-aesthetic-magazine.jpg",
      alt: "Biosolution.co HERITAGE Magazine",
      h2: "Prague_Exosomes.h2",
      h3: "Prague_Exosomes.h3",
      p: "Prague_Exosomes.content",
      linkTo: "Prague_Exosomes.cta_link",
      linkText: "Prague_Exosomes.cta",
      tags: ["Prague_Exosomes.tags.t1.title"],
    },
    {
      image: "/contributors/Osvaldova-eva-heritage-magazine.png",
      head: "/publications/eva-osvaldova-julien-vervel-specialists-aesthetic-magazine.jpg",
      alt: "Eva Osvaldova & Julien Vervel HERITAGE Magazine",
      h2: "Prague_Eva_Osvaldova_Healthcie.h2",
      h3: "Prague_Eva_Osvaldova_Healthcie.h3",
      p: "Prague_Eva_Osvaldova_Healthcie.content",
      linkTo: "Prague_Eva_Osvaldova_Healthcie.cta_link",
      linkText: "Prague_Eva_Osvaldova_Healthcie.cta",
      tags: [
        "Prague_Eva_Osvaldova_Healthcie.tags.t1.title",
        "Prague_Eva_Osvaldova_Healthcie.tags.t2.title",
        "Prague_Eva_Osvaldova_Healthcie.tags.t3.title",
      ],
    },
    {
      image: "/contributors/nivault-hugo-healthcie-heritage-magazine.png",
      head: "/publications/hugo-nivault-medical-website-specialiste-aesthetic-media.jpg",
      alt: "HEALTHCIE HERITAGE Magazine",
      h2: "Prague_Healthcie.h2",
      h3: "Prague_Healthcie.h3",
      p: "Prague_Healthcie.content",
      linkTo: "Prague_Healthcie.cta_link",
      linkText: "Prague_Healthcie.cta",
      tags: [
        "Prague_Healthcie.tags.t1.title",
        "Prague_Healthcie.tags.t2.title",
      ],
    },
    {
      image: "/contributors/steven-harris-heritage-magazine.png",
      head: "/publications/instagram-vs-reality-aesthetic-specialist-heritage-magazine.jpg",
      alt: "Steven Harris HERITAGE Magazine",
      h2: "Prague_Steven_Harris.h2",
      h3: "Prague_Steven_Harris.h3",
      p: "Prague_Steven_Harris.content",
      linkTo: "Prague_Steven_Harris.cta_link",
      linkText: "Prague_Steven_Harris.cta",
      tags: ["Prague_Steven_Harris.tags.t1.title"],
    },
  ];

  return (
    <section className="overflow-hidden  m-auto bg-bgLight">
      <div className="myContainer space-y-8 lg:space-y-16">
        <div className="text-center">
          <h2 className="h2 text-mainBlue">{t("slider.h2")}</h2>
          <h3 className="h3 mt-2 lg:mt-4">{t("slider.h3")}</h3>
        </div>

        <LastPublicationsSlider data={data} />

        <div className="flex justify-center">
          <Button link={t("slider.publications")}>
            {t("slider.publications")}
          </Button>
        </div>
      </div>
    </section>
  );
}
