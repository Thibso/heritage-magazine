"use client";

import {
  DisplayPublicationOdd,
  DisplayPublicationPeer,
} from "@/app/components/publications/DisplayPublication";
// import adda from "@/app/img/doctor-adda-jean-marc-heritage-magazine.jpg";
// import ascher from "@/app/img/doctor-ascher-benjamin-heritage-magazine.jpg";
// import cartier from "@/app/img/doctors-cartier-garson-imcas-interview-heritage-magazine.jpg";
// import diala from "@/app/img/dr-haykal-interview-hydrafacial-heritage-magazine.jpg";
// import coste from "@/app/img/jean-yves-coste-focus-market-overview-heritage-magazine.jpg";
// import hugo from "@/app/img/nivault-hugo-heritage-magazine.jpg";
// import olivier from "@/app/img/olivier-claire-couraud-heritage-magazine.jpg";
// import lapadula from "@/app/img/pr-la-padula-expertise-heritage-magazine.jpg";
// import barbara from "@/app/img/professor-hersant-barbara-heritage-magazine.jpg";
// import julien from "@/app/img/vervel-julien-heritage-magazine.jpg";
import { useTranslations } from "next-intl";
import { useState } from "react";

type Item = {
  image: string;
  alt: string;
  h2: string;
  h3: string;
  p: string;
  linkTo: string;
  linkText: string;
  tags: string[];
};

type Props = {
  data: Item[];
};

export default function AllPublications({ data }: Props) {
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

  const filteredData = data.filter((article) => {
    if (filterActive > -1) {
      return article.tags.some(
        (tagKey) => tags(tagKey) === filters[filterActive]
      );
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
