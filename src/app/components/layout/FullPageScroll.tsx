"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function FullPageScroll({ children }: Props) {
  const [current, setCurrent] = useState(1);

  const handleNext = () => {
    const sections = document.querySelectorAll("section");
    if (current < sections.length - 1) {
      sections[current + 1].scrollIntoView({ behavior: "smooth" });
      setCurrent(current + 1);
    }
  };

  const handlePrev = () => {
    const sections = document.querySelectorAll("section");
    if (current > 0) {
      sections[current - 1].scrollIntoView({ behavior: "smooth" });
      setCurrent(current - 1);
    }
  };

  return (
    <div className="relative size-full">
      <div className="lg:h-screen w-full lg:overflow-hidden">{children}</div>

      {/* Flèche haut */}
      {current > 1 && (
        <button
          onClick={handlePrev}
          className="max-lg:hidden absolute bottom-20 right-4 bg-mainBlue text-white p-3 rounded-full z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Flèche bas */}
      <button
        onClick={handleNext}
        className="max-lg:hidden absolute bottom-4 right-4 bg-mainBlue text-white p-3 rounded-full z-50"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </div>
  );
}
