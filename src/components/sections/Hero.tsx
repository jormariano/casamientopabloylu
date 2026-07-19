import Image from 'next/image';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const Hero = () => {
  return (
    <Container className="bg-cream bg-grain">
      <Section>
        <h1 className="text-ink max-w-xs text-3xl md:text-4xl font-semibold leading-10 tracking-tight ">
          NOS CASAMOS
        </h1>
        <SectionTitle className="text-ink mb-2">Lucas y Pablo</SectionTitle>

        <Image
          src="/lucasypablo.jpeg"
          width={300}
          height={260}
          loading="eager"
          alt="Lucas y Pablo"
          className="w-full h-auto object-cover"
        />
      </Section>
    </Container>
  );
};

export default Hero;
