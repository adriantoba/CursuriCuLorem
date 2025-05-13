import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

type StatProps = {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
};

export const CountUpStats: React.FC = () => {
  return (
    <div className="bg-amber-300 ">
      <div className="max-w-3xl px-4 py-4 md:py-10 font-mabook mx-auto ">
        <div className="grid grid-cols-3 grid-flow-row grid-rows-1 place-items-center sm:gap-48">
          {/* <FaRegClock className="w-18 h-18 text-6xl bg-white text-indigo-400 p-1 rounded-full border-3 border-black" />
          <HiOutlineAcademicCap className="text-6xl  bg-white text-indigo-400 p-1 rounded-full border-3 border-black" />
          <PiStudent className="text-6xl  bg-white text-indigo-400 p-1 rounded-full border-3 border-black" /> */}

          <Stat num={22000} suffix="+" subheading="Ore predate" />
          <Stat num={375} suffix="+" subheading="Cursanti" />
          <Stat
            num={143}
            suffix=""
            subheading="Cursanti inscrisi in anul scolar actual"
          />
        </div>
      </div>
    </div>
  );
};

const Stat: React.FC<StatProps> = ({
  num,
  suffix,
  decimals = 0,
  subheading,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;
        ref.current.textContent = value.toLocaleString().split(".")[0];
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="grid grid-cols-1 grid-rows-2 place-items-center sm:py-0 ">
      <p className="mb-2 text-center text-2xl font-bold sm:text-6xl  bg-indigo-400 text-white p-2 rounded-full w-28 sm:w-60 border-4 border-black">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="sm:w-54 sm:h-18 w-24 h-18  flex items-center justify-center text-center sm:text-lg text-xs bg-white text-balck rounded-xl p-1 border-4 border-black">
        {subheading}
      </p>
    </div>
  );
};
