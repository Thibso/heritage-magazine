import { useTranslations } from "next-intl";
import Button from "../buttons/Button";
import LastPublicationsSlider from "./LastPublicationsSlider";

export default function LastPublications() {
  const t = useTranslations("HomePage");

  // const data = [
  //   {
  //     image: "/contributors/doctor-meningaud-jean-paul-heritage-magazine.png",
  //     head: "/publications/pr-meningaud-interview-heritage-magazine.jpg",
  //     alt: "Pr. Meningaud HERITAGE Magazine",
  //     h2: "imcas2026_meningaud.h2",
  //     h3: "imcas2026_meningaud.h3",
  //     p: "imcas2026_meningaud.content",
  //     linkTo: "imcas2026_meningaud.cta_link",
  //     linkText: "imcas2026_meningaud.cta",
  //     tags: ["imcas2026_meningaud.tags.t1.title"],
  //   },
  //   {
  //     image:
  //       "/contributors/doctor-hiratsuka-dalmedo-vania-heritage-magazine.png",
  //     head: "/publications/dr-hiratsuka-dalmedo-heritage-magazine.jpg",
  //     alt: "Dr. Hiratsuka Dalmedo HERITAGE Magazine",
  //     h2: "imcas2026_vania.h2",
  //     h3: "imcas2026_vania.h3",
  //     p: "imcas2026_vania.content",
  //     linkTo: "imcas2026_vania.cta_link",
  //     linkText: "imcas2026_vania.cta",
  //     tags: ["Vania_Hirastuka.tags.t1.title"],
  //   },
  //   {
  //     image: "/contributors/doctor-conversert-viethel-heritage-magazine.png",
  //     head: "/publications/dr-converset-heritage-magazine.jpg",
  //     alt: "Dr. Converset HERITAGE Magazine",
  //     h2: "imcas2026_converset.h2",
  //     h3: "imcas2026_converset.h3",
  //     p: "imcas2026_converset.content",
  //     linkTo: "imcas2026_converset.cta_link",
  //     linkText: "imcas2026_converset.cta",
  //     tags: ["imcas2026_converset.tags.t1.title"],
  //   },
  //   {
  //     image: "/contributors/doctor-delmar-henry-heritage-magazine.png",
  //     head: "/publications/dr-delmar-heritage-magazine.jpg",
  //     alt: "Dr. Delmar HERITAGE Magazine",
  //     h2: "imcas2026_delmar.h2",
  //     h3: "imcas2026_delmar.h3",
  //     p: "imcas2026_delmar.content",
  //     linkTo: "imcas2026_delmar.cta_link",
  //     linkText: "imcas2026_delmar.cta",
  //     tags: ["imcas2026_delmar.tags.t1.title"],
  //   },
  //   {
  //     image: "/contributors/aesthetics-doctor-elmuntasar-ahmed.png",
  //     head: "/publications/dr-ahmed-heritage-magzine.jpg",
  //     alt: "Dr. Ahmed HERITAGE Magazine",
  //     h2: "imcas2026_ahmed.h2",
  //     h3: "imcas2026_ahmed.h3",
  //     p: "imcas2026_ahmed.content",
  //     linkTo: "imcas2026_ahmed.cta_link",
  //     linkText: "imcas2026_ahmed.cta",
  //     tags: ["imcas2026_ahmed.tags.t1.title"],
  //   },
  // ];

  const data = [
    {
      image: "/contributors/doctor-deutsch-jean-jacques-heritage-magazine.png",
      head: "/publications/dr-deutsch-leading-figure-aesthetic-medicine.jpg",
      alt: "Dr. Jean-Jacques DEUTSCH HERITAGE Magazine",
      h2: "sfme2026_deutsch.h2",
      h3: "sfme2026_deutsch.h3",
      p: "sfme2026_deutsch.content",
      linkTo: "sfme2026_deutsch.cta_link",
      linkText: "sfme2026_deutsch.cta",
      tags: ["sfme2026_deutsch.tags.t1.title"],
    },
    {
      image: "/contributors/jonathan-potier.png",
      head: "/publications/article-jonathan-potier-heritage-magazine.jpg",
      alt: "Jonathan POTIER HERITAGE Magazine",
      h2: "sfme2026_potier.h2",
      h3: "sfme2026_potier.h3",
      p: "sfme2026_potier.content",
      linkTo: "sfme2026_potier.cta_link",
      linkText: "sfme2026_potier.cta",
      tags: ["sfme2026_potier.tags.t1.title"],
    },
    {
      image: "/contributors/docteur-alexandre-kitic.png",
      head: "/publications/anjp-heritage-magazine.jpg",
      alt: "ANJP HERITAGE Magazine",
      h2: "sfme2026_anjp.h2",
      h3: "sfme2026_anjp.h3",
      p: "sfme2026_anjp.content",
      linkTo: "sfme2026_anjp.cta_link",
      linkText: "sfme2026_anjp.cta",
      tags: ["sfme2026_anjp.tags.t1.title"],
    },
    {
      image: "/contributors/docteur-fanny-poirot.png",
      head: "/publications/dr-fanny-poirot-heritage-magazine.jpg",
      alt: "Dr. Fanny POIROT HERITAGE Magazine",
      h2: "sfme2026_poirot.h2",
      h3: "sfme2026_poirot.h3",
      p: "sfme2026_poirot.content",
      linkTo: "sfme2026_poirot.cta_link",
      linkText: "sfme2026_poirot.cta",
      tags: ["sfme2026_poirot.tags.t1.title"],
    },
    {
      image: "/contributors/docteur-melissa-badof.png",
      head: "/publications/docteur-badof-article-heritage.jpg",
      alt: "Dr. Mélissa Badof HERITAGE Magazine",
      h2: "sfme2026_badof.h2",
      h3: "sfme2026_badof.h3",
      p: "sfme2026_badof.content",
      linkTo: "sfme2026_badof.cta_link",
      linkText: "sfme2026_badof.cta",
      tags: ["sfme2026_badof.tags.t1.title"],
    },
  ];

  return (
    <section className="overflow-hidden m-auto bg-bgLight">
      <div className="myContainer space-y-8 lg:space-y-16">
        <div className="text-center">
          <h2 className="h2 text-mainBlue">{t("slider.h2")}</h2>
          <h3 className="h3 mt-2 lg:mt-4">{t("slider.h3")}</h3>
        </div>

        <LastPublicationsSlider data={data} />

        <div className="flex justify-center">
          <Button link={t("slider.cta")}>{t("slider.publications")}</Button>
        </div>
      </div>
    </section>
  );
}
