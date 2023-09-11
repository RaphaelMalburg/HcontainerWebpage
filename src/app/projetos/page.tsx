import CardProjects from "@/components/CardProjects";
import React from "react";
const fakeProjectData = [
  {
    name: "/containerhouse1.png",
    title: "Maritime Container",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
  },
  {
    name: "/containerhouse2.png",
    title: "Maritime Container",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
  },
  {
    name: "/containerhouse1.png",
    title: "Maritime Container",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
  },
  {
    name: "/containerhouse2.png",
    title: "Maritime Container",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
  },
  {
    name: "/containerhouse1.png",
    title: "Maritime Container",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
  },
  {
    name: "/containerhouse2.png",
    title: "Maritime Container",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
  },
  {
    name: "/containerhouse1.png",
    title: "Maritime Container",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
  },
  {
    name: "/containerhouse2.png",
    title: "Maritime Container",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
  },

  // Add more fake data items here...
];

const Page = () => {
  return (
    <main className="w-full min-h-screen p-8 bg-gray-100">
      <h1 className="text-center font-extrabold text-3xl text-primary-blue-100 mb-6">Projetos Personalizados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {fakeProjectData.map((project, index) => (
          <CardProjects key={index} {...project} />
        ))}
      </div>
    </main>
  );
};

export default Page;
