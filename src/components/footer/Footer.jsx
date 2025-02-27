import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLiveHelp, MdOutlineEmail, MdOutlineStar, MdSportsBasketball } from "react-icons/md";
import { BsCameraReels, BsMusicNoteBeamed, BsFileText } from "react-icons/bs";
import logo from "../../assets/footer-logo.svg";
import googlePlay from "../../assets/google-play.svg";
import appStore from "../../assets/app-store.svg";

const Footer = () => {
  return (
    <div className="mt-16 pb-5 p-3">
      <div className="container-all bg-slate-100 text-black dark:bg-[#111111] dark:text-white flex flex-wrap md:flex-nowrap items-center justify-between rounded-xl p-6 md:p-8 lg:p-12 w-full max-w-screen-xl mx-auto md:gap-4">
        <div className="p-4 text-center md:text-left flex-1 min-w-[250px] md:min-w-0">
          <img src={logo} alt="Logo" className="w-12 sm:w-14 md:w-16 mb-6 mx-auto md:mx-0" />
          <div className="flex flex-col gap-3 items-center md:items-start">
            <img src={googlePlay} alt="Google Play" className="w-28 sm:w-32 md:w-36 cursor-pointer" />
            <img src={appStore} alt="App Store" className="w-28 sm:w-32 md:w-36 cursor-pointer" />
          </div>
        </div>

        <div className="p-4 text-center md:text-left flex-1 min-w-[250px] md:min-w-0">
          <h3 className="text-base sm:text-lg font-semibold mb-4">О нас</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="flex items-center gap-2 justify-center md:justify-start cursor-pointer hover:text-red-500">
              <BsFileText className="text-[#C61F1F]" /> Публичная оферта
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start cursor-pointer hover:text-red-500">
              <MdOutlineStar className="text-red-500" /> Реклама
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start cursor-pointer hover:text-red-500">
              <MdOutlineLiveHelp className="text-[#C61F1F]" /> F.A.Q
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start cursor-pointer hover:text-red-500">
              <MdOutlineEmail className="text-[#C61F1F]" /> Контакты
            </li>
          </ul>
        </div>

        <div className="p-4 text-center md:text-left flex-1 min-w-[250px] md:min-w-0">
          <h3 className="text-base sm:text-lg font-semibold mb-4">Категории</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="flex items-center gap-2 justify-center md:justify-start cursor-pointer hover:text-red-500">
              <BsCameraReels className="text-[#C61F1F]" /> Кино
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start cursor-pointer hover:text-red-500">
              <BsMusicNoteBeamed className="text-[#C61F1F]" /> Театр
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start cursor-pointer hover:text-red-500">
              <BsMusicNoteBeamed className="text-[#C61F1F]" /> Концерты
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start cursor-pointer hover:text-red-500">
              <MdSportsBasketball className="text-[#C61F1F]" /> Спорт
            </li>
          </ul>
        </div>

        <div className="p-4 text-center md:text-left flex-1 min-w-[250px] md:min-w-0">
          <h3 className="text-base sm:text-lg font-semibold mb-4">Связаться с нами</h3>
          <p className="flex items-center gap-2 justify-center md:justify-start text-red-500 text-sm sm:text-base md:text-lg">
            <FiPhone /> +998 (95) 897-33-38
          </p>
          <h3 className="text-base sm:text-lg font-semibold mt-6 mb-4">Социальные сети</h3>
          <div className="flex gap-4 text-lg sm:text-xl md:text-2xl justify-center md:justify-start">
            <FaInstagram className="cursor-pointer hover:text-red-500" />
            <FaFacebookF className="cursor-pointer hover:text-red-500" />
            <FaYoutube className="cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;