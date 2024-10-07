import Image from "next/image";
import logo from "../../img/heritage-antiage-magazine-innovation-sante.png";
import SwitchLang from "./SwitchLang";
import MenuMobile from "./menuMobile";

type Props = {
  locale: string;
};

export default function Header(props: Props) {
  return (
    <header className="bg-mainBlue fixed top-0 w-full left-1/2 -translate-x-1/2 m-auto z-[99] px-5 py-3 lg:px-16 lg:py-5 flex justify-between max-w-[1920px] items-center">
      <a href={"/" + props.locale}>
        <Image
          src={logo}
          alt="Logo (H)ERITAGE Magazine"
          className="h-[20px] object-contain w-fit"
        />
      </a>

      {/* MOBILE */}
      <MenuMobile locale={props.locale} />

      {/* DESKTOP */}
      <ul className="max-lg:hidden gap-10 flex">
        <li>
          <a
            href="/fr/about"
            className="font-sfPro font-medium uppercase text-white transition hover:text-orange"
          >
            A propos
          </a>
        </li>
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
            href=""
            className="font-sfPro font-medium uppercase text-white transition hover:text-orange"
          >
            Contact
          </a>
        </li>
      </ul>
      <span className="max-lg:hidden">
        <SwitchLang locale={props.locale} />
      </span>
    </header>
  );
}
