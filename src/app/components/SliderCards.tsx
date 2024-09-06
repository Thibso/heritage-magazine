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
        slidesPerView={1}
        spaceBetween={25}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
        }}
        modules={[Pagination]}
        className="mySwiper cursor-pointer"
      >
        <SwiperSlide>
          <Image src={ascher} alt="Dr Ascher Benjamin - (H)ERITAGE Magazine" />
          <div className="flex justify-between mt-4">
            <h4 className="uppercase text-base lg:text-xl font-sfPro font-light">
              Dr Benjamin Ascher
            </h4>
            <button>Lire l&apos;article</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={claire} alt="Olivier Claire - (H)ERITAGE Magazine" />
          <div className="flex justify-between mt-4">
            <h4 className="uppercase text-base lg:text-xl font-sfPro font-light">
              Olivier Claire
            </h4>
            <button>Lire l&apos;article</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={aerolase} alt="Dr Adda - (H)ERITAGE Magazine" />
          <div className="flex justify-between mt-4">
            <h4 className="uppercase text-base lg:text-xl font-sfPro font-light">
              Dr Adda
            </h4>
            <button>Lire l&apos;article</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
