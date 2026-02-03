"use client";

import { AlignRight } from "lucide-react";
import { useState } from "react";
import SwitchLang from "./SwitchLang";

type Props = {
  locale: string;
};

export default function MenuMobile(props: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <AlignRight
        className={`size-8 ${open ? "text-orange" : "text-white"}`}
        onClick={() => {
          setOpen(!open);
        }}
      />
      <section
        className={`fixed size-full h-screen top-[40px] ${
          open ? "left-[0%] opacity-100" : "left-[100%] opacity-30"
        } transition-all duration-300 bg-mainBlue px-6 py-12 space-y-12`}
      >
        {props.locale === "fr" ? (
          <ul className="flex flex-col gap-6 pt-12">
            <li>
              <a
                href="/fr/about"
                className="font-sfPro text-xl font-medium uppercase text-white transition hover:text-orange"
              >
                A propos
              </a>
            </li>
            <li>
              <a
                href="/fr/partenaires-chirurgie-esthetique-medecine-anti-age"
                className="font-sfPro text-xl font-medium uppercase text-white transition hover:text-orange"
              >
                Partenaires
              </a>
            </li>
            <li>
              <a
                href="/fr/contributeurs-articles-chirugie-plastique-medecine-esthetique"
                className="font-sfPro text-xl font-medium uppercase text-white transition hover:text-orange"
              >
                Contributeurs
              </a>
            </li>
            <li>
              <a
                href="/fr/publications-innovations-medecine-esthetique"
                className="font-sfPro text-xl font-medium uppercase text-white transition hover:text-orange"
              >
                Publications
              </a>
            </li>
            <li>
              <a
                href="/fr/meilleurs-congres-medecine-esthetique-chirurgie-plastique"
                className="font-sfPro text-xl font-medium uppercase text-white transition hover:text-orange"
              >
                Congrès
              </a>
            </li>
            <li>
              <a
                href="/fr/contact"
                className="font-sfPro text-xl font-medium uppercase text-white transition hover:text-orange"
              >
                Contact
              </a>
            </li>
          </ul>
        ) : (
          <ul className="flex flex-col gap-6 pt-12">
            <li>
              <a
                href="/en/about"
                className="font-sfPro text-xl font-medium uppercase text-white transition hover:text-orange"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/en/partners-plastic-surgery-anti-aging-medicine"
                className="font-sfPro font-medium text-xl uppercase text-white transition hover:text-orange"
              >
                Partners
              </a>
            </li>
            <li>
              <a
                href="/en/contributors-articles-plastic-surgery-aesthetic-medicine"
                className="font-sfPro font-medium text-xl uppercase text-white transition hover:text-orange"
              >
                Contributors
              </a>
            </li>
            <li>
              <a
                href="/en/publications-aesthetic-medicine-innovations"
                className="font-sfPro font-medium text-xl uppercase text-white transition hover:text-orange"
              >
                Publications
              </a>
            </li>
            <li>
              <a
                href="/en/top-aesthetic-medicine-plastic-surgery-congresses"
                className="font-sfPro font-medium text-xl uppercase text-white transition hover:text-orange"
              >
                Congresses
              </a>
            </li>
            <li>
              <a
                href="/en/contact"
                className="font-sfPro font-medium text-xl uppercase text-white transition hover:text-orange"
              >
                Contact
              </a>
            </li>
          </ul>
        )}

        <SwitchLang locale={props.locale} />
      </section>
    </div>
  );
}
