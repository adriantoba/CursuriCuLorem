import { Dispatch, SetStateAction } from "react";
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

interface ContactModalProps {
  isOpenContact: boolean;
  setIsOpenContact: Dispatch<SetStateAction<boolean>>;
  modalSize?: "sm" | "lg";
}

export default function ContactModal({
  modalSize = "lg",
  isOpenContact,
  setIsOpenContact,
}: ContactModalProps) {
  return (
    <div className="flex items-center text-white ">
      <AnimatePresence>
        {isOpenContact && (
          <div
            onClick={() => setIsOpenContact(false)}
            className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur font-mabook "
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
                "relative w-3xl  cursor-default overflow-hidden rounded-xl bg-amber-300 p-4 text-white shadow-2xl border-4 border-black",
                {
                  "max-w-sm": modalSize === "sm",
                }
              )}
            >
              <motion.button
                whileHover={{ rotate: "180deg" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpenContact(false)}
                className="rounded-full font-bold text-white transition-colors hover:text-red-600 text-5xl absolute top-2 left-2"
              >
                <FiXCircle className="drop-shadow-lg" />
              </motion.button>
              <div className="flex flex-col gap-3 ">
                <h3
                  className={cn(
                    "text-center md:text-6xl text-3xl text-black font-bold drop-shadow-3xl",
                    {
                      "text-2xl": modalSize === "sm",
                    }
                  )}
                >
                  Contact
                </h3>
                <p className="mb-1 text-center md:text-3xl text-lg text-black font-semibold drop-shadow-lg ">
                  Pentru mai multe detalii si programari ma puteti contacta prin
                  telefon sau Whatsapp
                </p>
                <div className="flex justify-center md:gap-6 gap-3 pt-3 mx-auto ">
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
