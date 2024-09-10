"use client";
// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import hugo from "../img/antiage-magazine-heritage-sante-innovation.jpg";
import aerolase from "../img/article-heritage-magazine-aerolase.jpg";
import ascher from "../img/article-heritage-magazine-benjamin-ascher.jpg";
import claire from "../img/article-heritage-magazine-olivier-claire.jpg";
import julien from "../img/magazine-heritage-innovation-sante.jpg";
import barbara from "../img/pr-hersant-barbara-magazine-heritage.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Button from "./buttons/Button";

export default function SliderCards() {
  const sliders = [
    {
      img: ascher,
      alt: "Dr Ascher Benjamin - (H)ERITAGE Magazine",
      title: "Dr Benjamin Ascher",
      link: "/fr/interview-docteur-ascher-benjamin-thinkin-medical-aesthetic-injectable-summit",
    },
    {
      img: claire,
      alt: "Olivier Claire - (H)ERITAGE Magazine",
      title: "Olivier Claire",
      link: "/fr/interview-couraud-olivier-claire-histoire-marque",
    },
    {
      img: aerolase,
      alt: "Dr Adda - (H)ERITAGE Magazine",
      title: "Dr Adda",
      link: "/fr/interview-docteur-adda-jean-marc-aerolase-laser-neo-elite",
    },
    {
      img: barbara,
      alt: "Pr Hersant - (H)ERITAGE Magazine",
      title: "Pr Hersant Barbara",
      link: "/fr/interview-professeur-hersant-barbara-aime-communication-digitale-medecins",
    },
    {
      img: julien,
      alt: "Julien Vervel - (H)ERITAGE Magazine",
      title: "Julien Vervel",
      link: "/fr/dossier-vervel-julien-consultant-e-reputation-medicale",
    },
    {
      img: hugo,
      alt: "Hugo Nivault - (H)ERITAGE Magazine",
      title: "Hugo Nivault",
      link: "/fr/dossier-nivault-hugo-healthcie-preparer-projet-digital-sante",
    },
  ];

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
        {sliders.map((slide) => (
          <SwiperSlide key={slide.title}>
            <Image src={slide.img} alt={slide.alt} />
            <div className="flex justify-between mt-4">
              <h4 className="uppercase text-base lg:text-xl font-sfPro font-light">
                {slide.title}
              </h4>

              <Button link={slide.link}>Lire l&apos;article</Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
