"use client";

import aime from "@/app/img/congres/aime-congress-aesthetic-medicine-paris.png";
import baas from "@/app/img/congres/baas-beauty-anti-aging-congress-buenos-aires.png";
import ccr from "@/app/img/congres/ccr-congres-londres-medecine-esthetique-regenerative.png";
import bts from "@/app/img/congres/congres-bts-beauty-through-science-stockholm.png";
import dubaiDerma from "@/app/img/congres/dubai-derma-congress-dermatology-aesthetic-medicine.png";
import faceUk from "@/app/img/congres/face-uk-congres-londres-medecine-esthetique.png";
import icce from "@/app/img/congres/icce-congress-cosmetic-clinical-dermatology.png";
import imcas from "@/app/img/congres/imcas-congres-medecine-esthetique-chirurgie-plastique-dermatologie.png";
import mais from "@/app/img/congres/medical-aesthetic-injectable-summit-marbella.png";
import meidam from "@/app/img/congres/meidam-congress-dubai-dermatology-aesthetic-medicine.png";
import pragueLab from "@/app/img/congres/prague-lab-congres-innovation-medecine-esthetique.png";
import radla from "@/app/img/congres/radla-congress-dermatology-asthetic-medicine.png";
import seme from "@/app/img/congres/seme-congres-societe-espagnole-medecine-esthetique.png";
import sfme from "@/app/img/congres/sfme-congress-paris-aesthetic-medicine.png";
import sharmDerma from "@/app/img/congres/sharm-derma-cairo-egypt-dermatology-aesthetic-medicine.png";
import sies from "@/app/img/congres/sies-international-congress-italian-society-aesthetic-medicine-surgery.png";
import sofcep from "@/app/img/congres/sofcep-congress-aesthetic-surgery-france.png";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { ReactNode, useState } from "react";
import ContentSection from "./contentSection";

