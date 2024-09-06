import Image from "next/image";
import logo from "../../img/heritage-antiage-magazine-innovation-sante.png";

export default function Header() {
  return (
    <header className="bg-mainBlue fixed top-0 w-full left-1/2 -translate-x-1/2 m-auto z-[99] px-5 py-3 lg:px-16 lg:py-5 flex justify-between max-w-[1920px] items-center">
      <a href="/">
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

      {/* DESKTOP */}
      <ul className="hidden gap-4 text-white">
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
      </ul>
    </header>
  );
}
