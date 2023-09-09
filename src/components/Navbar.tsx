"use client";
import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";

import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center ">
          <Image src="/logoname1.png" alt="logo" width={198} height={40} className="object-contain " />
        </Link>
        <ul
          className={`md:items-center w-full absolute top-0 md:static ${
            menuOpen ? "block text-white text-2xl" : "hidden"
          }  space-y-20 md:space-y-0 md:flex md:space-x-36  md:bg-transparent font-bold bg-primary-blue/70 text-md text-center  lg:text-lg right-0  md:w-auto grid lg:gap-4  gap- place-content-center tracking-wider md:h-fit h-screen col-start-3  col-span-3 z-40 letter-shadow[&_li]:px-2`}
          onClick={toggleMenu}>
          <li className="hover:border-b-2 border-black">
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
            <button className="text-primary-blue rounded-full bg-white min-w-[130px] shadow-lg px-6 py-2">Contato</button>
          </li>
        </ul>
        <div className="md:hidden mr-3 md:mr-0 col-start-6 col-span-1 order-1 md:order-none">
          <button onClick={toggleMenu}>
            <FiMenu className="w-10 h-10 text-gray-700" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
