import Image from 'next/image';
import Container from '../ui/Container';
import Section from '../ui/Section';

const Hero = () => {
  return (
    <Container className="bg-olive">
      <Section>
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
      </Section>
    </Container>
  );
};

export default Hero;
