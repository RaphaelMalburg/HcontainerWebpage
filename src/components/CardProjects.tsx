import Image from "next/image";
import React from "react";

type CardProjectsProps = {
  name: string;
  title: string;
  description: string;
};

const CardProjects = ({ name, title, description }: CardProjectsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between flex-shrink">
      <div className="relative">
        <Image src={name} width={200} height={80} alt="Imagem Container" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-primary-blue-100 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="bg-primary-blue p-4">
        <p className="text-white">Project Details</p>
      </div>
    </div>
  );
};

export default CardProjects;
