import {
  FaAt,
  FaFacebook,
  FaInstagram,
  FaMapMarked,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="md:h-52 h-40 bg-slate-800 font-mabook">
      <div className="flex h-full pb-4 mx-auto justify-center md:justify-center sm:mx-16 gap-52">
        <div className="flex flex-col justify-between mb-2 items-center">
          <h1 className="text-white md:text-3xl text-lg font-bold my-4">
            Contact
          </h1>
          <div className="flex flex-col items-center gap-1 text-white md:text-sm text-xs">
            <span className="flex items-center gap-2">
              <FaPhone className="text-lg" />
              <p>0722 123 456</p>
            </span>
            <span className="flex items-center gap-2">
              <FaWhatsapp className="text-lg" />
              <p>0722 123 456</p>
            </span>
            <span className="flex items-center gap-2">
              <FaAt className="text-lg" />
              <p>mail@adresa.ro</p>
            </span>
            <span className="flex items-center gap-2">
              <FaMapMarked className="text-lg" />
              <p>Adresa</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col flex-nowrap justify-between items-center">
          <h1 className="text-white md:text-3xl text-xl font-bold my-4">
            Urmareste-ne
          </h1>
          <div className="mb-10 flex flex-col justify-center items-center gap-2">
            <span className="flex items-center gap-2 text-white md:text-lg text-xs">
              <FaFacebook />
              <p>Germana cu Caludiu</p>
            </span>
            <span className="flex items-center gap-2 text-white md:text-lg text-xs">
              <FaInstagram />
              <p>germanacuclaudiu</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
