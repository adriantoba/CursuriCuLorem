import { CiWarning } from "react-icons/ci";

export default function Sommerkurse() {
  return (
    <div className="h-screen bg-amber-300 pt-8">
      <div className="mx-auto flex flex-col items-center justify-center gap-3">
        <CiWarning className="text-9xl text-white bg-red-500 rounded-full p-2" />
        <p className="sm:text-6xl text-4xl w-[50%] text-center font-mabook ">
          Ooops...Hier ist noch nichts. In Arbeit.
        </p>
      </div>
    </div>
  );
}
