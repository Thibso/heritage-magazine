import Image from "next/image";
import logo from "../../img/heritage-antiage-magazine-innovation-sante.png";
import SwitchLang from "./SwitchLang";
import MenuMobile from "./menuMobile";

type Props = {
  locale: string;
};

export default function Header(props: Props) {
  return (
    <header className="bg-mainBlue fixed top-0 w-full left-0 z-[99] px-5 py-3 lg:px-16 lg:py-5 flex justify-between items-center">
      <a href={"/" + props.locale}>
        <Image
          priority
          src={logo}
          alt="Logo (H)ERITAGE Magazine"
          className="h-[20px] object-contain w-fit"
        />
      </a>

      {/* MOBILE */}
      <span className="lg:hidden">
        <MenuMobile locale={props.locale} />
      </span>

      {/* DESKTOP */}
      {props.locale === "fr" ? (
        <ul className="max-lg:hidden gap-10 flex">
          <li>
            <a
              href="/fr/media-chirurgie-esthetique-medecine-antiage"
              className="font-sfPro font-medium uppercase text-white transition hover:text-orange"
            >
              A propos
            </a>
          </li>
          <li>
            <a
              href="/fr/partenaires-chirurgie-esthetique-medecine-anti-age"
              className="font-sfPro font-medium uppercase text-white transition hover:text-orange"
            >
              Partenaires
            </a>
          </li>
          {/* <li>
            <a
              href="/fr/contributors"
              className="font-sfPro font-medium uppercase text-white transition hover:text-orange"
            >
              Contributeurs
            </a>
          </li> */}
          <li>
            <a
              href="/fr/publications-innovations-medecine-esthetique"
              className="font-sfPro font-medium uppercase text-white transition hover:text-orange"
            >
              Publications
            </a>
          </li>

          <li>
            <a
              href="/fr/meilleurs-congres-medecine-esthetique-chirurgie-plastique"
              className="font-sfPro font-medium uppercase text-white transition hover:text-orange"
            >
              Congrès
            </a>
          </li>

          <li>
            <a
              href="/fr/contact"
              className="font-sfPro font-medium uppercase text-white transition hover:text-orange"
            >
              Contact
            </a>
          </li>
        </ul>
      ) : (
        <ul className="max-lg:hidden gap-10 flex">
          <li>
            <a
              href="/en/media-plastic-surgery-antiaging-medicine"
              className="font-sfPro font-medium uppercase text-white transition hover:text-orange"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/en/partners-plastic-surgery-anti-aging-medicine"
              className="font-sfPro font-medium uppercase text-white transition hover:text-orange"
            >
              Partners
            </a>
          </li>
          {/* <li>
            <a
              href="/en/contributors"
              className="font-sfPro font-medium uppercase text-white transition hover:text-orange"
            >
              Contributors
            </a>
          </li> */}
          <li>
            <a
              href="/en/publications-aesthetic-medicine-innovations"
              className="font-sfPro font-medium uppercase text-white transition hover:text-orange"
            >
              Publications
            </a>
          </li>
          <li>
            <a
              href="/en/top-aesthetic-medicine-plastic-surgery-congresses"
              className="font-sfPro font-medium uppercase text-white transition hover:text-orange"
            >
              Congresses
            </a>
          </li>
          <li>
            <a
              href="/en/contact"
              className="font-sfPro font-medium uppercase text-white transition hover:text-orange"
            >
              Contact
            </a>
          </li>
        </ul>
      )}

      <span className="max-lg:hidden">
        <SwitchLang locale={props.locale} />
      </span>
    </header>
  );
}
