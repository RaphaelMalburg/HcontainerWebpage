import About from "./components/About";
import ContainerTypes from "./components/ContainerTypes";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ContainerTypes />
      <About />
    </main>
  );
}
