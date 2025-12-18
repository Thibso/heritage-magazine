"use client";

// import Image from "next/image";
// import logo from "../img/vivacy-logo-official.webp";

export default function BrandOfTheMonth() {
  return (
    // <div className="bg-white pt-2 pb-1 fixed top-[56px] lg:top-[70px] z-50 w-full grid">
    //   <div className="w-[95%] lg:w-[75%] m-auto inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
    //     <ul className="flex items-center justify-center md:justify-start [&_img]:max-w-[200px] lg:[&_img]:max-w-[400px] animate-infinite-scroll">
    //       <li>
    //         <Image
    //           className="h-[18px] lg:h-[24px] object-contain"
    //           src={logo}
    //           alt=""
    //           quality={100}
    //         />
    //       </li>
    //       <li>
    //         <Image
    //           className="h-[18px] lg:h-[24px] object-contain"
    //           src={logo}
    //           alt=""
    //           quality={100}
    //         />
    //       </li>
    //       <li>
    //         <Image
    //           className="h-[18px] lg:h-[24px] object-contain"
    //           src={logo}
    //           alt=""
    //           quality={100}
    //         />
    //       </li>
    //     </ul>
    //     <ul
    //       x-ref="logos"
    //       className="flex items-center justify-center md:justify-start [&_img]:max-w-[200px] lg:[&_img]:max-w-[400px] animate-infinite-scroll"
    //     >
    //       <li>
    //         <Image
    //           className="h-[18px] lg:h-[24px] object-contain"
    //           src={logo}
    //           alt=""
    //           quality={100}
    //         />
    //       </li>
    //       <li>
    //         <Image
    //           className="h-[18px] lg:h-[24px] object-contain"
    //           src={logo}
    //           alt=""
    //           quality={100}
    //         />
    //       </li>
    //       <li>
    //         <Image
    //           className="h-[18px] lg:h-[24px] object-contain"
    //           src={logo}
    //           alt=""
    //           quality={100}
    //         />
    //       </li>
    //     </ul>
    //   </div>
    // </div>

    <div className="bg-white pt-2 pb-1 fixed top-[56px] lg:top-[70px] z-50 w-full grid">
      <div className="w-[90%] lg:w-[75%] m-auto overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex flex-nowrap w-[200vw] brand-animate">
          <ul className="flex items-center justify-around w-[100vw] gap-8">
            <li className="text-sm font-sfPro">IMCAS 2026 new edition</li>
            <li className="max-lg:hidden text-sm font-sfPro">
              IMCAS 2026 new edition
            </li>
            <li className="max-lg:hidden text-sm font-sfPro">
              IMCAS 2026 new edition
            </li>
          </ul>
          <ul
            x-ref="logos"
            className="flex items-center justify-around w-[100vw] gap-8"
          >
            <li className="text-sm font-sfPro">IMCAS 2026 new edition</li>
            <li className="max-lg:hidden text-sm font-sfPro">
              IMCAS 2026 new edition
            </li>
            <li className="max-lg:hidden text-sm font-sfPro">
              IMCAS 2026 new edition
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
