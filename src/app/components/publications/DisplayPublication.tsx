"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Button from "../buttons/Button";

type Props = {
  image: string;
  head: string;
  alt: string;
  h2: string;
  h3: string;
  p: string;
  linkTo: string;
  linkText: string;
  tags: string[];
  index: number;
};

export function DisplayPublicationPeer(props: Props) {
  const t = useTranslations("Articles_base");

  return (
    <div
      className={` ${props.index - (2 % 3) === 0 ? "-mt-8 mb-8" : ""}flex flex-col max-lg:gap-6 lg:grid lg:grid-cols-6 max-w-screen-2xl mx-auto`}
    >
      <div className="col-span-2">
        <Image
          src={props.image}
          alt={props.alt}
          title={props.alt}
          width={1024}
          height={1024}
          className="max-lg:m-auto w-full max-lg:max-w-[400px] aspect-square object-cover object-top rounded-sm"
        />
      </div>

      <div className="col-span-4 space-y-6 flex flex-col justify-center md:ml-12 lg:ml-24">
        <div>
          <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
            {t(props.h2)}
          </h2>
          <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
            {t(props.h3)}
          </h3>
        </div>

        <p className="text-base">
          {t.rich(props.p, {
            br: () => <br />,
          })}
        </p>
        <Button link={t(props.linkTo)}>{t(props.linkText)}</Button>
      </div>
    </div>
  );
}

export function DisplayPublicationOdd(props: Props) {
  const t = useTranslations("Articles_base");

  return (
    <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-6 lg:grid lg:grid-cols-6 max-w-screen-2xl mx-auto">
      <div className="col-span-4 space-y-6 flex flex-col justify-center md:mr-12 lg:mr-24">
        <div>
          <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
            {t(props.h2)}
          </h2>
          <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
            {t(props.h3)}
          </h3>
        </div>

        <p className="text-base">
          {t.rich(props.p, {
            br: () => <br />,
          })}
        </p>
        <Button link={t(props.linkTo)}>{t(props.linkText)}</Button>
      </div>

      <div className="col-span-2">
        <Image
          src={props.image}
          alt={props.alt}
          title={props.alt}
          width={1024}
          height={1024}
          className="max-lg:m-auto w-full max-lg:max-w-[400px] aspect-square object-cover object-top rounded-sm"
        />
      </div>
    </div>
  );
}

export function DisplayPublication(props: Props) {
  const t = useTranslations("Articles_base");
  const tags = useTranslations("Articles");

  return (
    <Link
      href={t(props.linkTo)}
      className={` ${(props.index - 1) % 3 === 0 ? "lg:-mt-8 lg:mb-8" : ""} grid grid-rows-[300px_1fr] h-full shadow md:hover:scale-[1.025] transition-all duration-200 `}
    >
      {/* IMAGE */}
      <div className="relative h-full">
        <Image
          src={props.head}
          alt={props.alt}
          title={props.alt}
          width={1024}
          height={1024}
          className="absolute size-full top-0 left-0 object-cover object-center"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 lg:px-8 lg:py-6 flex flex-col gap-y-6 lg:gap-y-8">
        {/* TAGS */}
        <div className="flex gap-2 flex-wrap">
          {props.tags.map((tag, index) => {
            return (
              <span
                key={tag + "_" + index}
                className="border-orange border-solid border-[1px] px-2 py-1 font-sfPro font-light rounded-full text-[12px] lg:text-sm cursor-pointer text-orange"
              >
                {tags(tag)}
              </span>
            );
          })}
        </div>
        {/* TITLE */}
        <h2 className="font-sfPro font-medium text-xl uppercase">
          {t(props.h2)}
        </h2>

        {/* ABSTRACT */}
        <div>
          <p className="text-base">
            {t.rich(props.p, {
              br: () => <br />,
            })}
          </p>
        </div>

        {/* AUTHOR */}
        <div className="flex items-center gap-x-2 my-auto mb-0">
          <Image
            src={props.image}
            alt=""
            width={1024}
            height={1024}
            className="size-12 object-cover rounded-full object-top"
          />

          <p className="font-bold text-sm">{t(props.h3)}</p>
        </div>
      </div>
    </Link>
  );
}
