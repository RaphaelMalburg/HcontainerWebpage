import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full h-96 relative padding-x">
      <Image width={600} height={220} src={"/containerhouse2.png"} alt="container image" />
      <div>
        <h1 className="text-4xl font-bold">Sobre nós</h1>
        <p className="text-lg mt-5">
          A HContainers é uma empresa que atua no ramo de containers marítimos, com o objetivo de oferecer soluções para o mercado de construção civil, comércio e indústria. Nossa
          empresa conta com uma equipe de profissionais capacitados para atender as necessidades dos nossos clientes, com qualidade e agilidade.
        </p>
      </div>
    </section>
  );
};

export default About;
