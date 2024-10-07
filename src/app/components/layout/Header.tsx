import Image from "next/image";
import logo from "../../img/heritage-antiage-magazine-innovation-sante.png";
import SwitchLang from "./SwitchLang";

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
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg> */}

      <SwitchLang locale={props.locale} />

      {/* <Link
        href="https://vivacy.com"
        className="w-[15%] inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28px,_black_calc(100%-28px),transparent_100%)]"
      >
        <ul className="flex items-center justify-center md:justify-start [&_img]:max-w-[200px] animate-infinite-scroll">
          <li>
            <Image className=" h-[24px] object-contain" src={vivacy} alt="" />
          </li>
          <li>
            <Image className=" h-[24px] object-contain" src={vivacy} alt="" />
          </li>
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_img]:max-w-[200px] animate-infinite-scroll">
          <li>
            <Image className=" h-[24px] object-contain" src={vivacy} alt="" />
          </li>
          <li>
            <Image className=" h-[24px] object-contain" src={vivacy} alt="" />
          </li>
        </ul>
      </Link> */}

      {/* DESKTOP */}
      {/* <ul className="hidden gap-4 text-white">
        <li>
          <a href="" className="font-sfPro font-light uppercase">
            A propos
          </a>
        </li>
        <li>
          <a href="" className="font-sfPro font-light uppercase">
            Media kit / Prestations
          </a>
        </li>
        <li>
          <a href="" className="font-sfPro font-light uppercase">
            Articles
          </a>
        </li>
        <li>
          <a href="" className="font-sfPro font-light uppercase">
            Contact
          </a>
        </li>
      </ul> */}
    </header>
  );
}
