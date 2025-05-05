"use client";

import barbara from "@/app/img/articles/barbara_hersant/pr-hersant-barabara-chirurgie-esthetique-paris.jpg";
import ascher from "@/app/img/articles/benjamin_ascher/dr-benjamin-ascher-thinkin.jpg";
import dyala from "@/app/img/articles/diala_haykal/haykal-diala-doctor-hydrafacial-heritage.jpg";
import adda from "@/app/img/articles/dr_adda/dr-adda-aerolase-laser-elite.jpg";
import hugo from "@/app/img/articles/hugo_nivault/hugo-nivault-chef-projet-digital-healthcie.jpg";
import cartier from "@/app/img/articles/hugues_cartier/doctors-cartier-hugues-garson-sebastien-imcas-heritage.jpg";
import coste from "@/app/img/articles/jean_yves_coste/coste-jean-yves-market-overview-heritage.jpg";
import julien from "@/app/img/articles/julien_vervel/Julien-vervel-consultant-médical-laboratoires.jpg";
import olivier from "@/app/img/articles/olivier_claire/portrait-olivier-claire.jpg";
import lapadula from "@/app/img/articles/simone_lapadula/la-padula-simone-professor-plastic-surgery-heritage.jpg";
import { FR, IT } from "country-flag-icons/react/3x2";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { ReactNode, useState } from "react";

type Card = {
  honor: string;
  title: string;
  image: StaticImageData;
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

  const cards: Card[] = [
    {
      honor: "Dr",
      title: "ADDA Jean-Marc",
      image: adda,
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.medicine"),
      speciality_value: "medicine",
      link: "",
    },
    {
      honor: "Pr",
      title: "HERSANT Barbara",
      image: barbara,
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.surgery"),
      speciality_value: "surgery",
      link: "",
    },
    {
      honor: "Dr",
      title: "ASCHER Benjamin",
      image: ascher,
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.surgery"),
      speciality_value: "surgery",
      link: "",
    },
    {
      honor: "Dr",
      title: "CARTIER Hugues",
      image: cartier,
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.dermatology"),
      speciality_value: "dermatology",
      link: "",
    },
    // {
    //   honor: "Dr",
    //   title: "CONVERSET-VIETHEL Sophie",
    //   image: dyala,
    //   country_icon: <FR title="United States" className="size-4" />,
    //   country_value: "france",
    //   speciality: t("filters.specialities.surgery"),
    //   speciality_value: "surgery",
    //   link: "",
    // },
    {
      honor: "Dr",
      title: "COSTE Jean-Yves",
      image: coste,
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.consulting"),
      speciality_value: "consulting",
      link: "",
    },
    {
      honor: "Dr",
      title: "COURAUD Olivier",
      image: olivier,
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.ceo"),
      speciality_value: "ceo",
      link: "",
    },
    {
      honor: "Dr",
      title: "GARSON Sébastien",
      image: cartier,
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.surgery"),
      speciality_value: "surgery",
      link: "",
    },
    // {
    //   honor: "Mrs",
    //   title: "GABOUR Luiza",
    //   image: dyala,
    //   country_icon: <FR title="United States" className="size-4" />,
    //   country_value: "france",
    //   speciality: t("filters.specialities.lawer"),
    //   speciality_value: "lawer",
    //   link: "",
    // },
    {
      honor: "Dr",
      title: "HAYKAL Diala",
      image: dyala,
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.medicine"),
      speciality_value: "medicine",
      link: "",
    },

    {
      honor: "Dr",
      title: "LA PADULA Simone",
      image: lapadula,
      country_icon: <IT title="United States" className="size-4" />,
      country_value: "italy",
      speciality: t("filters.specialities.surgery"),
      speciality_value: "surgery",
      link: "",
    },
    {
      honor: "Mr",
      title: "NIVAULT Hugo",
      image: hugo,
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.consulting"),
      speciality_value: "consulting",
      link: "",
    },
    {
      honor: "Mr",
      title: "VERVEL Julien",
      image: julien,
      country_icon: <FR title="United States" className="size-4" />,
      country_value: "france",
      speciality: t("filters.specialities.consulting"),
      speciality_value: "consulting",
      link: "",
    },
  ];

  const filteredcard = cards.sort((a, b) => a.title.localeCompare(b.title));

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
        {filteredcard.map((card, index) => {
          if (
            !filter ||
            filter === card.speciality_value ||
            filter === card.country_value
          ) {
            return (
              <article key={"card-" + index} className="grid gap-y-4">
                <Image
                  src={card.image}
                  alt=""
                  className="h-[350px] object-cover object-top"
                  quality={50}
                />

                <div className="grid gap-y-1">
                  <div className="flex items-center gap-2 font-bold text-base">
                    {card.country_icon}{" "}
                    <h4 className="">
                      {card.honor} {card.title}
                    </h4>
                  </div>
                  <h6 className="text-sm text-gray-400">{card.speciality}</h6>
                </div>

                {/* <Button link={card.link}>{t("cta_cards")}</Button> */}
              </article>
            );
          }
        })}
      </div>
    </div>
  );
}
