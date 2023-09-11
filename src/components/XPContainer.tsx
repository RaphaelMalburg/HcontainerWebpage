import React from "react";
import XPCard from "./XPCard";
import Link from "next/link";

const XPContainer = () => {
  return (
    <section className="relative grid md:grid-cols-3 w-full padding-x mt-20">
      <div className="relative grid md:grid-cols-2 md:col-span-2  padding-x gap-4 md:gap-0">
        <div className=" md:col-span-2">
          <XPCard amount={"108"} description="Projetos Entregues" src="./file.svg" styles="-top-9 -left-9 z-index-10" />
        </div>
        <div className=" md:col-start-2 md:-translate-x-10 md:-translate-y-10">
          <XPCard amount={"84"} description="Clientes Satisfeitos" src="./hands.svg" styles="-top-9 -right-9" />
        </div>
        <div className=" md:col-start-1 md:translate-x-10 md:-translate-y-14">
          <XPCard amount={"18"} description="Anos de experiência" src="./map.svg" styles="-bottom-9 -left-10 " />
        </div>
      </div>
      <div className="padding-x grid py-20 gap-4">
        <h1 className=" font-extrabold text-4xl text-primary-blue">+18 Anos de Experiência</h1>
        <h4 className="dark:text-primary-blue-100 ">Realizamos seu projeto com o melhor acabamento e materiais. Entregamos para todo o Brasil.</h4>
        <Link href={"/"}>
          <button className="bg-primary-blue text-primary-blue-100 rounded-md mt-10  px-6 py-4">Contato</button>
        </Link>
      </div>
    </section>
  );
};

export default XPContainer;
