import { Dispatch, SetStateAction } from "react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

interface LiquidSideNavProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const LiquidSideNav = ({ isOpen, setIsOpen }: LiquidSideNavProps) => {
  return (
    <div className="fixed z-20">
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const Nav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.nav
      className="fixed left-0 right-0 top-0 bottom-0 w-screen bg-amber-300 z-50"
      animate={isOpen ? "open" : "closed"}
      variants={navVariants}
      initial="closed"
    >
      <motion.button
        className=" text-3xl bg-white text-black hover:text-rose-500 border-[1px] border-transparent hover:border-rose-500 transition-colors p-4 rounded-full relative  top-8 left-8"
        whileHover={{ rotate: "180deg" }}
        onClick={() => setIsOpen(false)}
        whileTap={{ scale: 0.9 }}
      >
        <FiX />
      </motion.button>
      <motion.div
        variants={linkWrapperVariants}
        className="flex flex-col gap-4 absolute bottom-12 left-8"
      >
        <NavLink text="Home" link="/" />
        <NavLink text="Page 1" link="/CursuriCuLorem/page-1" />
        <NavLink text="Page 2" link="/CursuriCuLorem/page-2" />
        <NavLink text="Page 3" link="/CursuriCuLorem/page-3" />
        <NavLink text="Page 4" link="/CursuriCuLorem/page-4" />
        <NavLink text="Page 5" link="/CursuriCuLorem/page-5" />
      </motion.div>
    </motion.nav>
  );
};

const NavLink = ({ text, link }: { text: string; link: string }) => {
  return (
    <motion.a
      className="inline-block z-50 text-slate-800 w-fit font-black font-mabook sm:text-5xl text-3xl hover:text-indigo-500 transition-colors pb-2"
      variants={navLinkVariants}
      transition={{
        type: "spring",
        damping: 3,
      }}
      whileHover={{
        y: -15,
        rotate: "-7.5deg",
      }}
      rel="nofollow"
      href={link}
    >
      {text}
    </motion.a>
  );
};

export default LiquidSideNav;

const navVariants = {
  open: {
    x: "0%",
    borderTopLeftRadius: "0vw",
    borderBottomLeftRadius: "0vw",
    opacity: 1,
  },
  closed: {
    x: "100%",
    borderTopLeftRadius: "50vw",
    borderBottomLeftRadius: "50vw",
    opacity: 0,
  },
};

const linkWrapperVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 },
};
