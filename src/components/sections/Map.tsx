import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const Map = () => {
  return (
    <Container>
      <Section className="text-ink font-bold text-center">
        <SectionTitle>¿Cómo llego?</SectionTitle>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.9007988372705!2d-58.01832572444184!3d-34.95909497282904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2c371732a7943%3A0x4cb054e4bbb5c52d!2sLas%20Elenas%20Quinta%20%26%20Eventos!5e0!3m2!1ses-419!2sar!4v1784414230040!5m2!1ses-419!2sar"
            className="w-full aspect-video md:aspect-21/9 border-0 rounded"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </Section>
    </Container>
  );
};

export default Map;
