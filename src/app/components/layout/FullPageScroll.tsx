"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function FullPageScroll({ children }: Props) {
  const [current, setCurrent] = useState(1);
  const [blockScroll, setBlockScroll] = useState(true);

  const handleNext = () => {
    const sections = document.querySelectorAll("section");
    if (current < sections.length - 3) {
      sections[current + 1].scrollIntoView({ behavior: "smooth" });
      setCurrent(current + 1);
    } else if (current === sections.length - 3) {
      sections[current + 1].scrollIntoView({ behavior: "smooth" });
      setCurrent(current + 1);
      setBlockScroll(false);
    }
  };

  const handlePrev = () => {
    const sections = document.querySelectorAll("section");
    if (current > 0) {
      sections[current - 1].scrollIntoView({ behavior: "smooth" });
      setCurrent(current - 1);
      setBlockScroll(true);
    }
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (blockScroll) {
        event.preventDefault();
        console.log(event);
        console.log("Scroll bloqué 🚫");
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, [blockScroll]);

  return (
    <div className="relative size-full">
      <div className="lg:h-screen w-full lg:overflow-hidden">{children}</div>

      {/* Flèche haut */}
      {current > 1 && (
        <button
          onClick={handlePrev}
          className="max-lg:hidden absolute bottom-20 right-4 bg-orange text-white p-3 rounded-full z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Flèche bas */}
      <button
        onClick={handleNext}
        className="max-lg:hidden absolute bottom-4 right-4 bg-orange text-white p-3 rounded-full z-50"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </div>
  );
}
