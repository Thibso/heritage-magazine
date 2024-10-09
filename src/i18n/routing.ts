import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["fr", "en"],

  // Used when no locale matches
  defaultLocale: "fr",

  pathnames: {
    "/": "/",
    "/olivier-claire": {
      fr: "/interview-couraud-olivier-claire-histoire-marque",
      en: "/interview-couraud-olivier-claire-brand-history",
    },
    "/benjamin-ascher": {
      fr: "/interview-docteur-ascher-benjamin-thinkin-medical-aesthetic-injectable-summit",
      en: "/interview-doctor-ascher-benjamin-thinkin-medical-aesthetic-injectable-summit",
    },
    "/dr-adda": {
      fr: "/interview-docteur-adda-jean-marc-aerolase-laser-neo-elite",
      en: "/interview-doctor-adda-jean-marc-aerolase-laser-neo-elite",
    },
    "/barbara-hersant": {
      fr: "/interview-professeur-hersant-barbara-aime-communication-digitale-medecins",
      en: "/interview-professor-hersant-barbara-aime-physicians-digital-communication",
    },
    "/julien-vervel": {
      fr: "/dossier-vervel-julien-consultant-e-reputation-medicale",
      en: "/focus-vervel-julien-consultant-medical-e-reputation",
    },
    "/hugo-nivault": {
      fr: "/dossier-nivault-hugo-healthcie-preparer-projet-digital-sante",
      en: "/focus-nivault-hugo-healthcie-prepare-digital-healthcare-project",
    },
    "/articles": {
      fr: "/publications-innovations-medecine-esthetique",
      en: "/publications-aesthetic-medicine-innovations",
    },
    "/about": {
      fr: "/media-chirurgie-esthetique-medecine-antiage",
      en: "/media-plastic-surgery-antiaging-medicine",
    },
    "/legals": {
      fr: "/mentions-legales",
      en: "/legal-notices",
    },
    "/partners": {
      fr: "/partenaires-chirurgie-esthetique-medecine-anti-age",
      en: "/partners-plastic-surgery-anti-aging-medicine",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
