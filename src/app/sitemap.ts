import { MetadataRoute } from "next";

const HOST = "https://magazine-heritage.com";

const routes = [
  { fr: "", en: "" }, // Home
  {
    fr: "media-chirurgie-esthetique-medecine-antiage",
    en: "media-plastic-surgery-antiaging-medicine",
  },
  { fr: "mentions-legales", en: "legal-notices" },
  {
    fr: "partenaires-chirurgie-esthetique-medecine-anti-age",
    en: "partners-plastic-surgery-anti-aging-medicine",
  },
  {
    fr: "interview-couraud-olivier-claire-histoire-marque",
    en: "interview-couraud-olivier-claire-brand-history",
  },
  {
    fr: "interview-docteur-ascher-benjamin-thinkin-medical-aesthetic-injectable-summit",
    en: "interview-doctor-ascher-benjamin-thinkin-medical-aesthetic-injectable-summit",
  },
  {
    fr: "interview-docteur-adda-jean-marc-aerolase-laser-neo-elite",
    en: "interview-doctor-adda-jean-marc-aerolase-laser-neo-elite",
  },
  {
    fr: "interview-professeur-hersant-barbara-aime-communication-digitale-medecins",
    en: "interview-professor-hersant-barbara-aime-physicians-digital-communication",
  },
  {
    fr: "dossier-vervel-julien-consultant-e-reputation-medicale",
    en: "focus-vervel-julien-consultant-medical-e-reputation",
  },
  {
    fr: "dossier-nivault-hugo-healthcie-preparer-projet-digital-sante",
    en: "focus-nivault-hugo-healthcie-prepare-digital-healthcare-project",
  },
  {
    fr: "analyse-coste-jean-yves-marche-medecine-esthetique-exosomes-2025",
    en: "analysis-coste-jean-yves-aesthetic-medicine-exosomes-market-2025",
  },
  {
    fr: "interview-docteur-haykal-diala-hydradermabrasion-hydrafacial",
    en: "interview-doctor-haykal-diala-hydradermabrasion-hydrafacial",
  },
  {
    fr: "interview-docteurs-cartier-hugues-garson-sebastien-imcas-innovation",
    en: "interview-doctors-cartier-hugues-garson-sebastien-imcas-innovation",
  },
  {
    fr: "technique-professeur-la-padula-simone-rajeunissement-peri-orbitaire",
    en: "technique-professor-la-padula-simone-periorbital-rejuvenation",
  },
  {
    fr: "publications-innovations-medecine-esthetique",
    en: "publications-aesthetic-medicine-innovations",
  },
  { fr: "contact", en: "contact" },
  {
    fr: "contributeurs-articles-chirugie-plastique-medecine-esthetique",
    en: "contributors-articles-plastic-surgery-aesthetic-medicine",
  },
  {
    fr: "meilleurs-congres-medecine-esthetique-chirurgie-plastique",
    en: "top-aesthetic-medicine-plastic-surgery-congresses",
  },
  {
    fr: "interview-comte-bertrand-jolly-benoit-idocteur-logiciel-medecin-esthetique-intelligence-artificielle",
    en: "interview-comte-bertrand-jolly-benoit-idocteur-artificial-intelligence-software-aesthetic-doctor",
  },
  {
    fr: "focus-docteur-haykal-diala-intelligence-artificielle-enseignement-diagnostics-dermatologiques",
    en: "focus-doctor-haykal-diala-artificial-intelligence-dermatology-teaching-diagnosic",
  },
  {
    fr: "expertise-docteur-margulies-michael-medecine-integrative-esthetique-prise-en-charge-patient",
    en: "expertise-doctor-margulies-michael-integrative-aesthetic-medicine-patient-care",
  },
  {
    fr: "focus-hasan-fauad-avenir-medecine-esthetique-personnalisee-avec-intelligence-artificielle",
    en: "focus-hasan-fauad-future-personalised-aesthetic-medicine-with-artificial-intelligence",
  },
  {
    fr: "interview-caulkins-carrie-chief-marketing-officer-hydrafacial",
    en: "interview-caulkins-carrie-hydrafacial-chief-marketing-officer",
  },
  {
    fr: "expertise-maitre-gabour-luiza-etude-reglementation-toxine-botulique-france-europe",
    en: "expertise-gabour-luiza-regulatory-study-botulinum-toxin-france-europe",
  },
  {
    fr: "expertise-docteur-delmar-henry-luxe-chirurgie-esthetique-approche-sur-mesure",
    en: "expertise-doctor-delmar-henry-luxury-plastic-surgery-tailor-made-approach",
  },
  {
    fr: "expertise-docteur-converset-sophie-importance-anatomie-optimisation-securite-injections-patients",
    en: "expertise-doctor-converset-sophie-importance-anatomy-optimisation-injections-patients-safety",
  },
  {
    fr: "technique-docteur-hiratsuka-dalmedo-vania-traitement-bruxisme-hypertrophie-masseterique",
    en: "technique-doctor-hiratsuka-dalmedo-vania-bruxism-masseteric-hypertrophy-treatment",
  },
  {
    fr: "interview-docteur-haedersdal-merete-imcas-innovation-dermatologique",
    en: "interview-doctor-haedersdal-merete-imcas-dermatological-innovation",
  },
  {
    fr: "technique-docteur-razafimahefa-tantely-rhinoplastie-hybride",
    en: "technique-doctor-razafimahefa-tantely-hybrid-rhinoplasty",
  },
  {
    fr: "interview-delamer-dorothee-nooance-specialiste-français-soin-anti-age-augmente",
    en: "interview-delamer-dorothee-nooance-french-specialist-augmented-anti-ageing-care",
  },
  {
    fr: "technique-docteur-foucourt-romain-cosmetologie-medicale-traitement-rosacee",
    en: "technique-doctor-foucourt-romain-medical-cosmetology-rosacea-management",
  },
  {
    fr: "interview-josse-thomas-conciergerie-club-acteurs-medecine-esthetique",
    en: "interview-josse-thomas-concierge-service-club-actors-aesthetic-medicine",
  },
  {
    fr: "dossier-vervel-julien-visibilite-referencement-medecins-intelligence-artificielle-geo",
    en: "focus-vervel-julien-visibility-doctors-referencing-artificial-intelligence-geo",
  },
  {
    fr: "interview-docteur-deutsch-jean-jacques-congres-sfme",
    en: "interview-doctor-deutsch-jean-jacques-sfme-congress",
  },
  {
    fr: "dossier-docteur-deutsch-jean-jacques-introduction-histoire-medecine-esthetique-france",
    en: "focus-doctor-deutsch-jean-jacques-introduction-history-french-aesthetic-medicine",
  },
  {
    fr: "innovation-docteurs-melin-audrey-ascher-benjamin-sibus-in-sonde-echographique-digitale",
    en: "innovation-doctors-melin-audrey-ascher-benjamin-sibus-in-finger-probe-ultrasound-guided-injections",
  },
  {
    fr: "dossier-coste-jean-yves-intelligence-artificielle-medecine-esthetique-convergence-technologique",
    en: "focus-coste-jean-yves-artificial-intelligence-aesthetic-medicine-technological-convergence",
  },
  // PRAGUE
  {
    fr: "analyse-coste-jean-yves-marche-medecine-esthetique-insights-2025",
    en: "analysis-coste-jean-yves-aesthetic-medicine-market-insights-2025",
  },
  {
    fr: "dossier-healthcie-vervel-julien-eva-osvaldova-gestion-clinique-esthetique-2025-prague-lab",
    en: "focus-healthcie-vervel-julien-eva-osvaldova-aesthetic-clinic-management-2025-prague-lab",
  },
  {
    fr: "dossier-eva-osvaldova-julien-vervel-nouvelles-technologies-medecine-esthetique-prague-lab",
    en: "focus-eva-osvaldova-julien-vervel-new-aesthetic-medicine-technologies-prague-lab",
  },
  {
    fr: "dossier-eva-osvaldova-intelligence-artificielle-cabinet-medical-prague-lab",
    en: "focus-eva-osvaldova-artificial-intelligence-medical-office-prague-lab",
  },
  {
    fr: "technique-docteur-kavkova-monika-rajeunissement-levres-femme-mature-prague-lab",
    en: "technique-doctor-kavkova-monika-lip-rejuvenation-mature-women-prague-lab",
  },
  {
    fr: "technique-docteur-kavkova-monika-acides-hyaluroniques-remplissage-prague-lab",
    en: "technique-doctor-kavkova-monika-hyaluronic-acid-fillers-prague-lab",
  },
  {
    fr: "technique-docteur-kavkova-monika-controverses-biostimulation-medecine-esthetique-prague-lab",
    en: "technique-doctor-kavkova-monika-controversies-biostimulation-aesthetic-medicine-prague-lab",
  },
  {
    fr: "technique-docteur-walker-lee-cecite-apres-injections-acide-hyaluronique-medecine-esthetique-prague-lab",
    en: "technique-doctor-walker-lee-blindness-after-hyaluronic-acid-injections-aesthetic-medicine-prague-lab",
  },
  {
    fr: "interview-docteur-konstantin-frank-rajeunissement-visage-corps-medecine-esthetique-prague-lab",
    en: "interview-doctor-konstantin-frank-face-body-rejuvenation-aesthetic-medicine-prague-lab",
  },
  {
    fr: "technique-docteur-van-loghem-jani-volume-injection-fillers-prague-lab",
    en: "technique-doctor-van-loghem-jani-injection-volume-fillers-prague-lab",
  },
  {
    fr: "expertise-docteur-ravindran-roshan-progression-recherche-medecine-esthetique-prague-lab",
    en: "expertise-doctor-ravindran-roshan-advancing-research-aesthetic-medicine-prague-lab",
  },
  {
    fr: "dossier-docteur-harris-steven-instagram-vs-realite-medecine-esthetique-prague-lab",
    en: "focus-doctor-harris-steven-instagram-vs-reality-aesthetic-medicine-prague-lab",
  },
  {
    fr: "dossier-biosolution-administration-exosomes-assistee-micro-aiguilles-prague-lab",
    en: "focus-biosolution-micro-needle-assisted-exosome-delivery-prague-lab",
  },
  {
    fr: "focus-skinceuticals-pionnier-soins-peau-integres-prague-lab",
    en: "focus-skinceuticals-pioneer-integrated-skincare-prague-lab",
  },
  {
    fr: "focus-nivault-hugo-agence-healthcie-site-web-medical-strategie-digitale-prague-lab",
    en: "focus-nivault-hugo-healthcie-agency-medical-website-digital-strategy-prague-lab",
  },
  // IMCAS 2026
  {
    fr: "innovation-insider-benoit-chardon-julien-vervel-medecine-esthetique-regenerative-2026",
    en: "innovation-insider-benoit-chardon-julien-vervel-regenerative-aesthetic-medicine-2026",
  },
  {
    fr: "focus-my-healthcie-pilotage-seo-visibilite-digitale-medecine-esthetique",
    en: "focus-my-healthcie-seo-digital-visibility-management-aesthetic-medicine",
  },
  {
    fr: "interview-efremkin-pavel-aerolase-storytelling-innovation-laser-dermatologie-aerospatiale",
    en: "interview-efremkin-pavel-aerolase-storytelling-aerospace-inspired-laser-innovation",
  },
  {
    fr: "expertise-dr-el-muntasar-ahmed-rajeunissement-regard-fillers-polynucleotides",
    en: "expertise-dr-el-muntasar-ahmed-under-eye-rejuvenation-fillers-polynucleotides",
  },
  {
    fr: "interview-pr-jean-paul-meningaud-chirurgie-plastique-congres-aime-2026",
    en: "interview-prof-jean-paul-meningaud-plastic-surgery-aime-congress-2026",
  },
  {
    fr: "interview-dr-avelar-luiz-anthropologie-medico-legale-dimorphisme-cranien-esthetique",
    en: "interview-dr-avelar-luiz-forensic-anthropology-skull-dimorphism-aesthetics",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((p) => {
    // Nettoyage des slashes pour éviter les doublons
    const slugFr = p.fr === "" ? "" : `/${p.fr}`;
    const slugEn = p.en === "" ? "" : `/${p.en}`;

    const urlFr = `${HOST}/fr${slugFr}`;
    const urlEn = `${HOST}/en${slugEn}`;

    // 2 entrées par ligne FR + EN
    return [
      {
        url: urlFr,
        lastModified: new Date(),
        priority: p.fr === "" ? 1 : 0.8,
        alternates: {
          languages: {
            fr: urlFr,
            en: urlEn,
            "x-default": urlEn,
          },
        },
      },
      {
        url: urlEn,
        lastModified: new Date(),
        priority: p.en === "" ? 1 : 0.8,
        alternates: {
          languages: {
            fr: urlFr,
            en: urlEn,
            "x-default": urlEn,
          },
        },
      },
    ];
  });
}
