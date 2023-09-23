import CardProjects from "@/components/CardProjects";
import React from "react";
import containerProjectsData from "@/constants/containerProjectsData";

const containerProjects = () => {
  return (
    <main className="w-full min-h-screen p-8  bg-slate-100  dark:bg-black-100">
      <h1 className="text-center font-extrabold text-3xl text-primary-blue-100 mb-6">Projetos Personalizados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {containerProjectsData.map((project, index) => (
          <CardProjects key={index} {...project} />
        ))}
      </div>
    </main>
  );
};

export default containerProjects;
