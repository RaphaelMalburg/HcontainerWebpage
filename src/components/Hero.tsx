import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const phoneNumber = "554799977116";
  const defaultMessage = "Olá, gostaria de saber mais sobre os projetos de containers.";
  const encodedMessage = encodeURIComponent(defaultMessage);
  return (
    <section className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto max-h-[800px] ">
      <div className="flex-1  padding-x">
        <h1 className="hero__title dark:text-primary-blue-100">Containers a sua medida</h1>
        <p className="hero__subtitle dark:text-primary-blue-100 pb-10">Projetos personalizados são feitos, tais como banheiros, escritórios, casas e entre outros.</p>
        <a
          href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-blue text-white rounded-full mt-10  px-6 py-4">
          Faça um orçamento
        </a>
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-full  xl:h-full h-[220px] z-0">
          <Image src="/containerhero1.png" alt="hero" fill className="object-contain max-h-[800px]" />
        </div>

        <div className="hero__image-overlay transition-all max-h-[1000px]" />
      </div>
    </section>
  );
};

export default Hero;
