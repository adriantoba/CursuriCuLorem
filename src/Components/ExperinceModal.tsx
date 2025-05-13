import { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";
import { FiXCircle } from "react-icons/fi";

interface ExperienceModalProps {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  modalSize?: "sm" | "lg";
}

export default function ExperienceModal({
  modalSize = "lg",
  isOpenModal,
  setIsOpenModal,
}: ExperienceModalProps) {
  return (
    <div className="flex items-center text-white">
      <AnimatePresence>
        {isOpenModal && (
          <div
            onClick={() => setIsOpenModal(false)}
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
                "relative w-3xl  cursor-default overflow-hidden rounded-xl bg-amber-300 p-4 text-white shadow-2xl border-4 border-black",
                {
                  "max-w-sm": modalSize === "sm",
                }
              )}
            >
              <motion.button
                whileHover={{ rotate: "180deg" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpenModal(false)}
                className="rounded-full font-bold text-white transition-colors hover:text-red-600 sm:text-5xl text-4xl absolute top-2 left-2"
              >
                <FiXCircle className="drop-shadow-lg" />
              </motion.button>
              <div className="flex flex-col gap-3">
                <h3
                  className={cn(
                    "text-center md:text-6xl text-3xl text-black font-bold drop-shadow-3xl py-3 sm:py-8",
                    {
                      "text-2xl": modalSize === "sm",
                    }
                  )}
                >
                  Experienta Mea
                </h3>
                <p className="mb-1 text-center md:text-xl  text-black font-semibold drop-shadow-lg ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  dolor cum eaque blanditiis similique officia? Praesentium ea
                  eius, debitis voluptate qui laudantium odit, maiores vitae
                  nisi facere repellendus itaque voluptas.
                </p>
                <p className="mb-1 text-center md:text-xl  text-black font-semibold drop-shadow-lg ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  dolor cum eaque blanditiis similique officia? Praesentium ea
                  eius, debitis voluptate qui laudantium odit, maiores vitae
                  nisi facere repellendus itaque voluptas.
                </p>
                <p className="mb-1 text-center md:text-xl  text-black font-semibold drop-shadow-lg ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  dolor cum eaque blanditiis similique officia? Praesentium ea
                  eius, debitis voluptate qui laudantium odit, maiores vitae
                  nisi facere repellendus itaque voluptas.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
