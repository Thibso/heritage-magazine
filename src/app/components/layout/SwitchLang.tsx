"use client";

import en from "@/app/img/en.png";
import fr from "@/app/img/fr.png";
import Image from "next/image";

import { usePathname } from "@/i18n/routing";
import Link from "next/link";

type Props = {
  locale: string;
};

export default function SwitchLang(props: Props) {
  const pathname = usePathname();

  return (
    <div>
      {props.locale === "en" ? (
        <Link href={"/fr/" + pathname}>
          <Image
            className="max-lg:max-h-[32px] max-lg:w-fit lg:h-[24px] object-contain"
            src={fr}
            alt=""
          />
        </Link>
      ) : (
        <Link href={"/en/" + pathname}>
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
