import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Containers a sua medida</h1>

        <p className="hero__subtitle">Projetos personalizados são feitos, tais como banheiros, escritórios, casas e entre outros.</p>
        <Link href={"/"}>
          <button className="bg-primary-blue text-white rounded-full mt-10  px-6 py-4">Faça um orçamento</button>
        </Link>
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-full  xl:h-full h-[220px] z-0">
          <Image src="/containerhero1.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </section>
  );
};

export default Hero;
