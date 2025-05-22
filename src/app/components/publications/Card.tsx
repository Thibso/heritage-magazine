import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { useTranslations } from "use-intl";

type Props = {
  image: string;
  alt: string;
  h2: string;
  h3: string;
  tags: string[];
  linkTo: string;
  linkText: string;
};

const Card = forwardRef<HTMLDivElement, Props>(
  ({ image, alt, h2, h3, tags, linkTo }, ref) => {
    const t = useTranslations("Articles_base");
    const ta = useTranslations("Articles");

    return (
      <Link href={t(linkTo)}>
        <article
          ref={ref}
          className="group relative card aspect-[12/16] w-auto h-[70vh] grid grid-rows-10  bg-white"
        >
          <div className="flex justify-center items-center gap-4 border border-mainBlue/50 border-b-0">
            {tags.map((tag, index) => {
              return (
                <span
                  key={"tag-" + index}
                  className={
                    "text-orange border-orange bg-white border-solid border-[1px] px-2 py-1 font-sfPro font-light rounded-full text-[12px] lg:text-base"
                  }
                >
                  {ta(tag)}
                </span>
              );
            })}
          </div>
          <div className="row-span-7 publication_card flex flex-col justify-end z-[1] relative p-4 border border-t-0 border-mainBlue/50">
            <Image
              src={image}
              alt={alt}
              title={alt}
              fill
              className="absolute w-full h-full -z-[2] object-cover object-top"
            />

            {/* author */}
            <h3 className="font-sfPro font-normal text-sm lg:text-xl uppercase text-center text-white">
              {t(h3)}
            </h3>
          </div>

          <div className="row-span-2 p-8 grid items-center border border-t-0 border-orange">
            <h2 className="font-sfPro font-bold text-2xl lg:text-2xl text-center">
              {t(h2)}
            </h2>
          </div>
        </article>
      </Link>
    );
  }
);

Card.displayName = "Card";

export default Card;
