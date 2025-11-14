"use client";

import { motion } from "motion/react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SliderVideos() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // VIDEOS URLS ARRAY
  const videos = [
    "/interviews/hydrafacial.mp4",
    "/interviews/benjamin-ascher.mp4",
    "/interviews/jean-jacques-deutsh.mp4",
  ];

  useEffect(() => {
    videoRefs.current.forEach((vid) => {
      if (!vid) return;
      // Exemple : démarre chaque vidéo à 1s
      vid.currentTime = 1.8;
    });
  }, []);

  const handleVideoClick = (index: number, lunchNext: boolean) => {
    console.log("index : " + index);
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === index) {
        if (lunchNext) {
          vid.play();
        }
      } else {
        vid.pause();
      }
    });
  };

  return (
    // BIG CONTAINER
    <div className="relative w-full z-[1] py-24">
      {/* DEBUG */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-2 bg-[rgb(220,38,38)] z-[99]"></div> */}
      {/*  */}
      {/*  */}
      {/* SLIDER */}
      <motion.div
        animate={{
          x: -15.5 - active * 34.5 + "%",
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className={"flex flex-nowrap gap-8 lg:gap-20 w-[145%] min-w-[145%]"}
      >
        {videos.map((video, index) => {
          return (
            <article
              key={"video-" + index}
              className={`${index - 1 === active ? "scale-[1.2]" : "scale-[1]"} transition-all relative z-[1]`}
              onClick={() => {
                setActive(index - 1);
                handleVideoClick(index, false);
              }}
            >
              {/* DEBUG */}
              {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-2 bg-[rgb(22,163,74)] z-[99]"></div> */}
              {/*  */}
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                className="w-full h-auto object-cover aspect-video"
                controls
              >
                <source src={video} type="video/mp4" />
              </video>
            </article>
          );
        })}
      </motion.div>

      {/* CONTROLS */}
      <button
        className="absolute left-1/2 -translate-x-[30px] lg:-translate-x-[150px] bottom-0 bg-mainBlue disabled:bg-mainBlue/70 desabled:cursor-not-allowed rounded-full p-2 z-[99]"
        disabled={active === -1}
        onClick={() => {
          setActive((current) => {
            const prev = current - 1;
            handleVideoClick(prev + 1, true);
            return prev;
          });
        }}
      >
        <ChevronLeft className="size-6 text-orange" />
      </button>
      <button
        className="absolute left-1/2 translate-x-[30px] lg:translate-x-[150px] bottom-0 bg-mainBlue disabled:bg-mainBlue/70 desabled:cursor-not-allowed rounded-full p-2 z-[99]"
        disabled={active === 1}
        onClick={() => {
          setActive((current) => {
            const next = current + 1;
            handleVideoClick(next + 1, true);
            return next;
          });
        }}
      >
        <ChevronRight className="size-6 text-orange" />
      </button>
    </div>
  );
}
