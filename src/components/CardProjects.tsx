import Image, { StaticImageData } from "next/image";
import React from "react";

type CardProjectsProps = {
  src: StaticImageData;
  title: string;
  description: string;
};

const CardProjects = ({ src, title, description }: CardProjectsProps) => {
  const phoneNumber = "554799977116";
  const defaultMessage = "Olá, gostaria de saber mais sobre os projetos personalizados.";
  const encodedMessage = encodeURIComponent(defaultMessage);
  return (
    <div className="bg-white dark:bg-gray-900/70 rounded-lg shadow-md overflow-hidden flex flex-col justify-between flex-shrink">
      <div className="relative h-48">
        <Image src={src} fill alt="Imagem Container" className=" object-cover" />
      </div>
      <div className="p-4 gap-3 flex flex-col">
        <h3 className="text-xl font-bold text-black-100 dark:text-primary-blue-100 mb-2">{title}</h3>
        <p className="text-gray-600  dark:text-gray-400">{description}</p>
      </div>
      <div className="bg-primary-blue p-4">
        <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`} target="_blank" rel="noopener noreferrer" className="text-white">
          Saiba Mais
        </a>
      </div>
    </div>
  );
};

export default CardProjects;
