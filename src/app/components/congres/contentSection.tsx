import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

type Props = {
  index: number;
  title: string;
  h3: string;
  content: ReactNode;
  img: StaticImageData;
  alt: string;
};

export default function ContentSection(props: Props) {
  return (
    <section className={`${props.index % 2 === 0 ? "bg-white" : "bg-bgLight"}`}>
      <div className="myContainer lg:grid lg:grid-cols-12 lg:grid-rows-1 max-lg:space-y-8">
        <div
          className={`${
            props.index % 2 === 0
              ? "lg:col-start-1 lg:col-end-7"
              : "lg:col-start-6 lg:col-end-12"
          } space-y-8 lg:space-y-12 relative grid`}
        >
          <div>
            <h2 className="h2">{props.title}</h2>
            <h3 className="h3 mt-2 lg:mt-4">{props.h3}</h3>
          </div>
          <div className="space-y-4">{props.content}</div>
        </div>
        <div
          className={`${
            props.index % 2 === 0
              ? "col-start-8 col-end-12"
              : "col-start-1 col-end-5 row-start-1"
          } grid relative`}
        >
          <Image
            src={props.img}
            alt=""
            quality={75}
            className="object-contain m-auto w-full max-w-[300px] max-h-[100px] lg:max-w-[400px] lg:max-h-[250px]"
          />
        </div>
      </div>
    </section>
  );
}
