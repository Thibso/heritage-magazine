"use client";

import { create } from "@/app/actions";
import { useRouter } from "next/navigation";

type Props = {
  locale: string;
};

export default function PopUpValidation(props: Props) {
  const router = useRouter();

  return (
    <section className="fixed z-[99] size-full bg-black/30 backdrop-blur">
      <div className="absolute w-[90%] lg:w-[50%] h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-mainBlue shadow-md p-8 flex flex-col gap-8 text-white">
        {props.locale === "fr" ? (
          <p className="text-center">
            Ce site internet est exclusivement destiné aux professionnels de
            santé, aux laboratoires ainsi qu&apos;aux fabricants de dispositifs
            médicaux.
            <br />
            <br /> En accédant a ce site, vous confirmez appartenir à l&apos;une
            de ses catégories et comprendre que les informations fournies sont
            spécifiquement conçues pour un public professionnel.
          </p>
        ) : (
          <p className="text-center">
            This website is intended exclusively for healthcare professionals
            and medical device manufacturers.
            <br />
            <br /> By accessing this site, you confirm that you belong to one of
            its of these categories and understand that the information provided
            is specifically intented for a professional audience.
          </p>
        )}

        <button
          onClick={async () => {
            await create();
            router.refresh();
          }}
          className="bg-orange px-12 py-2 rounded-3xl w-fit text-white font-sfPro font-medium leading-none mx-auto"
        >
          {props.locale === "fr"
            ? "Je confirme être un professionnel de santé"
            : "I confirm that I am a healthcare professional"}
        </button>
      </div>
    </section>
  );
}