export default function CongresReactiveDisplay() {
  const t = useTranslations("Congres");

  const [state, setState] = useState("europe");

  const europe: Array<[string, string, ReactNode, StaticImageData]> = [
    [
      t("europe.seme.title"),
      t("europe.seme.h3"),
      t.rich("europe.seme.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      seme,
    ],
    [
      t("europe.bts.title"),
      t("europe.bts.h3"),
      t.rich("europe.bts.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      bts,
    ],
    [
      t("europe.pragueLab.title"),
      t("europe.pragueLab.h3"),
      t.rich("europe.pragueLab.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      pragueLab,
    ],
    [
      t("europe.faceUk.title"),
      t("europe.faceUk.h3"),
      t.rich("europe.faceUk.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      faceUk,
    ],
    [
      t("europe.ccr.title"),
      t("europe.ccr.h3"),
      t.rich("europe.ccr.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      ccr,
    ],
    [
      t("europe.mais.title"),
      t("europe.mais.h3"),
      t.rich("europe.mais.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      mais,
    ],
    [
      t("europe.sies.title"),
      t("europe.sies.h3"),
      t.rich("europe.sies.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      sies,
    ],
    [
      t("europe.aime.title"),
      t("europe.aime.h3"),
      t.rich("europe.aime.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      aime,
    ],
    [
      t("europe.sfme.title"),
      t("europe.sfme.h3"),
      t.rich("europe.sfme.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      sfme,
    ],
    [
      t("europe.imcas.title"),
      t("europe.imcas.h3"),
      t.rich("europe.imcas.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      imcas,
    ],
    [
      t("europe.sofcep.title"),
      t("europe.sofcep.h3"),
      t.rich("europe.sofcep.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      sofcep,
    ],
  ];

  const latam: Array<[string, string, ReactNode, StaticImageData]> = [
    [
      t("latam.baas.title"),
      t("latam.baas.h3"),
      t.rich("latam.baas.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      baas,
    ],
    [
      t("latam.imcas.title"),
      t("latam.imcas.h3"),
      t.rich("latam.imcas.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      imcas,
    ],
    [
      t("latam.radla.title"),
      t("latam.radla.h3"),
      t.rich("latam.radla.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      radla,
    ],
  ];

  const middleEast: Array<[string, string, ReactNode, StaticImageData]> = [
    [
      t("middleEast.icce.title"),
      t("middleEast.icce.h3"),
      t.rich("middleEast.icce.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      icce,
    ],
    [
      t("middleEast.meidam.title"),
      t("middleEast.meidam.h3"),
      t.rich("middleEast.meidam.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      meidam,
    ],
    [
      t("middleEast.dubaiDerma.title"),
      t("middleEast.dubaiDerma.h3"),
      t.rich("middleEast.dubaiDerma.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      dubaiDerma,
    ],
    [
      t("middleEast.sharmDerma.title"),
      t("middleEast.sharmDerma.h3"),
      t.rich("middleEast.sharmDerma.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      sharmDerma,
    ],
  ];

  const asia: Array<[string, string, ReactNode, StaticImageData]> = [
    [
      t("asia.imcasAsia.title"),
      t("asia.imcasAsia.h3"),
      t.rich("asia.imcasAsia.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      imcas,
    ],
    [
      t("asia.imcasChina.title"),
      t("asia.imcasChina.h3"),
      t.rich("asia.imcasChina.content", {
        p: (chunks) => <p>{chunks}</p>,
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      imcas,
    ],
  ];

  return (
    <div>
      <section className="bg-white">
        <div className="myContainer pb-0 space-y-8 lg:space-y-12">
          <div className="text-center">
            <h2 className="h2">{t("h2")}</h2>
            <h3 className="h3 mt-2 lg:mt-4">{t("h3")}</h3>
          </div>
          <div className="flex gap-x-2 lg:gap-x-4 justify-center items-center">
            <span
              onClick={() => setState("europe")}
              className={` ${
                state === "europe" ? "text-white bg-orange" : " text-orange"
              } cursor-pointer border-orange border-solid border-[1px] px-2 py-1 font-sfPro font-light rounded-full text-sm lg:text-lg`}
            >
              Europe
            </span>
            <span
              onClick={() => setState("latam")}
              className={` ${
                state === "latam" ? "text-white bg-orange" : " text-orange"
              } cursor-pointer border-orange border-solid border-[1px] px-2 py-1 font-sfPro font-light rounded-full text-sm lg:text-lg`}
            >
              LATAM
            </span>
            <span
              onClick={() => setState("middleEast")}
              className={` ${
                state === "middleEast" ? "text-white bg-orange" : " text-orange"
              } cursor-pointer border-orange border-solid border-[1px] px-2 py-1 font-sfPro font-light rounded-full text-sm lg:text-lg`}
            >
              Middle East
            </span>
            <span
              onClick={() => setState("asia")}
              className={` ${
                state === "asia" ? "text-white bg-orange" : " text-orange"
              } cursor-pointer border-orange border-solid border-[1px] px-2 py-1 font-sfPro font-light rounded-full text-sm lg:text-lg`}
            >
              Asia
            </span>
          </div>
        </div>
      </section>

      <div className={`${state === "europe" ? "block" : "hidden"}`}>
        {europe.map((congres, index) => {
          return (
            <ContentSection
              key={"europe-" + index}
              index={index}
              title={congres[0]}
              h3={congres[1]}
              content={congres[2]}
              img={congres[3]}
              alt=""
            />
          );
        })}
      </div>

      <div className={`${state === "latam" ? "block" : "hidden"}`}>
        {latam.map((congres, index) => {
          return (
            <ContentSection
              key={"latam-" + index}
              index={index}
              title={congres[0]}
              h3={congres[1]}
              content={congres[2]}
              img={congres[3]}
              alt=""
            />
          );
        })}
      </div>

      <div className={`${state === "middleEast" ? "block" : "hidden"}`}>
        {middleEast.map((congres, index) => {
          return (
            <ContentSection
              key={"middleEast-" + index}
              index={index}
              title={congres[0]}
              h3={congres[1]}
              content={congres[2]}
              img={congres[3]}
              alt=""
            />
          );
        })}
      </div>

      <div className={`${state === "asia" ? "block" : "hidden"}`}>
        {asia.map((congres, index) => {
          return (
            <ContentSection
              key={"asia-" + index}
              index={index}
              title={congres[0]}
              h3={congres[1]}
              content={congres[2]}
              img={congres[3]}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
}
