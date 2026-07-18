import Image from 'next/image';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const Hero = () => {
  return (
    <Container className="bg-olive bg-grain h-[50vh]">
      <Section>
        <h1 className="max-w-xs text-3xl md:text-4xl font-semibold leading-10 tracking-tight ">
          NOS CASAMOS
        </h1>
        <SectionTitle className="text-cream">Lucas y Pablo</SectionTitle>
{/* 
        <Image
          src="/ilustracion.jpeg"
          width={300}
          height={260}
          loading="eager"
          alt="Lucas y Pablo"
          className="w-full h-auto object-cover"
          style={{
            maskImage:
              'radial-gradient(ellipse at center, black 55%, transparent 90%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at center, black 55%, transparent 90%)',
          }}
        />
        */}
        
      </Section>
    </Container>
  );
};

export default Hero;
