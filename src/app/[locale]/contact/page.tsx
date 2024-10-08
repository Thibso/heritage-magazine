"use client";

import DoctorsForm from "@/app/components/email/doctorsForm";
import ManufacturersForm from "@/app/components/email/manufacturersForm";
import header from "@/app/img/heritage-magazine-by-healthcie.jpg";
import manufacturers from "@/app/img/strategie-digitale-laboratoires-medical-consulting.jpg";
import doctor from "@/app/img/webinaire-speaker-digital-reputation-medical.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const t = useTranslations("Contact");
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(false);

  return (
    <main>
      <section>
        <div className="px-5 py-4 max-lg:h-[500px] lg:h-screen max-h-[1200px] grid items-end relative lg:px-7 lg:py-4">
          <span className="text-white uppercase text-3xl lg:text-8xl">
            {t("h1")}
          </span>
          <Image
            src={header}
            alt=""
            className="absolute lg:fixed size-full top-0 left-0 object-cover -z-[1] opacity-85"
          />
        </div>
      </section>
      <section className="lg:grid lg:grid-cols-2 bg-mainBlue lg:h-screen lg:max-h-[1024px] overflow-hidden">
        <div className="lg:col-span-1 h-full relative px-4 py-12 lg:p-24 flex flex-col justify-center">
          <div
            className={`${
              left
                ? "opacity-30 -right-[100%] z-[9]"
                : "opacity-100 right-[0%] z-10"
            } transition-all duration-500 absolute size-full z-10 top-0 cursor-pointer`}
            onClick={() => {
              setLeft(true);
              setRight(false);
            }}
          >
            <Image
              src={doctor}
              alt=""
              className="object-cover size-full z-[1] "
            />
            <div className="z-[2] absolute size-full bg-black/30 top-0 left-0 text-center flex flex-col justify-center px-4 lg:px-10 gap-2 lg:gap-4">
              <h2 className="text-white text-3xl lg:text-6xl">
                {t("form.displayDoctors")}
              </h2>
            </div>
          </div>
          <DoctorsForm />
        </div>
        <div className="lg:col-span-1 h-full relative px-4 py-12 lg:p-24 flex flex-col justify-center max-lg:border-t-[1px] lg:border-l-[1px] border-white/20">
          <div
            className={`${
              right
                ? "opacity-30 -left-[100%] z-[9]"
                : "opacity-100 left-[0%] z-10"
            } transition-all duration-500 absolute size-full  top-0 cursor-pointer`}
            onClick={() => {
              setLeft(false);
              setRight(true);
            }}
          >
            <Image
              src={manufacturers}
              alt=""
              className="object-cover size-full z-[1] "
            />
            <div className="z-[2] absolute size-full bg-black/30 top-0 left-0 text-center flex flex-col justify-center px-4 lg:px-10 gap-2 lg:gap-4">
              <h2 className="text-white text-3xl lg:text-6xl">
                {t("form.displayManufacturers")}
              </h2>
            </div>
          </div>
          <ManufacturersForm />
        </div>
      </section>
    </main>
  );
}
