"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Card from "./Card";

type Item = {
  image: string;
  alt: string;
  h2: string;
  h3: string;
  p: string;
  linkTo: string;
  linkText: string;
  tags: string[];
};

type Props = {
  data: Item[];
};

export default function PublicationPerEdition(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [translateValue, setTranslateValue] = useState(0);

  useEffect(() => {
    if (childRef.current) {
      const { width, height } = childRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const childCount = containerRef.current.childElementCount;
      const value = (childCount - 2) * dimensions.width + (childCount - 1) * 64;
      setTranslateValue(() => value);
    }
  }, [dimensions]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [".2 1", "1 1"],
  });

  const scroll = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 25,
  });

  const scrollX = useTransform(
    scroll,
    [0, 0.9],
    [dimensions.width + "px", "-" + translateValue + "px"]
  );

  return (
    <section ref={ref} className="relative h-[500vh] bg-white ">
      {/* edition info */}
      <div className="absolute top-[7%] left-[100px] h-[86%]">
        <span className="font-sfPro font-bold text-2xl lg:text-5xl sticky top-[50%]">
          Première édition
        </span>
      </div>
      <div className="myContainer sticky top-[15%] overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-x-16 items-center"
          style={{
            x: scrollX,
          }}
        >
          {props.data.map((article, index) => {
            return (
              <Card
                ref={childRef}
                key={"card-" + index}
                image={article.image}
                alt={article.alt}
                h2={article.h2}
                h3={article.h3}
                tags={article.tags}
                linkTo={article.linkTo}
                linkText={article.linkText}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
