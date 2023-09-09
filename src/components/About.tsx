import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full h-fit pt-10 relative padding-x grid md:grid-cols-5  justify-center items-end padding-x ">
      <Image
        width={780}
        height={280}
        src={"/containerhouse2.png"}
        alt="container image"
        className="md:absolute relative md:top-0 md:left-0 md:col-span-3 lg:col-span-2 md:col-start-1 xl:col-start-2 h-full"
      />{" "}
      <div className="bg-primary-blue text-primary-blue-100 p-8 md:-translate-x-14 md:col-start-4 md:w-[350px] w-full rounded-md ">
        <h1 className="text-4xl font-bold">Sobre nós</h1>
        <p className="text-md mt-5">
          A <span className=" font-extrabold">HContainers</span> é uma empresa que atua no ramo de containers marítimos, com o objetivo de oferecer soluções para o mercado de
          construção civil, comércio e indústria.
          <br />
          <br />
          Nossa empresa conta com uma equipe de profissionais capacitados para atender as necessidades dos nossos clientes, com qualidade e agilidade.
        </p>
      </div>
    </section>
  );
};

export default About;
