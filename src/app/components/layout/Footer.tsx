import { useTranslations } from "next-intl";
import Image from "next/image";
import logoH from "../../img/agence-communication-sante-web-paris.png";
import logo from "../../img/heritage-magazine-anti-age-innovation.png";
import texture from "../../img/meilleure-agence-web-medicale-paris.png";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="relative bg-mainBlue z-[1]">
      <Image
        src={texture}
        alt="texture"
        className="absolute size-full object-cover  -z-[1] top-0 left-0"
        quality={100}
      />
      <div className="myContainer  xl:pb-12 text-white space-y-8 lg:space-y-16  overflow-hidden">
        <div className="text-center">
          <h2 className="h2 text-white">{t("h2")}</h2>
          <h3 className="h3 mt-2 lg:mt-4">{t("h3")}</h3>
        </div>

        <div className="lg:grid lg:grid-cols-4 max-w-screen-lg m-auto">
          <div className="col-span-2 space-y-4">
            <div className="lg:grid lg:grid-cols-2">
              <ul>
                <li>
                  <a
                    href={t("links.about")}
                    className="h3 text-white text-lg hover:text-orange"
                  >
                    {t("content.about")}
                  </a>
                </li>
                <li>
                  <a
                    href={t("links.partners")}
                    className="h3 text-white text-lg hover:text-orange"
                  >
                    {t("content.partners")}
                  </a>
                </li>
                <li>
                  <a
                    href={t("links.publications")}
                    className="h3 text-white text-lg hover:text-orange"
                  >
                    {t("content.publications")}
                  </a>
                </li>
                <li>
                  <a
                    href={t("links.contributors")}
                    className="h3 text-white text-lg hover:text-orange"
                  >
                    {t("content.contributors")}
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href={t("links.congresses")}
                    className="h3 text-white text-lg hover:text-orange"
                  >
                    {t("content.congresses")}
                  </a>
                </li>
                <li>
                  <a
                    href={t("links.contact")}
                    className="h3 text-white text-lg hover:text-orange"
                  >
                    {t("content.contact")}
                  </a>
                </li>
                <li>
                  <a
                    href={t("links.mediaKit")}
                    className="h3 text-white text-lg hover:text-orange"
                  >
                    {t("content.mediaKit")}
                  </a>
                </li>
                <li>
                  <a
                    href={t("links.legals")}
                    className="h3 text-white text-lg hover:text-orange"
                  >
                    {t("content.legals")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4 col-span-2 grid">
            <Image
              src={logo}
              alt="Logo (H)ERITAGE Magazine"
              className="max-lg:hidden h-[60%] m-auto mr-0 object-contain w-fit"
            />
          </div>
        </div>

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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-auto stroke-white"
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
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-auto fill-white stroke-white"
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
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-auto fill-white stroke-white"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>

      <div className="bg-[#131a33] text-white text-center space-y-1 py-[5px]">
        <div className="border-y-[1px] border-dashed py-1 px-2">
          <a
            href="https://www.healthcie.fr"
            target="_blank"
            rel="nofollow"
            className="font-normal tracking-[1px] text-sm lg:text-base flex items-center gap-1 lg:gap-2 justify-center"
          >
            <Image
              src={logoH}
              alt="Logo HEALTHCIE"
              className="h-[16px] lg:h-[22px] object-contain size-fit block"
              quality={100}
            />
            {t("healthcie_mobile")}
          </a>
        </div>
      </div>
    </footer>
  );
}
