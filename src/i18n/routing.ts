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
    "/thomas-josse": {
      fr: "/interview-josse-thomas-conciergerie-club-acteurs-medecine-esthetique",
      en: "/interview-josse-thomas-concierge-service-club-actors-aesthetic-medicine",
    },
    "/julien-vervel-2": {
      fr: "/dossier-vervel-julien-visibilite-referencement-medecins-intelligence-artificielle-geo",
      en: "/focus-vervel-julien-visibility-doctors-referencing-artificial-intelligence-geo",
    },
    "/jean-jacques-deutsch": {
      fr: "/interview-docteur-deutsch-jean-jacques-congres-sfme",
      en: "/interview-doctor-deutsch-jean-jacques-sfme-congress",
    },
    "/jean-jacques-deutsch-2": {
      fr: "/dossier-docteur-deutsch-jean-jacques-introduction-histoire-medecine-esthetique-france",
      en: "/focus-doctor-deutsch-jean-jacques-introduction-history-french-aesthetic-medicine",
    },
    "/benjamin-ascher-2": {
      fr: "/innovation-docteurs-melin-audrey-ascher-benjamin-sibus-in-sonde-echographique-digitale",
      en: "/innovation-doctors-melin-audrey-ascher-benjamin-sibus-in-finger-probe-ultrasound-guided-injections",
    },
    "/jean-yves-coste-2": {
      fr: "/dossier-coste-jean-yves-intelligence-artificielle-medecine-esthetique-convergence-technologique",
      en: "/focus-coste-jean-yves-artificial-intelligence-aesthetic-medicine-technological-convergence",
    },
    // PRAGUE
    "/prague/jean-yves-coste": {
      fr: "/analyse-coste-jean-yves-marche-medecine-esthetique-insights-2025",
      en: "/analysis-coste-jean-yves-aesthetic-medicine-market-insights-2025",
    },
    "/prague/eva-osvaldova-healthcie": {
      fr: "/dossier-healthcie-vervel-julien-eva-osvaldova-gestion-clinique-esthetique-2025-prague-lab",
      en: "/focus-healthcie-vervel-julien-eva-osvaldova-aesthetic-clinic-management-2025-prague-lab",
    },
    "/prague/eva-osvaldova": {
      fr: "/dossier-eva-osvaldova-julien-vervel-nouvelles-technologies-medecine-esthetique-prague-lab",
      en: "/focus-eva-osvaldova-julien-vervel-new-aesthetic-medicine-technologies-prague-lab",
    },
    "/prague/eva-osvaldova-2": {
      fr: "/dossier-eva-osvaldova-intelligence-artificielle-cabinet-medical-prague-lab",
      en: "/focus-eva-osvaldova-artificial-intelligence-medical-office-prague-lab",
    },
    "/prague/monika-kavkova": {
      fr: "/technique-docteur-kavkova-monika-rajeunissement-levres-femme-mature-prague-lab",
      en: "/technique-doctor-kavkova-monika-lip-rejuvenation-mature-women-prague-lab",
    },
    "/prague/monika-kavkova-2": {
      fr: "/technique-docteur-kavkova-monika-acides-hyaluroniques-remplissage-prague-lab",
      en: "/technique-doctor-kavkova-monika-hyaluronic-acid-fillers-prague-lab",
    },
    "/prague/monika-kavkova-3": {
      fr: "/technique-docteur-kavkova-monika-controverses-biostimulation-medecine-esthetique-prague-lab",
      en: "/technique-doctor-kavkova-monika-controversies-biostimulation-aesthetic-medicine-prague-lab",
    },
    "/prague/lee-walker": {
      fr: "/technique-docteur-walker-lee-cecite-apres-injections-acide-hyaluronique-medecine-esthetique-prague-lab",
      en: "/technique-doctor-walker-lee-blindness-after-hyaluronic-acid-injections-aesthetic-medicine-prague-lab",
    },
    "/prague/konstantin-frank": {
      fr: "/interview-docteur-konstantin-frank-rajeunissement-visage-corps-medecine-esthetique-prague-lab",
      en: "/interview-doctor-konstantin-frank-face-body-rejuvenation-aesthetic-medicine-prague-lab",
    },
    "/prague/jani-van-loghem": {
      fr: "/technique-docteur-van-loghem-jani-volume-injection-fillers-prague-lab",
      en: "/technique-doctor-van-loghem-jani-injection-volume-fillers-prague-lab",
    },
    "/prague/roshan-ravidran": {
      fr: "/expertise-docteur-ravindran-roshan-progression-recherche-medecine-esthetique-prague-lab",
      en: "/expertise-doctor-ravindran-roshan-advancing-research-aesthetic-medicine-prague-lab",
    },
    "/prague/steven-harris": {
      fr: "/dossier-docteur-harris-steven-instagram-vs-realite-medecine-esthetique-prague-lab",
      en: "/focus-doctor-harris-steven-instagram-vs-reality-aesthetic-medicine-prague-lab",
    },
    "/prague/exosome": {
      fr: "/dossier-biosolution-administration-exosomes-assistee-micro-aiguilles-prague-lab",
      en: "/focus-biosolution-micro-needle-assisted-exosome-delivery-prague-lab",
    },
    "/prague/skinceuticals": {
      fr: "/focus-skinceuticals-pionnier-soins-peau-integres-prague-lab",
      en: "/focus-skinceuticals-pioneer-integrated-skincare-prague-lab",
    },
    "/prague/healthcie": {
      fr: "/focus-nivault-hugo-agence-healthcie-site-web-medical-strategie-digitale-prague-lab",
      en: "/focus-nivault-hugo-healthcie-agency-medical-website-digital-strategy-prague-lab",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
