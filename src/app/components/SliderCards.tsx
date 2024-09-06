"use client";
// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import aerolase from "../img/article-heritage-magazine-aerolase.jpg";
import ascher from "../img/article-heritage-magazine-benjamin-ascher.jpg";
import claire from "../img/article-heritage-magazine-olivier-claire.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function SliderCards() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={100}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper cursor-pointer"
      >
        <SwiperSlide>
          <Image src={ascher} alt="" />
          <div className="flex justify-between mt-4">
            <h4 className="uppercase text-xl font-mona font-light">
              Dr Benjamin Ascher
            </h4>
            <button>Lire l&apos;article</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={claire} alt="" />
          <div className="flex justify-between mt-4">
            <h4 className="uppercase text-xl font-mona font-light">
              Olivier Claire
            </h4>
            <button>Lire l&apos;article</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={aerolase} alt="" />
          <div className="flex justify-between mt-4">
            <h4 className="uppercase text-xl font-mona font-light">Dr Adda</h4>
            <button>Lire l&apos;article</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
