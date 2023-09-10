import About from "../components/About";
import ContainerTypes from "../components/ContainerTypes";
import Hero from "../components/Hero";
import XPContainer from "@/components/XPContainer";
import { FormHome } from "@/components/Form";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className=" overflow-x-hidden dark:bg-black-100 transition-all ease-in-out duration-300">
      <Hero />
      <ContainerTypes />
      <About />
      <XPContainer />
      <div className=" bg-gray-200/50 dark:bg-gray-900 py-10">
        <FormHome />
      </div>
      <Footer />
      <div className="w-full h-fit bg-primary-blue  text-primary-blue-100 text-center my-auto py-6">HCONTAINERS © 2023. Todos direitos reservados</div>
    </main>
  );
}
