import React from "react";
import CardContainer from "./CardContainer";

const ContainerTypes = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-8 ">
      <CardContainer description="Unidade padrão sem modificações, usada em obras, depósitos, armazenamento temporário e segurança." title="Dry" src="/box.svg" />

      <CardContainer description="Com isolamento térmico é ideal para armazenamento de produtos sensíveis, câmaras frias e depósitos em geral." title="Reefer" src="/ice.svg" />

      <CardContainer
        description="Focado para diversos projetos e negócios, oferecendo soluções sustentáveis, flexíveis e econômicas de alta qualidade."
        title="Personalizado"
        src="/pencil.svg"
      />
    </div>
  );
};

export default ContainerTypes;
