import XPCard from "@/components/XPCard";
import About from "../components/About";
import ContainerTypes from "../components/ContainerTypes";
import Hero from "../components/Hero";
import XPContainer from "@/components/XPContainer";

export default function Home() {
  return (
    <main className=" overflow-x-hidden">
      <Hero />
      <ContainerTypes />
      <About />
      <XPContainer />
    </main>
  );
}
