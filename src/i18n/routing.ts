import { createNavigation } from "next-intl/navigation";
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
    "/diala-haykal": {
      fr: "/interview-docteur-haykal-diala-hydradermabrasion-hydrafacial",
      en: "/interview-doctor-haykal-diala-hydradermabrasion-hydrafacial",
    },
    "/hugues-cartier": {
      fr: "/interview-docteurs-cartier-hugues-garson-sebastien-imcas-innovation",
      en: "/interview-doctors-cartier-hugues-garson-sebastien-imcas-innovation",
    },
    "/simone-la-padula": {
      fr: "/technique-professeur-la-padula-simone-rajeunissement-peri-orbitaire",
      en: "/technique-professor-la-padula-simone-periorbital-rejuvenation",
    },
    "/jean-yves-coste": {
      fr: "/analyse-coste-jean-yves-marche-medecine-esthetique-exosomes-2025",
      en: "/analysis-coste-jean-yves-aesthetic-medicine-exosomes-market-2025",
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
    "/congres": {
      fr: "/meilleurs-congres-medecine-esthetique-chirurgie-plastique",
      en: "/top-aesthetic-medicine-plastic-surgery-congresses",
    },
    "/contributors": {
      fr: "/contributeurs-articles-chirugie-plastique-medecine-esthetique",
      en: "/contributors-articles-plastic-surgery-aesthetic-medicine",
    },
    "/dr-margulies": {
      fr: "/expertise-docteur-margulies-michael-medecine-integrative-esthetique-prise-en-charge-patient",
      en: "/expertise-doctor-margulies-michael-integrative-aesthetic-medicine-patient-care",
    },
    "/diala-haykal-2": {
      fr: "/focus-docteur-haykal-diala-intelligence-artificielle-enseignement-diagnostics-dermatologiques",
      en: "/focus-doctor-haykal-diala-artificial-intelligence-dermatology-teaching-diagnosic",
    },
    "/fauad-hasan": {
      fr: "/focus-hasan-fauad-avenir-medecine-esthetique-personnalisee-avec-intelligence-artificielle",
      en: "/focus-hasan-fauad-future-personalised-aesthetic-medicine-with-artificial-intelligence",
    },
    "/carrie-caulkins": {
      fr: "/interview-caulkins-carrie-chief-marketing-officer-hydrafacial",
      en: "/interview-caulkins-carrie-hydrafacial-chief-marketing-officer",
    },
    "/luiza-gabour": {
      fr: "/expertise-maitre-gabour-luiza-etude-reglementation-toxine-botulique-france-europe",
      en: "/expertise-gabour-luiza-regulatory-study-botulinum-toxin-france-europe",
    },
    "/meningaud": {
      fr: "/interview-professeur-meningaud-jean-paul-congres-aime-international",
      en: "/interview-professor-meningaud-jean-paul-international-aime-congress",
    },
    "/henry-delmar": {
      fr: "/expertise-docteur-delmar-henry-luxe-chirurgie-esthetique-approche-sur-mesure",
      en: "/expertise-doctor-delmar-henry-luxury-plastic-surgery-tailor-made-approach",
    },
    "/sophie-converset": {
      fr: "/expertise-docteur-converset-sophie-importance-anatomie-optimisation-securite-injections-patients",
      en: "/expertise-doctor-converset-sophie-importance-anatomy-optimisation-injections-patients-safety",
    },
    "/i-docteur": {
      fr: "/interview-comte-bertrand-jolly-benoit-idocteur-logiciel-medecin-esthetique-intelligence-artificielle",
      en: "/interview-comte-bertrand-jolly-benoit-idocteur-artificial-intelligence-software-aesthetic-doctor",
    },
    "/vania-hirastuka": {
      fr: "/technique-docteur-hiratsuka-dalmedo-vania-traitement-bruxisme-hypertrophie-masseterique",
      en: "/technique-doctor-hiratsuka-dalmedo-vania-bruxism-masseteric-hypertrophy-treatment",
    },
    "/merete-haedersdal": {
      fr: "/interview-docteur-haedersdal-merete-imcas-innovation-dermatologique",
      en: "/interview-doctor-haedersdal-merete-imcas-dermatological-innovation",
    },
    "/dr-raza": {
      fr: "/technique-docteur-razafimahefa-tantely-rhinoplastie-hybride",
      en: "/technique-doctor-razafimahefa-tantely-hybrid-rhinoplasty",
    },
    "/nooance": {
      fr: "/interview-delamer-dorothee-nooance-specialiste-français-soin-anti-age-augmente",
      en: "/interview-delamer-dorothee-nooance-french-specialist-augmented-anti-ageing-care",
    },
    "/romain-foucourt": {
      fr: "/technique-docteur-foucourt-romain-cosmetologie-medicale-traitement-rosacee",
      en: "/technique-doctor-foucourt-romain-medical-cosmetology-rosacea-management",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
