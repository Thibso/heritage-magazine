"use client";

import { DK, FR, IT, US } from "country-flag-icons/react/3x2";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Card = {
  honor: string;
  title: string;
  image: string;
  country_icon: string;
  country_value: string;
  speciality: string;
  speciality_value: string;
  link: string;
};

type Props = {
  data: Card[];
};

export default function DisplayCards({ data }: Props) {
  const t = useTranslations("Contributors");

  // const [filter, setFilter] = useState("");

  // const specialities_filter: string[][] = [
  //   ["surgery", t("filters.specialities.surgery")],
  //   ["medicine", t("filters.specialities.medicine")],
  //   ["dermatology", t("filters.specialities.dermatology")],
  //   ["consulting", t("filters.specialities.consulting")],
  //   ["ceo", t("filters.specialities.ceo")],
  //   ["lawyer", t("filters.specialities.lawyer")],
  // ];

  // const countries_filter: string[][] = [
  //   ["france", t("filters.countries.france")],
  //   ["italy", t("filters.countries.italy")],
  // ];

  const filteredcard = data.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="space-y-8 lg:space-y-20">
      {/* Filters */}

      {/* <div className="hidden max-lg:flex-col gap-x-16 max-lg:gap-y-4">
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
      </div> */}

      {/* Cards */}
      <div className="grid gap-y-20 sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-12">
        {filteredcard.map((card, index) => {
          // if (
          //   !filter ||
          //   filter === card.speciality_value ||
          //   filter === card.country_value
          // ) {
          return (
            <article key={"card-" + index} className="grid gap-y-4 relative">
              <Image
                src={card.image}
                width={1024}
                height={1024}
                alt={t(card.honor) + card.title}
                title={t(card.honor) + " " + card.title}
                className="h-[350px] md:h-[300px] w-full object-cover object-top"
                quality={75}
              />

              <div className="grid gap-y-1">
                <div className="flex items-center justify-center gap-2 font-bold text-base">
                  {/* FR */}
                  {card.country_value === "fr" ? (
                    <FR title="France" className="size-4" />
                  ) : null}
                  {/* IT */}
                  {card.country_value === "it" ? (
                    <IT title="Italy" className="size-4" />
                  ) : null}
                  {/* DK */}
                  {card.country_value === "dk" ? (
                    <DK title="Denmark" className="size-4" />
                  ) : null}
                  {/* US */}
                  {card.country_value === "us" ? (
                    <US title="United-States" className="size-4" />
                  ) : null}
                  <h4 className="">
                    {t(card.honor)} {card.title}
                  </h4>
                </div>
                <h6 className="text-sm text-center text-gray-400">
                  {t(card.speciality)}
                </h6>
              </div>

              {/* <Button link={card.link}>{t("cta_cards")}</Button> */}
            </article>
          );
        })}
      </div>
    </div>
  );
}
