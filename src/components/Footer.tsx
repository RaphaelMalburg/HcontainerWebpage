import React from "react";
import { FormFooter } from "./FormFooter";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 padding-x  mt-10">
      <div className=" flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h2 className="font-extrabold text-lg text-primary-blue dark:text-blue-400">Telefone:</h2>{" "}
          <h4 className=" font-semibold text-black-100 dark:text-primary-blue-100 ">47 9997-7116</h4>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="font-extrabold text-lg text-primary-blue dark:text-blue-400">Email:</h2>{" "}
          <h4 className=" font-semibold text-black-100 dark:text-primary-blue-100">hernandomalburg@gmail.com</h4>
        </div>

        <Image src={"/logoname1.png"} width={160} height={50} alt="logo" />
      </div>
      <FormFooter />
    </section>
  );
};

export default Footer;
