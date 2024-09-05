import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <section></section>
      <h1>{t("title")}</h1>
    </main>
  );
}
