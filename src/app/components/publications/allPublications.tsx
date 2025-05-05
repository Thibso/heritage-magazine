"use client";

import {
  DisplayPublicationOdd,
  DisplayPublicationPeer,
} from "@/app/components/publications/DisplayPublication";
import adda from "@/app/img/doctor-adda-jean-marc-heritage-magazine.jpg";
import ascher from "@/app/img/doctor-ascher-benjamin-heritage-magazine.jpg";
import cartier from "@/app/img/doctors-cartier-garson-imcas-interview-heritage-magazine.jpg";
import diala from "@/app/img/dr-haykal-interview-hydrafacial-heritage-magazine.jpg";
import coste from "@/app/img/jean-yves-coste-focus-market-overview-heritage-magazine.jpg";
import hugo from "@/app/img/nivault-hugo-heritage-magazine.jpg";
import olivier from "@/app/img/olivier-claire-couraud-heritage-magazine.jpg";
import lapadula from "@/app/img/pr-la-padula-expertise-heritage-magazine.jpg";
import barbara from "@/app/img/professor-hersant-barbara-heritage-magazine.jpg";
import julien from "@/app/img/vervel-julien-heritage-magazine.jpg";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function AllPublications() {
  const t = useTranslations("Articles_base");
  const tags = useTranslations("Articles");

  const [filterActive, setFilterActive] = useState<number>(-1);

  function setFilter(filter: number) {
    if (filter === filterActive) {
      setFilter(-1);
    } else {
      setFilterActive(filter);
    }
  }

  const filters = [
    t("filters.plasticSurgery"),
    t("filters.aestheticMedicine"),
    t("filters.cosmetology"),
    t("filters.practiceManagement"),
    t("filters.marketAnalysis"),
  ];

  const data = [
    {
      image: cartier,
      alt: "Hugues Cartier et Sébastien Garson HERITAGE Magazine",
      h2: t("cartier.h2"),
      h3: t("cartier.h3"),
      p: t.rich("cartier.content", {
        br: () => <br />,
      }),
      linkTo: t("cartier.cta_link"),
      linkText: t("cartier.cta"),
      tags: [
        tags("Hugues_Cartier.tags.t1.title"),
        tags("Hugues_Cartier.tags.t2.title"),
      ],
    },
    {
      image: lapadula,
      alt: "Simone La Padula HERITAGE Magazine",
      h2: t("lapadula.h2"),
      h3: t("lapadula.h3"),
      p: t.rich("lapadula.content", {
        br: () => <br />,
      }),
      linkTo: t("lapadula.cta_link"),
      linkText: t("lapadula.cta"),
      tags: [tags("Simone_La_Padula.tags.t1.title")],
    },
    {
      image: coste,
      alt: "Jean-Yves Coste HERITAGE Magazine",
      h2: t("coste.h2"),
      h3: t("coste.h3"),
      p: t.rich("coste.content", {
        br: () => <br />,
      }),
      linkTo: t("coste.cta_link"),
      linkText: t("coste.cta"),
      tags: [tags("Jean_Yves_Coste.tags.t1.title")],
    },
    {
      image: diala,
      alt: "Diala haykal HERITAGE Magazine",
      h2: t("diala.h2"),
      h3: t("diala.h3"),
      p: t.rich("diala.content", {
        br: () => <br />,
      }),
      linkTo: t("diala.cta_link"),
      linkText: t("diala.cta"),
      tags: [tags("Diala_Haykal.tags.t1.title")],
    },
    {
      image: ascher,
      alt: "Dr Benjamin Ascher HERITAGE Magazine",
      h2: t("ascher.h2"),
      h3: t("ascher.h3"),
      p: t.rich("ascher.content", {
        br: () => <br />,
      }),
      linkTo: t("ascher.cta_link"),
      linkText: t("ascher.cta"),
      tags: [tags("Benjamin_Asher.tags.t1.title")],
    },
    {
      image: olivier,
      alt: "Olivier Claire HERITAGE Magazine",
      h2: t("olivier.h2"),
      h3: t("olivier.h3"),
      p: t.rich("olivier.content", {
        br: () => <br />,
      }),
      linkTo: t("olivier.cta_link"),
      linkText: t("olivier.cta"),
      tags: [tags("Olivier_Claire.tags.t1.title")],
    },
    {
      image: adda,
      alt: "Aerolase HERITAGE Magazine",
      h2: t("adda.h2"),
      h3: t("adda.h3"),
      p: t.rich("adda.content", {
        br: () => <br />,
      }),
      linkTo: t("adda.cta_link"),
      linkText: t("adda.cta"),
      tags: [tags("Dr_Adda.tags.t1.title")],
    },
    {
      image: barbara,
      alt: "Pr Barbara Hersant HERITAGE Magazine",
      h2: t("barbara.h2"),
      h3: t("barbara.h3"),
      p: t.rich("barbara.content", {
        br: () => <br />,
      }),
      linkTo: t("barbara.cta_link"),
      linkText: t("barbara.cta"),
      tags: [
        tags("Barbara_Hersant.tags.t1.title"),
        tags("Barbara_Hersant.tags.t2.title"),
      ],
    },
    {
      image: julien,
      alt: "Julien Vervel HERITAGE Magazine",
      h2: t("julien.h2"),
      h3: t("julien.h3"),
      p: t.rich("julien.content", {
        br: () => <br />,
      }),
      linkTo: t("julien.cta_link"),
      linkText: t("julien.cta"),
      tags: [tags("Julien_Vervel.tags.t1.title")],
    },
    {
      image: hugo,
      alt: "Hugo Nivault HERITAGE Magazine",
      h2: t("hugo.h2"),
      h3: t("hugo.h3"),
      p: t.rich("hugo.content", {
        br: () => <br />,
      }),
      linkTo: t("hugo.cta_link"),
      linkText: t("hugo.cta"),
      tags: [tags("Hugo_Nivault.tags.t1.title")],
    },
  ];

  const filteredData = data.filter((article) => {
    if (filterActive > -1) {
      return article.tags.includes(filters[filterActive]);
    } else {
      return data;
    }
  });

  return (
    <div className="space-y-14 lg:space-y-28">
      <div className="flex flex-wrap gap-2 lg:gap-4 justify-center mt-8 lg:mt-12">
        {filters.map((filter, index) => {
          return (
            <span
              key={"filter-" + index}
              onClick={() => setFilter(index)}
              className={`${
                filterActive === index
                  ? "text-white bg-orange"
                  : "text-orange bg-transparent"
              } border-orange border-solid border-[1px] px-2 py-1 font-sfPro font-light rounded-full text-[12px] lg:text-sm hover:bg-orange hover:text-white cursor-pointer`}
            >
              {filter}
            </span>
          );
        })}
      </div>

      {filteredData.map((article, index) => {
        if (index % 2 === 0) {
          return (
            <DisplayPublicationPeer
              key={index}
              image={article.image}
              alt={article.alt}
              h2={article.h2}
              h3={article.h3}
              p={article.p}
              linkTo={article.linkTo}
              linkText={article.linkText}
            />
          );
        }
        if (index % 2 === 1) {
          return (
            <DisplayPublicationOdd
              key={index}
              image={article.image}
              alt={article.alt}
              h2={article.h2}
              h3={article.h3}
              p={article.p}
              linkTo={article.linkTo}
              linkText={article.linkText}
            />
          );
        }
      })}
    </div>
  );
}
