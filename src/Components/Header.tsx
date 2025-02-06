import LiquidSideNav from "./NavTabs";
import ContactButton from "./ContactButton";

export default function Header() {
  return (
    <div className="bg-amber-300 pt-4">
      <div className="md:h-52 h-24 flex justify-center items-center px-4 bg-indigo-400  rounded-4xl w-[98%] mx-auto z-20 ">
        <ContactButton />
        <img
          src="src\assets\logo.svg"
          alt="logo"
          className="h-full w-full p-2"
        />
        <LiquidSideNav />
      </div>
    </div>
  );
}
