"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { DisplayPublication } from "./DisplayPublication";

type Item = {
  image: string;
  head: string;
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
    <>
      <section className="space-y-14 lg:space-y-28 bg-white text-mainBlue z-[1]">
        <div className="flex flex-wrap gap-2 lg:gap-4 justify-center">
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

        {/* <PublicationPerEdition data={filteredData} /> */}
      </section>

      <section className="myContainer bg-white text-mainBlue grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.map((article, index) => {
          return (
            <DisplayPublication
              key={index}
              index={index}
              image={article.image}
              head={article.head}
              alt={article.alt}
              h2={article.h2}
              h3={article.h3}
              p={article.p}
              linkTo={article.linkTo}
              linkText={article.linkText}
              tags={article.tags}
            />
          );
        })}
      </section>
    </>
  );
}
