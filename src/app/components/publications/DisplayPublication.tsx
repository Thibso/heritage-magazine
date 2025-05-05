"use client";

import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import Button from "../buttons/Button";

type Props = {
  key: number;
  image: StaticImageData;
  alt: string;
  h2: string;
  h3: string;
  p: ReactNode;
  linkTo: string;
  linkText: string;
};

export function DisplayPublicationPeer(props: Props) {
  return (
    <div
      className="flex flex-col max-lg:gap-6 lg:grid lg:grid-cols-5"
      key={props.key}
    >
      <div className="col-span-2">
        <Image
          src={props.image}
          alt={props.alt}
          title={props.alt}
          className="max-lg:m-auto w-full max-lg:max-w-[400px] object-contain rounded-sm"
        />
      </div>

      <div className="col-span-3 space-y-6 flex flex-col justify-center md:ml-12 lg:ml-20">
        <div>
          <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
            {props.h2}
          </h2>
          <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
            {props.h3}
          </h3>
        </div>

        <p className="text-base">{props.p}</p>
        <Button link={props.linkTo}>{props.linkText}</Button>
      </div>
    </div>
  );
}

export function DisplayPublicationOdd(props: Props) {
  return (
    <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-6 lg:grid lg:grid-cols-5">
      <div className="col-span-3 space-y-6 flex flex-col justify-center md:mr-12 lg:mr-20">
        <div>
          <h2 className="font-sfPro font-bold text-2xl lg:text-4xl uppercase">
            {props.h2}
          </h2>
          <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase">
            {props.h3}
          </h3>
        </div>

        <p className="text-base">{props.p}</p>
        <Button link={props.linkTo}>{props.linkText}</Button>
      </div>

      <div className="col-span-2">
        <Image
          src={props.image}
          alt={props.alt}
          title={props.alt}
          className="max-lg:m-auto w-full max-lg:max-w-[400px] object-contain rounded-sm"
        />
      </div>
    </div>
  );
}
