import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://magazine-heritage.com/",
      lastModified: new Date(),
      priority: 1,
      alternates: {
        languages: {
          fr: "https://magazine-heritage.com/fr",
          en: "https://magazine-heritage.com/en",
        },
      },
    },
    {
      url: "https://magazine-heritage.com/about",
      lastModified: new Date(),
      priority: 0.8,
      alternates: {
        languages: {
          fr: "https://magazine-heritage.com/fr/media-chirurgie-esthetique-medecine-antiage",
          en: "https://magazine-heritage.com/en/media-plastic-surgery-antiaging-medicine",
        },
      },
    },
    {
      url: "https://magazine-heritage.com/legals",
      lastModified: new Date(),
      priority: 0.8,
      alternates: {
        languages: {
          fr: "https://magazine-heritage.com/fr/mentions-legales",
          en: "https://magazine-heritage.com/en/legal-notices",
        },
      },
    },
    {
      url: "https://magazine-heritage.com/partners",
      lastModified: new Date(),
      priority: 0.8,
      alternates: {
        languages: {
          fr: "https://magazine-heritage.com/fr/partenaires-chirurgie-esthetique-medecine-anti-age",
          en: "https://magazine-heritage.com/en/partners-plastic-surgery-anti-aging-medicine",
        },
      },
    },
    {
      url: "https://magazine-heritage.com/olivier-claire",
      lastModified: new Date(),
      priority: 0.8,
      alternates: {
        languages: {
          fr: "https://magazine-heritage.com/fr/interview-couraud-olivier-claire-histoire-marque",
          en: "https://magazine-heritage.com/en/interview-couraud-olivier-claire-brand-history",
        },
      },
    },
    {
      url: "https://magazine-heritage.com/benjamin-ascher",
      lastModified: new Date(),
      priority: 0.8,
      alternates: {
        languages: {
          fr: "https://magazine-heritage.com/fr/interview-docteur-ascher-benjamin-thinkin-medical-aesthetic-injectable-summit",
          en: "https://magazine-heritage.com/en/interview-doctor-ascher-benjamin-thinkin-medical-aesthetic-injectable-summit",
        },
      },
    },
    {
      url: "https://magazine-heritage.com/dr-adda",
      lastModified: new Date(),
      priority: 0.8,
      alternates: {
        languages: {
          fr: "https://magazine-heritage.com/fr/interview-docteur-adda-jean-marc-aerolase-laser-neo-elite",
          en: "https://magazine-heritage.com/en/interview-doctor-adda-jean-marc-aerolase-laser-neo-elite",
        },
      },
    },
    {
      url: "https://magazine-heritage.com/barbara-hersant",
      lastModified: new Date(),
      priority: 0.8,
      alternates: {
        languages: {
          fr: "https://magazine-heritage.com/fr/interview-professeur-hersant-barbara-aime-communication-digitale-medecins",
          en: "https://magazine-heritage.com/en/interview-professor-hersant-barbara-aime-physicians-digital-communication",
        },
      },
    },
    {
      url: "https://magazine-heritage.com/julien-vervel",
      lastModified: new Date(),
      priority: 0.8,
      alternates: {
        languages: {
          fr: "https://magazine-heritage.com/fr/dossier-vervel-julien-consultant-e-reputation-medicale",
          en: "https://magazine-heritage.com/en/focus-vervel-julien-consultant-medical-e-reputation",
        },
      },
    },
    {
      url: "https://magazine-heritage.com/hugo-nivault",
      lastModified: new Date(),
      priority: 0.8,
      alternates: {
        languages: {
          fr: "https://magazine-heritage.com/fr/dossier-nivault-hugo-healthcie-preparer-projet-digital-sante",
          en: "https://magazine-heritage.com/en/focus-nivault-hugo-healthcie-prepare-digital-healthcare-project",
        },
      },
    },
    {
      url: "https://magazine-heritage.com/articles",
      lastModified: new Date(),
      priority: 0.8,
      alternates: {
        languages: {
          fr: "https://magazine-heritage.com/fr/publications-innovations-medecine-esthetique",
          en: "https://magazine-heritage.com/en/publications-aesthetic-medicine-innovations",
        },
      },
    },
    {
      url: "https://magazine-heritage.com/contact",
      lastModified: new Date(),
      priority: 0.8,
      alternates: {
        languages: {
          fr: "https://magazine-heritage.com/fr/contact",
          en: "https://magazine-heritage.com/en/contact",
        },
      },
    },
    {
      url: "https://magazine-heritage.com/congres",
      lastModified: new Date(),
      priority: 0.8,
      alternates: {
        languages: {
          fr: "https://magazine-heritage.com/fr/",
          en: "https://magazine-heritage.com/en/",
        },
      },
    },
  ];
}
