type Params = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  // if (locale === "en") {
  //   return {
  //     title: "Titre EN",
  //     description: "Description EN",
  //   };
  // } else
  if (locale === "fr") {
    return {
      title: "Barbara Hersant",
      description: "Articles description",
    };
  }
}

export default function Articles() {
  return (
    <>
      <section className="myContainer"></section>
    </>
  );
}
