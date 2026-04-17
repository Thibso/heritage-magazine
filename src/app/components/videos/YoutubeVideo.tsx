"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";

type Props = {
  url: string;
};

export default function YoutubeVideo(props: Props) {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { amount: 0.5 });

  return (
    <motion.div
      ref={containerRef}
      className="w-full lg:w-[70%] aspect-video mx-auto rounded-xl"
    >
      <ReactPlayer
        ref={playerRef}
        src={props.url}
        playing={isInView}
        controls={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </motion.div>
  );
}
