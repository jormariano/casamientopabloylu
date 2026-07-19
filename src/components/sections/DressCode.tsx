import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const Gift = () => {
  const classSpan = 'font-bold';
  return (
    <Container>
      <Section className="text-ink text-center pt-2">
        <SectionTitle>Código de vestimenta:</SectionTitle>
        <div>
          <p>
            <span className={classSpan}>Casual chic</span>{' '}
          </p>
        </div>
      </Section>
    </Container>
  );
};

export default Gift;
