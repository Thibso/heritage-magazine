import FullPageScroll from "@/app/components/layout/FullPageScroll";
import aerolase from "@/app/img/aerolase-partenaire-heritage-magazine.png";
import aime from "@/app/img/congres/aime-congress-aesthetic-medicine-paris.png";
import imcas from "@/app/img/congres/imcas-congres-medecine-esthetique-chirurgie-plastique-dermatologie.png";
import summit from "@/app/img/congres/medical-aesthetic-injectable-summit-marbella.png";
import sfme from "@/app/img/congres/sfme-congress-paris-aesthetic-medicine.png";
import fr from "@/app/img/fr.jpg";
import healthcie from "@/app/img/healthcie-partenaire-heritage-magazine.png";
import magazine from "@/app/img/heritage-innovation-sante-magazine-specialiste.jpg";
import logo from "@/app/img/heritage-magazine-anti-age-innovation.png";
import hydrafacial from "@/app/img/hydrafacial-partner-heritage-magazine-aesthetic.png";
import idocteur from "@/app/img/idocteur-partner-heritage-magazine.png";
import julien from "@/app/img/Julien-vervel-consultant-médical-laboratoires.jpg";
import example1 from "@/app/img/media-kit/example-1.jpg";
import example2 from "@/app/img/media-kit/example-2.jpg";
import texture from "@/app/img/meilleure-agence-web-medicale-paris.png";
import olivier from "@/app/img/olivier-claire-partenaire-heritage-magazine.png";
import slide_5 from "@/app/img/plastic-surgeons-best-magazine.jpg";
import thinkin from "@/app/img/thinkin-partenaire-heritage-magazine.png";
import uk from "@/app/img/uk.png";
import vivacy from "@/app/img/vivacy-logo-official.webp";
import Image from "next/image";

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

