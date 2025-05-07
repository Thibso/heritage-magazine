type Params = {
  params: { locale: string };
};

const titleEN =
  "HERITAGE Magazine | Innovations in aesthetic & anti-aging medicine";
const descriptionEN =
  "(H)ERITAGE Magazine. Premium media dedicated to innovation in aesthetic surgery, medicine and dermatology. Discover (H)ERITAGE Magazine";

const titleFR =
  "HERITAGE Magazine | Innovations en médecine esthétique & anti-âge";
const descriptionFR =
  "(H)ERITAGE Magazine. Média premium dédié à l'innovation en chirurgie, médecine et dermatologie esthétique. Découvrez (H)ERITAGE Magazine";

export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  if (locale === "en") {
    return {
      title: titleEN,
      description: descriptionEN,
      authors: [{ name: "HEALTHCIE" }],
      openGraph: {
        title: titleEN,
        description: descriptionEN,
        url: "https://magazine-heritage.com/",
        siteName: "(H)ERITAGE Magazine",
        images: [
          {
            url: "https://magazine-heritage.com/magazine-innovation-sante.jpg",
            width: 800,
            height: 600,
          },
        ],
        locale: "en_US",
        type: "website",
      },
    };
  } else if (locale === "fr") {
    return {
      title: titleFR,
      description: descriptionFR,
      authors: [{ name: "HEALTHCIE" }],
      openGraph: {
        title: titleFR,
        description: descriptionFR,
        url: "https://magazine-heritage.com/",
        siteName: "(H)ERITAGE Magazine",
        images: [
          {
            url: "https://magazine-heritage.com/magazine-innovation-sante.jpg",
            width: 800,
            height: 600,
          },
        ],
        locale: "fr_FR",
        type: "website",
      },
    };
  }
}

export default function ReaderPage() {
  return (
    <main>
      {/* <section className="myContainer mt-[120px]">
        <Reader />
      </section> */}

      <section className="myContainer">
        <iframe
          src="https://docs.google.com/gview?url=https://magazine-heritage.com/magazine-1.pdf&embedded=true"
          width="600px"
          height="600px"
        ></iframe>
      </section>
    </main>
  );
}
