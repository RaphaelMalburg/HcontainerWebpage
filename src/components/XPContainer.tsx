import React from "react";
import XPCard from "./XPCard";

const XPContainer = () => {
  return (
    <div className="relative grid w-full padding-x mt-20">
      <div className="relative grid grid-cols-2 ">
        <div className=" col-span-2">
          <XPCard amount={"108"} description="Projetos Entregues" src="./file.svg" styles="-top-9 -left-9 z-index-10" />
        </div>
        <div className=" col-start-2 -translate-x-10 -translate-y-10">
          <XPCard amount={"84"} description="Clientes Satisfeitos" src="./hands.svg" styles="-top-9 -right-9" />
        </div>
        <div className=" col-start-1 translate-x-10 -translate-y-14">
          <XPCard amount={"18"} description="Anos de experiência" src="./map.svg" styles="-bottom-9 -right-9 " />
        </div>
      </div>
    </div>
  );
};

export default XPContainer;
