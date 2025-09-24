"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "../buttons/Button";

type Props = {
  image: string;
  alt: string;
  h2: string;
  h3: string;
  p: string;
  linkTo: string;
  linkText: string;
};

export function DisplayPublicationPeer(props: Props) {
  const t = useTranslations("Articles_base");

  return (
    <div className="flex flex-col max-lg:gap-6 lg:grid lg:grid-cols-6 max-w-screen-2xl mx-auto">
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
