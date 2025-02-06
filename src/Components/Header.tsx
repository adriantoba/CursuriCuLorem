import LiquidSideNav from "./NavTabs";
import ContactModal from "./ContactModal";

import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  return (
    <div className="bg-amber-300 pt-4">
      <div className="h-60 flex flex-col justify-between items-center bg-indigo-400 rounded-4xl w-[95%]  mx-auto z-5 relative overflow-hidden">
        <div className="flex justify-between items-center w-[95%] absolute sm:top-1/2 top-4 left-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 ">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpenContact(true)}
            className="md:text-2xl text-md font-mabook text-black hover:text-amber-500 transition-colors p-4 rounded-full bg-white"
          >
            Contact
          </motion.button>
          <motion.button
            whileHover={{ rotate: "180deg" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="md:text-3xl text-md text-black hover:text-amber-300 transition-colors p-4 rounded-full bg-white"
          >
            <FiMenu />
          </motion.button>
        </div>
        <ContactModal
          isOpenContact={isOpenContact}
          setIsOpenContact={setIsOpenContact}
        />
        <LiquidSideNav isOpen={isOpen} setIsOpen={setIsOpen} />
        <a href="/GermanaCuClaudiu/">
          <img
            src={`${import.meta.env.BASE_URL}/assets/images/logo.svg`}
            alt="logo"
            className="sm:h-full sm:w-full px-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-4 "
            onClick={() => window.location.reload()}
          />
        </a>
      </div>
    </div>
  );
}
