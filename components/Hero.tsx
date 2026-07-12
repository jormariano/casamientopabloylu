import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-olive text-cream p-10 w-full flex flex-1 flex-col items-center gap-2">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight ">
        NOS CASAMOS
      </h1>
      <h2 className="text-2xl">Lucas y Pablo</h2>

      <Image
        src="/ilustracion.jpeg"
        width={700}
        height={460}
        className="hidden md:block"
        alt="Ilustracion Lucas y Pablo"
      />
    </section>
  );
};

export default Hero;
