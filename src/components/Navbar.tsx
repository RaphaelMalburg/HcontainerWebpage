"use client";
import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import { useState } from "react";
import useColorMode from "@/hooks/useColorMode";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkOn, setDarkOn] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toogleDark = () => {
    setDarkOn(!darkOn);
  };
  const [colorMode, setColorMode] = useColorMode();
  return (
    <header className="w-full  absolute z-10 ">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center  sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center ">
          <Image src="/logoname1.png" alt="logo" width={198} height={40} className="object-contain " />
        </Link>
        <ul
          className={`md:items-center w-full absolute top-0 md:static ${
            menuOpen ? "block text-dark-100 text-2xl" : "hidden"
          }  space-y-20 md:space-y-0 md:flex md:space-x-36  md:bg-transparent font-bold bg-primary-blue/70 text-md text-center  dark:text-primary-blue-100 lg:text-lg right-0  md:w-auto grid lg:gap-4  gap- place-content-center tracking-wider md:h-fit h-screen col-start-3  col-span-3 z-40 letter-shadow[&_li]:px-2`}
          onClick={toggleMenu}>
          <li className="hover:border-b-2 border-black dark:border-primary-blue-100">
            <Link href={"#sobre"} className="text-shadow">
              Sobre
            </Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link href={"/projetos"} className="text-shadow ">
              Projetos
            </Link>
          </li>
          <li>
            <button className="text-primary-blue rounded-full bg-primary-blue-100 dark:bg-dark-100 min-w-[130px] shadow-lg px-6 py-2">Contato</button>
          </li>
        </ul>
        <div className="md:hidden mr-3 md:mr-0 col-start-6 col-span-1 order-1 md:order-none">
          <button onClick={toggleMenu}>
            <FiMenu className="w-10 h-10 text-gray-700" />
          </button>
        </div>
        <div className="absolute md:top-14 right-10 top-[110px]">
          <button onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}>
            {colorMode == "dark" ? <BsFillMoonFill className="w-10 h-10 text-gray-700" /> : <BsFillSunFill className="w-10 h-10 text-gray-200" />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
