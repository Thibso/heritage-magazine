"use client";

import Button from "@/app/components/buttons/Button";
import dyala from "@/app/img/dr-haykal-interview-hydrafacial-heritage-magazine.jpg";
import { FR, IT } from "country-flag-icons/react/3x2";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { ReactNode, useState } from "react";

type Card = {
  title: string;
  country_icon: ReactNode;
  country_value: string;
  speciality: string;
  speciality_value: string;
  link: string;
};

export default function DisplayCards() {
  const t = useTranslations("Contributors");

  const [filter, setFilter] = useState("");

  const specialities_filter: string[][] = [
    ["surgery", t("filters.specialities.surgery")],
    ["medicine", t("filters.specialities.medicine")],
    ["dermatology", t("filters.specialities.dermatology")],
    ["consulting", t("filters.specialities.consulting")],
    ["ceo", t("filters.specialities.ceo")],
    ["lawer", t("filters.specialities.lawer")],
  ];

  const countries_filter: string[][] = [
    ["france", t("filters.countries.france")],
    ["italy", t("filters.countries.italy")],
  ];

  const images: StaticImageData[] = [dyala, dyala, dyala, dyala];

  const cards: Card[] = [
    {
      title: "Dr ADDA Jean-Marc",
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.medicine"),
      speciality_value: "medicine",
      link: "",
    },
    {
      title: "Dr ASCHER Benjamin",
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.surgery"),
      speciality_value: "surgery",
      link: "",
    },
    {
      title: "Dr CARTIER Hugues",
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.dermatology"),
      speciality_value: "dermatology",
      link: "",
    },
    {
      title: "Dr CONVERSET-VIETHEL Sophie",
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.surgery"),
      speciality_value: "surgery",
      link: "",
    },
    {
      title: "Mr COSTE Jean-Yves",
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.consulting"),
      speciality_value: "consulting",
      link: "",
    },
    {
      title: "Mr COURAUD Olivier",
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.ceo"),
      speciality_value: "ceo",
      link: "",
    },
    {
      title: "Dr GARSON Sébastien",
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.surgery"),
      speciality_value: "surgery",
      link: "",
    },
    {
      title: "Mrs GABOUR Luiza",
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.lawer"),
      speciality_value: "lawer",
      link: "",
    },
    {
      title: "Dr HAYKAL Diala",
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.medicine"),
      speciality_value: "medicine",
      link: "",
    },
    {
      title: "Pr HERSANT Barbara",
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.surgery"),
      speciality_value: "surgery",
      link: "",
    },
    {
      title: "Dr LA PADULA Simone",
      country_icon: <IT title="United States" className="size-4" />,
      country_value: "italy",
      speciality: t("filters.specialities.surgery"),
      speciality_value: "surgery",
      link: "",
    },
    {
      title: "Mr NIVAULT Hugo",
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.consulting"),
      speciality_value: "consulting",
      link: "",
    },
    {
      title: "Mr VERVEL Julien",
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.consulting"),
      speciality_value: "consulting",
      link: "",
    },
  ];

  return (
    <div className="space-y-8 lg:space-y-20">
      {/* Filters */}

      <div className="hidden max-lg:flex-col gap-x-16 max-lg:gap-y-4">
        <div className="flex gap-x-2">
          <span>{t("filters.specialities.title")}</span>
          <select
            onChange={(e) => {
              setFilter(e.target.value.toString());
            }}
            className="border-orange border-solid border-[1px] px-2 py-1 text-orange font-sfPro font-light rounded-full text-[12px] lg:text-sm appearance-none text-center"
          >
            <option value={""} className="">
              {t("filters.specialities.all")}
            </option>
            {specialities_filter.map((speciality, index) => {
              return (
                <option key={"tag-" + index} value={speciality[0]} className="">
                  {speciality[1]}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex gap-x-2">
          <span>{t("filters.countries.title")}</span>
          <select
            onChange={(e) => {
              setFilter(e.target.value.toString());
            }}
            className="cursor-pointer border-orange border-solid border-[1px] px-2 py-1 text-orange font-sfPro font-light rounded-full text-[12px] lg:text-sm appearance-none text-center"
          >
            <option value={""} className="cursor-pointer">
              {t("filters.specialities.all")}
            </option>
            {countries_filter.map((country, index) => {
              return (
                <option
                  key={"country-" + index}
                  value={country[0]}
                  className="cursor-pointer"
                >
                  {country[1]}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-y-20 sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-12">
        {cards.map((card, index) => {
          if (
            !filter ||
            filter === card.speciality_value ||
            filter === card.country_value
          ) {
            return (
              <article key={"card-" + index} className="grid gap-y-4">
                <Image
                  src={images[index]}
                  alt=""
                  className="h-[350px] object-cover"
                />

                <div className="grid gap-y-1">
                  <div className="flex items-center gap-2 font-bold text-base">
                    {card.country_icon} <h4 className="">{card.title}</h4>
                  </div>
                  <h6 className="text-sm text-gray-400">{card.speciality}</h6>
                </div>

                <Button link={card.link}>{t("cta_cards")}</Button>
              </article>
            );
          }
        })}
      </div>
    </div>
  );
}
