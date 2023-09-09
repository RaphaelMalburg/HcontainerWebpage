import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardContainerProps = {
  title: string;
  description: string;
  src: string;
};

const CardContainer = ({ title, description, src }: CardContainerProps) => {
  return (
    <div className="flex flex-grow max-w-sm border-2 rounded-md border-grey/30 md:w-1/3 flex-col mx-2 mb-4 p-2 gap-2">
      <Image src={src} height={40} width={40} alt="dry" />
      <h2 className="font-extrabold">{title}</h2>
      <p>{description}</p>
      <Link href={"/"}>
        <button className="bg-black-100 text-white rounded-md mt-4 px-6 py-2">Saiba Mais</button>
      </Link>
    </div>
  );
};

export default CardContainer;
