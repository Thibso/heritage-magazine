"use client";

import en from "@/app/img/en.png";
import fr from "@/app/img/fr.png";
import Image from "next/image";

import { getPathname, usePathname } from "@/i18n/routing";

import Link from "next/link";

type Props = {
  locale: string;
};

export default function SwitchLang(props: Props) {
  const pathname = usePathname();

  const translatePathname_FR = getPathname({
    locale: "fr",
    href: pathname,
  });

  const translatePathname_EN = getPathname({
    locale: "en",
    href: pathname,
  });

  return (
    <div>
      {props.locale === "en" ? (
        <Link href={translatePathname_FR} hrefLang="fr" title="French version">
          <Image
            className="max-lg:max-h-[32px] max-lg:w-fit lg:h-[24px] object-contain"
            src={fr}
            alt=""
          />
        </Link>
      ) : (
        <Link
          href={translatePathname_EN}
          hrefLang="en"
          title="Version Anglaise"
        >
          <Image
            className="max-lg:max-h-[32px] max-lg:w-fit lg:h-[24px] object-contain"
            src={en}
            alt=""
          />
        </Link>
      )}
    </div>
  );
}
