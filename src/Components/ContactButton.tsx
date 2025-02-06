import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";
import { FiXCircle } from "react-icons/fi";
import {
  FaWhatsapp,
  FaPhone,
  FaMapMarked,
  FaFacebook,
  FaAt,
} from "react-icons/fa";

export default function ContactButton({
  modalSize = "lg",
}: {
  modalSize?: "sm" | "lg";
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center text-white">
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="md:text-2xl text-md font-mabook text-black hover:text-amber-500 transition-colors p-4 rounded-full bg-white"
      >
        Contact
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur font-mabook"
          >
            <motion.div
              initial={{ scale: 0, rotate: "180deg" }}
              animate={{
                scale: 1,
                rotate: "0deg",
                transition: {
                  type: "spring",
                  bounce: 0.25,
                },
              }}
              exit={{ scale: 0, rotate: "180deg" }}
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "relative w-3xl  cursor-default overflow-hidden rounded-xl bg-amber-300 p-6 text-white shadow-2xl",
                {
                  "max-w-sm": modalSize === "sm",
                }
              )}
            >
              <motion.button
                whileHover={{ rotate: "180deg" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="rounded-full font-bold text-white transition-colors hover:text-red-600 text-5xl absolute top-2 left-2"
              >
                <FiXCircle className="drop-shadow-lg" />
              </motion.button>
              <div className="flex flex-col gap-3">
                <h3
                  className={cn(
                    "text-center text-6xl text-black font-bold drop-shadow-3xl",
                    {
                      "text-2xl": modalSize === "sm",
                    }
                  )}
                >
                  Contact
                </h3>
                <p className="mb-1 text-center text-3xl text-black font-semibold drop-shadow-lg ">
                  Pentru mai multe detalii si programari ma puteti contacta prin
                  telefon sau Whatsapp
                </p>
                <div className="flex justify-center gap-6 pt-3 ">
                  <motion.button
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => console.log("call")}
                    className="rounded-2xl p-2 bg-sky-500 font-bold text-white-800 transition-colors  text-3xl"
                  >
                    <FaPhone className="md:text-5xl drop-shadow-md" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => console.log("call")}
                    className="rounded-2xl p-2 bg-green-500 font-bold text-white-800 transition-colors  text-3xl"
                  >
                    <FaWhatsapp className="md:text-5xl drop-shadow-md" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => console.log("call")}
                    className="rounded-2xl p-2 bg-blue-600 font-bold text-white-800 transition-colors  text-3xl"
                  >
                    <FaFacebook className="md:text-5xl drop-shadow-md" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => console.log("call")}
                    className="rounded-2xl p-2 bg-zinc-600 font-bold text-white-800 transition-colors  text-3xl"
                  >
                    <FaAt className="md:text-5xl drop-shadow-md" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => console.log("call")}
                    className="rounded-2xl p-2 bg-rose-400 font-bold text-white-800 transition-colors  text-3xl"
                  >
                    <FaMapMarked className="md:text-5xl drop-shadow-md" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