export default function MediaKitEnglish() {
  return (
    <FullPageScroll>
      {/* 1 */}
      <section className="min-h-screen relative grid">
        <Image
          src={texture}
          alt="texture"
          fill
          quality={100}
          className="absolute top-0 left-0 object-cover"
        />
        <div className="myContainer relative flex flex-col justify-end size-full">
          <Image
            src={logo}
            alt="Logo HERITAGE Magazine"
            quality={100}
            className="absolute top-1/2 -translate-y-1/2 object-contain w-[70%] left-1/2 -translate-x-1/2"
          />
          <div className="space-y-12 text-white text-center">
            <div className="space-y-6">
              <h1 className="text-2xl">
                Premium ecosystem for the aesthetics industry leaders
              </h1>
              <Image src={uk} alt="UK" className="w-10 mx-auto" />
            </div>
            <p className="text-base opacity-80">By HEALTHCIE</p>
          </div>
        </div>
      </section>
      {/* 2 */}
      <section className="min-h-screen relative grid pl-32">
        <h3 className="text-orange font-bold text-[145px] absolute -bottom-[0.5em] left-[0.3em] origin-left -rotate-90 leading-[0.9em]">
          PREAMBLE
        </h3>
        <div className="myContainer my-auto space-y-16">
          <div className="space-y-4">
            <p className="text-lg flex">
              <span className="text-[150px] leading-[0.8em]">F</span>
              <span>
                ollowing the success of the first edition, we are thrilled to
                present the second edition of (H)ERITAGE Magazine, your
                essential read in the dynamic world of aesthetic medicine.
                <br />
                <br />
                This annual publication aims to showcase the latest innovations
                in products and technologies within the aesthetic sector. Why
                (H)ERITAGE? Because we believe that the history of aesthetic
                surgery and medicine provides the strong foundations upon which
                we build both the present and the future.
              </span>
            </p>
            <p>
              By embracing the core values of medicine, we seek to elevate the
              future of the profession by blending tradition with innovation.
              (H)ERITAGE Magazine is designed primarily for surgeons, doctors,
              and key industry stakeholders, including laboratories and medical
              device manufacturers. (H)ERITAGE is a unique print and digital
              platform where cutting-edge ideas, best practices, and remarkable
              success stories are shared and celebrated.
            </p>
          </div>

          <div className="grid grid-cols-8 gap-8">
            <div className="col-span-2 relative w-full h-auto aspect-[9/11]">
              <Image
                src={julien}
                alt="Julien VERVEL"
                className="absolute object-cover object-top top-0 left-0 size-full"
              />
            </div>

            <div className="col-span-6 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <p>
                  In this venture, we shine a spotlight on the projects of our
                  most iconic partners, as their stories deserve to be shared
                  and their achievements should be recognized.
                </p>
                <p>
                  We hope that this publication will become a source of
                  inspiration for our entire community and strengthen the
                  connections between the various players in the aesthetic
                  sector. Thank you all for your interest and continued support.
                </p>
              </div>

              <div>
                <h4 className="text-lg">Julien Vervel</h4>
                <p>Publishing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3 */}
      <section className="min-h-screen relative grid px-32 bg-slate-50">
        <h3 className="text-orange font-bold text-[145px] absolute -bottom-[0.5em] left-[0.3em] origin-left -rotate-90 leading-[0.9em]">
          EDITORIAL
        </h3>
        <div className="absolute right-0 top-0 w-[300px] h-full">
          <Image
            src={magazine}
            alt="HERITAGE Magazine"
            quality={100}
            className="absolute top-0 left-0 size-full object-cover"
          />
        </div>
        <div className="myContainer w-full my-auto grid grid-cols-2">
          <div className="space-y-12 col-span-1">
            <div>
              <h4 className="font-semibold text-lg">PUBLISHING DIRECTOR </h4>
              <p>JULIEN VERVEL</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">EDITOR-IN-CHEF</h4>
              <p>HUGO NIVAULT</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">TRANSLATION</h4>
              <p>HUGO NIVAULT</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">PHOTOGRAPHY</h4>
              <p>JOACHIM BLANQUART</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">ART DIRECTION</h4>
              <p>VINCENT MOTTAY</p>
            </div>
          </div>

          <div className="space-y-12 col-span-1">
            <div>
              <h4 className="font-semibold text-lg">WEBSITE</h4>
              <p> MAGAZINE-HERITAGE.COM</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg"> SOCIAL MEDIA</h4>
              <p>@MAGAZINE_HERITAGE - INSTAGRAM</p>
              <p>HERITAGE MAGAZINE - LINKEDIN</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">PRINT</h4>
              <p>SODAL</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg"> COVER AND BACK COVER</h4>
              <p>MATHILDE PIVIDAL</p>
            </div>
          </div>
        </div>
      </section>
      {/* 4 */}
      <section className="min-h-screen relative">
        <Image
          src={magazine}
          alt="HERITAGE Magazine"
          quality={100}
          className="absolute top-0 left-0 size-full object-cover"
        />
      </section>
      {/* 5 */}
      <section className="min-h-screen relative grid pl-32 bg-mainBlue">
        <h3 className="text-orange font-bold text-[145px] absolute -bottom-[0.5em] left-[0.3em] origin-left -rotate-90 leading-[0.9em]">
          PRINT
        </h3>
        <div className="grid grid-cols-7 size-full">
          <div className="col-span-3 myContainer text-white  size-full">
            <div className="pt-[100px] space-y-4">
              <p>
                (H)ERITAGE offers a premium print platform to promote your
                products and services to French and international aesthetic
                surgeons, doctors, and dermatologists.
              </p>

              <p>
                Our elegantly designed print edition embodies the prestige and
                expertise of the industry. Its exclusive content explores the
                latest trends, innovations, and best practices in the sector,
                providing direct visibility for your brand among industry
                leaders.
              </p>

              <p>
                Don’t miss the opportunity to join our community and demonstrate
                your commitment to innovation and the advancement of medical
                practices.
              </p>

              <div className="flex justify-center gap-4 pt-24">
                <Image src={uk} alt="UK" className="w-10" />
                <Image src={fr} alt="FR" className="w-10" />
              </div>
            </div>
          </div>
          <div className="col-span-4 relative z-[1] grid h-full">
            <Image
              src={slide_5}
              alt="Magazine HERITAGE"
              quality={100}
              className="absolute top-0 left-0 size-full object-cover -z-[1]"
            />

            <div className="text-white p-8 m-auto mb-0 ml-0 space-y-6">
              <p>
                <span className="text-orange">Dimensions :</span> 210mm x 275mm
              </p>
              <p>
                <span className="text-orange">Number of pages :</span> 80 + 4
              </p>
              <p>
                <span className="text-orange">Realease date :</span> November
                2025
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 6 */}
      <section className="min-h-screen relative">
        <Image
          src={magazine}
          alt="HERITAGE Magazine"
          quality={100}
          className="absolute top-0 left-0 size-full object-cover"
        />
      </section>
      {/* 7 */}
      <section className="min-h-screen relative grid pl-32 bg-mainBlue">
        <h3 className="text-orange font-bold text-[145px] absolute -bottom-[0.5em] left-[0.3em] origin-left -rotate-90 leading-[0.9em]">
          DIGITAL
        </h3>
        <div className="grid grid-cols-7 size-full">
          <div className="col-span-3 myContainer text-white space-y-4 size-full flex flex-col justify-end">
            <p>
              We offer a dual platform – print and digital allowing brands to
              communicate effectively with a specialised and discerning
              audience.
            </p>

            <p>
              Our digital edition opens an interactive and modern channel,
              accessible at any time. Whether you are showcasing your latest
              innovations in medical devices or highlighting your flagship
              products, (H)ERITAGE is the ideal place to connect with surgeons,
              doctors, and dermatologists seeking new solutions to optimise
              their practices.
            </p>

            <p>
              Being part of (H)ERITAGE Magazine ensures lasting visibility in a
              competitive and constantly evolving sector.
            </p>
          </div>
          <div className="col-span-4 relative grid h-full">
            <Image
              src={slide_5}
              alt="Magazine HERITAGE"
              quality={100}
              className="absolute top-0 left-0 size-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* 8 */}
      <section className="min-h-screen relative px-32 grid bg-white">
        <h3 className="text-orange font-bold text-[145px] absolute -bottom-[0.5em] left-[0.3em] origin-left -rotate-90 leading-[0.9em]">
          PARTNERS
        </h3>
        <div className="myContainer w-full space-y-20">
          <div className="space-y-2 text-center">
            <h2 className="text-xl font-semibold"> DISTRIBUTION NETWORK</h2>
            <h3 className="text-lg font-semibold text-orange">
              Our distribution network is constantly evolving
            </h3>
          </div>

          <div className="space-y-20">
            <div className="flex justify-between">
              <Image
                src={aime}
                alt="AIME"
                className="w-[250px] object-contain h-[60px]"
              />

              <Image
                src={imcas}
                alt="AIME"
                className="w-[250px] object-contain h-[60px]"
              />

              <Image
                src={thinkin}
                alt="AIME"
                className="w-[250px] object-contain h-[60px]"
              />
            </div>

            <div className="flex justify-around">
              <Image
                src={summit}
                alt="AIME"
                className="w-[250px] object-contain h-[60px]"
              />

              <Image
                src={sfme}
                alt="AIME"
                className="w-[250px] object-contain h-[60px]"
              />
            </div>
          </div>

          <div className="space-y-2 text-center">
            <h2 className="text-xl font-semibold">
              MEDICAL DEVICE COMPANIES PARTNERS OF THE FIRST EDITION{" "}
            </h2>
            <h3 className="text-lg font-semibold text-orange">
              Our partner network is constantly evolving
            </h3>
          </div>

          <div className="space-y-20">
            <div className="flex justify-between items-center">
              <Image
                src={aerolase}
                alt="AIME"
                className="w-[250px] object-contain h-[60px] "
              />

              <Image
                src={vivacy}
                alt="AIME"
                className="w-[250px] object-contain h-[60px] "
              />

              <Image
                src={hydrafacial}
                alt="AIME"
                className="w-[250px] object-contain h-[60px] "
              />
            </div>

            <div className="flex justify-between items-center">
              <Image
                src={idocteur}
                alt="AIME"
                className="w-[250px] object-contain h-[60px] "
              />

              <Image
                src={healthcie}
                alt="AIME"
                className="w-[250px] object-contain h-[120px] "
              />

              <Image
                src={olivier}
                alt="AIME"
                className="w-[250px] object-contain h-[120px] "
              />
            </div>
          </div>
        </div>
      </section>
      {/* 9 */}
      <section className="min-h-screen relative">
        <Image
          src={magazine}
          alt="HERITAGE Magazine"
          quality={100}
          className="absolute top-0 left-0 size-full object-cover"
        />
      </section>
      {/* 10 */}
      <section className="min-h-screen relative px-32 grid bg-slate-50">
        <h3 className="text-orange font-bold text-[145px] absolute -bottom-[0.5em] left-[0.3em] origin-left -rotate-90 leading-[0.9em]">
          PACK(H)
        </h3>
        <div className="myContainer w-[90%] mx-auto space-y-20">
          <h2 className="text-xl font-semibold text-center">Pack (H)ERITAGE</h2>
          <div className="space-y-4">
            <p>
              For medical device companies and manufacturers, we offer the
              (H)ERITAGE package, which includes:
            </p>
            <ul className="ml-4 list-disc text-lg space-y-2">
              <li>A two double-page interview with 2 photo inserts (EN-FR)</li>
              <li>1 full-page advert in the next edition </li>
              <li>
                The full article optimised for SEO on the digital platform +
                backlink
              </li>
            </ul>
            <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center !mt-12">
              <p>(H)ERITAGE Package Price</p>
              <div className="border-t-[1px] border-mainBlue/70"></div>
              <p>4000 EUROS excl. tax.</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-center">
            (H)ERITAGE Package Options
          </h2>
          <div className="space-y-4">
            <ul className="ml-4 list-disc text-lg space-y-2">
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p>Banner advertisement (website header)</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p>1000 EUROS per month excl. tax. </p>
                </div>
              </li>
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p>3 crossposts + 3 Instagram stories</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p>500 EUROS excl. tax.</p>
                </div>
              </li>
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p>100 copies (delivry within France)</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p>1200 EUROS excl. tax.</p>
                </div>
              </li>
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p>100 copies (delivry in your country)</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p>UPON REQUEST</p>
                </div>
              </li>
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p>
                    Publication of the (H)ERITAGE pack in the French version of
                    the magazine.
                  </p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p> 1000 EUROS excl. tax.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* 11 */}
      <section className="min-h-screen relative px-32 grid bg-white">
        <h3 className="text-orange font-bold text-[145px] absolute -bottom-[0.5em] left-[0.3em] origin-left -rotate-90 leading-[0.9em]">
          EXAMPLES
        </h3>
        <div className="myContainer w-[90%] mx-auto space-y-20 mb-0">
          <ul className="list-disc space-y-12">
            <li className="space-y-4">
              <span>A two double-page interview</span>
              <Image
                src={example1}
                alt="Double page interview"
                quality={100}
                className="max-h-[250px] object-contain w-fit"
              />
            </li>
            <li className="space-y-4">
              <span>
                The full article optimised for SEO on the digital platform +
                backlink
              </span>
              <Image
                src={example2}
                alt="Article SEO"
                quality={100}
                className="max-h-[250px] object-contain w-fit"
              />
            </li>
          </ul>
        </div>
      </section>
      {/* 12 */}
      <section className="min-h-screen relative px-32 grid bg-slate-50">
        <h3 className="text-orange font-bold text-[145px] absolute -bottom-[0.5em] left-[0.3em] origin-left -rotate-90 leading-[0.9em]">
          AD RATES
        </h3>
        <div className="myContainer w-[80%] mx-auto space-y-20">
          <h2 className="text-xl font-semibold text-center">Advertising</h2>
          <div className="space-y-4">
            <ul className="space-y-6">
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p className="text-xl">STANDARD AD</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p className="text-xl"> 2000 EUROS excl. tax.</p>
                </div>
              </li>
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p className="text-xl"> PRE-SUMMARY</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p className="text-xl">2500 EUROS excl. tax.</p>
                </div>
              </li>
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p className="text-xl">
                    CENTRAL DOUBLE-PAGE ADVERTISEMENT
                    <br />
                    (limited to 1 per edition)
                  </p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p className="text-xl">5000 EUROS excl. tax.</p>
                </div>
              </li>
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p className="text-xl">DOUBLE-PAGE ADVERTISEMENT</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p className="text-xl">4000 EUROS excl. tax.</p>
                </div>
              </li>
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p className="text-xl">SECOND COVER</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p className="text-xl">3500 EUROS excl. tax.</p>
                </div>
              </li>
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p className="text-xl">THIRD COVER</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p className="text-xl">3000 EUROS excl. tax.</p>
                </div>
              </li>
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p className="text-xl">BACK COVER</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p className="text-xl">4500 EUROS excl. tax.</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <div className="gap-2 w-full grid grid-cols-[auto,1fr,auto] items-center">
                  <p className="text-xl">TAILOR MADE PACK</p>
                  <div className="border-t-[1px] border-mainBlue/70"></div>
                  <p className="text-xl">UPON REQUEST</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* 13 */}
      <section className="min-h-screen relative">
        <Image
          src={magazine}
          alt="HERITAGE Magazine"
          quality={100}
          className="absolute top-0 left-0 size-full object-cover"
        />
      </section>
      {/* 14 */}
      <section className="min-h-screen relative px-32 grid bg-mainBlue text-white">
        <h3 className="text-orange font-bold text-[145px] absolute -bottom-[0.5em] left-[0.3em] origin-left -rotate-90 leading-[0.9em]">
          CONTACT
        </h3>
        <div className="myContainer w-[90%] mx-auto grid grid-cols-2">
          <div className="space-y-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-light">Website</h3>
              <p className="text-3xl ">magazine-heritage.com</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-light">email</h3>
              <p className="text-3xl ">contact@magazine-heritage.com</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-light">Phone number</h3>
              <p className="text-3xl ">+33 6 77 39 02 75</p>
            </div>
          </div>
          <div className="h-full flex flex-col justify-between">
            <Image
              src={logo}
              alt="Logo HERITAGE Magazine"
              quality={100}
              className="object-contain w-[100%]"
            />
            <div className="flex gap-4 lg:justify-center col-span-1">
              {/* instagram */}
              <a
                href="https://www.instagram.com/magazine_heritage/"
                target="_blank"
                title="Intagram (H)ERITAGE Magazine"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-12 h-auto stroke-white"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61564632284607"
                target="_blank"
                title="Facebook (H)ERITAGE Magazine"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth="0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-12 h-auto fill-white stroke-white"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/magazine-heritage/"
                target="_blank"
                title="Linkedin (H)ERITAGE Magazine"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth="0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-12 h-auto fill-white stroke-white"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </FullPageScroll>
  );
}
