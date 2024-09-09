import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["fr"],

  // Used when no locale matches
  defaultLocale: "fr",

  pathnames: {
    "/": "/",
    "/olivier-claire": {
      fr: "/interview-couraud-olivier-claire-histoire-marque",
    },
    "/benjamin-ascher": {
      fr: "/interview-docteur-ascher-benjamin-thinkin-medical-aesthetic-injectable-summit",
    },
    "/dr-adda": {
      fr: "/interview-docteur-adda-jean-marc-aerolase-laser-neo-elite",
    },
    "/barbara-hersant": {
      fr: "/interview-professeur-hersant-barbara-aime-communication-digitale-medecins",
    },
    "/julien-vervel": {
      fr: "/dossier-vervel-julien-consultant-e-reputation-medicale",
    },
    "/hugo-nivault": {
      fr: "/dossier-nivault-hugo-healthcie-preparer-son-projet-digital-sante",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
