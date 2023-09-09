import Image from "next/image";
import React from "react";

type XPCardProps = {
  amount: string;
  description: string;
  styles: string;
  src: string;
};

const XPCard = ({ amount, description, styles, src }: XPCardProps) => {
  return (
    <div className=" shadow-2xl md:w-[280px] md:h-[150px] flex flex-col  justify-center p-8 gap-6 relative">
      <Image src={src} width={70} height={40} alt="hands" className={`absolute ${styles}`} />
      <h2 className=" text-5xl font-bold">+{amount}</h2>
      <p className=" border-l-4 rounded-md border-secondary-orange text-lg pl-2 text-gray-600">{description}</p>
    </div>
  );
};

export default XPCard;
