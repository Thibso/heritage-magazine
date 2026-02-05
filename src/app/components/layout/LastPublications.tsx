import { useTranslations } from "next-intl";
import Button from "../buttons/Button";
import LastPublicationsSlider from "./LastPublicationsSlider";

import dataRaw from "@/data/lastpublications.json";

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

export default function LastPublications() {
  const t = useTranslations("HomePage");
  const data: Item[] = dataRaw;

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
