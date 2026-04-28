"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

type CardProps = {
  image: string;
  head: string;
  alt: string;
  h2: string;
  h3: string;
  p: string;
  linkTo: string;
  linkText: string;
  tags: string[];
  mobileHidden?: boolean;
};

type Props = {
  data: CardProps[];
};

function Card(props: CardProps) {
  const t = useTranslations("Articles_base");
  return (
    <Link
      href={t(props.linkTo)}
      className={`${props.mobileHidden ? "max-lg:hidden" : ""} grid grid-rows-[250px_1fr] h-full shadow md:hover:scale-[1.025] transition-all duration-200`}
    >
      {/* IMAGE */}
      <div className="relative size-full">
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
        {/* TITLE */}
        <h4 className="font-sfPro font-medium text-sm lg:text-base uppercase">
          {t(props.h2)}
        </h4>

        {/* AUTHOR */}
        <div className="flex items-center gap-x-2 my-auto mb-0">
          {props.image != "" ? (
            <Image
              src={props.image}
              alt=""
              width={1024}
              height={1024}
              className="size-12 object-cover rounded-full object-top"
            />
          ) : null}

          <p className="font-bold text-sm">{t(props.h3)}</p>
        </div>
      </div>
    </Link>
  );
}

export default function LastPublicationsSlider(props: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [state, setState] = useState(isMobile ? 0 : 2);
  const [transition, setTransition] = useState<string>("all ease 0.3s");
  const maxLenght = props.data.length;

  function Down() {
    if (state === 0) {
      setTimeout(() => {
        setTransition("none");
        setState(maxLenght);

        requestAnimationFrame(() => {
          setTransition("all ease 0.3s");

          requestAnimationFrame(() => {
            setState(maxLenght - 1);
          });
        });
      }, 0);
    } else {
      setState((state) => state - 1);
    }
  }

  function Up() {
    if (state === maxLenght) {
      setTimeout(() => {
        setTransition("none");
        setState(0);

        requestAnimationFrame(() => {
          setTransition("all ease 0.3s");

          requestAnimationFrame(() => {
            setState(1);
          });
        });
      }, 0);
    } else {
      setState((state) => state + 1);
    }
  }

  return (
    <div className="relative lg:px-8">
      <div className="touch-pan-x overflow-auto lg:overflow-hidden lg:p-2">
        <motion.div
          className="grid grid-cols-5 w-[400%] md:w-[225%] gap-8 lg:grid-cols-9 lg:w-[300%] lg:gap-16"
          style={{
            x: state * -(100 / 9) + "%",
            transition: transition,
          }}
        >
          <Card
            image={props.data[maxLenght - 2].image}
            head={props.data[maxLenght - 2].head}
            alt={props.data[maxLenght - 2].alt}
            h2={props.data[maxLenght - 2].h2}
            h3={props.data[maxLenght - 2].h3}
            p={props.data[maxLenght - 2].p}
            linkTo={props.data[maxLenght - 2].linkTo}
            linkText={props.data[maxLenght - 2].linkText}
            tags={props.data[maxLenght - 2].tags}
            mobileHidden={true}
          />

          <Card
            image={props.data[maxLenght - 1].image}
            head={props.data[maxLenght - 1].head}
            alt={props.data[maxLenght - 1].alt}
            h2={props.data[maxLenght - 1].h2}
            h3={props.data[maxLenght - 1].h3}
            p={props.data[maxLenght - 1].p}
            linkTo={props.data[maxLenght - 1].linkTo}
            linkText={props.data[maxLenght - 1].linkText}
            tags={props.data[maxLenght - 1].tags}
            mobileHidden={true}
          />

          {props.data.map((article, index) => {
            return (
              <Card
                key={index}
                image={article.image}
                head={article.head}
                alt={article.alt}
                h2={article.h2}
                h3={article.h3}
                p={article.p}
                linkTo={article.linkTo}
                linkText={article.linkText}
                tags={article.tags}
                mobileHidden={false}
              />
            );
          })}

          <Card
            image={props.data[0].image}
            head={props.data[0].head}
            alt={props.data[0].alt}
            h2={props.data[0].h2}
            h3={props.data[0].h3}
            p={props.data[0].p}
            linkTo={props.data[0].linkTo}
            linkText={props.data[0].linkText}
            tags={props.data[0].tags}
            mobileHidden={true}
          />

          <Card
            image={props.data[1].image}
            head={props.data[1].head}
            alt={props.data[1].alt}
            h2={props.data[1].h2}
            h3={props.data[1].h3}
            p={props.data[1].p}
            linkTo={props.data[1].linkTo}
            linkText={props.data[1].linkText}
            tags={props.data[1].tags}
            mobileHidden={true}
          />
        </motion.div>
      </div>

      {/* CONTROLS */}
      <button
        className="max-lg:hidden absolute top-1/2 -left-8 -translate-y-1/2"
        onClick={Down}
      >
        <ChevronLeft className="size-6 text-mainBlue" />
      </button>

      <button
        className="max-lg:hidden absolute top-1/2 -right-8 -translate-y-1/2"
        onClick={Up}
      >
        <ChevronRight className="size-6 text-mainBlue" />
      </button>
    </div>
  );
}
