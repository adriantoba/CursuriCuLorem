import { useState } from "react";
import { TiltShineCard } from "./HoverCard";
import { motion } from "framer-motion";
import ExperienceModal from "./ExperinceModal";

export const Hero = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <section className="pb-10 sm:pb-12 flex flex-col lg:flex-row justify-center items-center sm:gap-8 gap-2 bg-amber-300 font-mabook">
      <div className="relative z-2 lg:w-[35%] w-[90%] sm:my-12 my-8 rounded-2xl text-center sm:text-left border-4 p-4">
        <h1 className="text-4xl sm:text-7xl font-black leading-tight">
          Hey, sunt Lorem<span className="">!</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl leading-tight mt-4 font-light pb-3 sm:max-w-[80%] max-w-[85%] mx-auto">
          <span className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit
          </span>
          <span></span>
        </h2>
        <p className="mb-6 max-w-xl font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla
          maiores eaque at reprehenderit sed odit velit adipisci unde, a
          explicabo, cupiditate voluptate, quod exercitationem. Quisquam
          inventore rem nisi ullam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et nulla maiores eaque at reprehenderit sed odit
          velit adipisci unde, a explicabo, cupiditate voluptate, quod
          exercitationem. Quisquam inventore rem nisi ullam.
        </p>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpenModal(true)}
          className="md:text-lg  font-mabook text-black hover:text-amber-500 transition-colors p-4 rounded-full bg-white border-4"
        >
          Experienta mea
        </motion.button>
      </div>
      <div className="my-auto ">
        <TiltShineCard />
      </div>
      <ExperienceModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </section>
  );
};
