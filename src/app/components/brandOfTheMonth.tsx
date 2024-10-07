"use client";

import Image from "next/image";
import logo from "../img/Aerolase-Logo.webp";

export default function BrandOfTheMonth() {
  return (
    <div className=" bg-white py-1 fixed top-[48px] lg:top-[70px] z-50 w-full grid">
      <div className="w-[95%] lg:w-[75%] m-auto inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_img]:max-w-[200px] lg:[&_img]:max-w-[400px] animate-infinite-scroll">
          <li>
            <Image
              className="h-[18px] lg:h-[24px] object-contain"
              src={logo}
              alt=""
            />
          </li>
          <li>
            <Image
              className="h-[18px] lg:h-[24px] object-contain"
              src={logo}
              alt=""
            />
          </li>
          <li>
            <Image
              className="h-[18px] lg:h-[24px] object-contain"
              src={logo}
              alt=""
            />
          </li>
        </ul>
        <ul
          x-ref="logos"
          className="flex items-center justify-center md:justify-start [&_img]:max-w-[200px] lg:[&_img]:max-w-[400px] animate-infinite-scroll"
        >
          <li>
            <Image
              className="h-[18px] lg:h-[24px] object-contain"
              src={logo}
              alt=""
            />
          </li>
          <li>
            <Image
              className="h-[18px] lg:h-[24px] object-contain"
              src={logo}
              alt=""
            />
          </li>
          <li>
            <Image
              className="h-[18px] lg:h-[24px] object-contain"
              src={logo}
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
