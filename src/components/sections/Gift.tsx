import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const Gift = () => {
  const classSpan = 'font-bold';
  return (
    <Container>
      <Section className="text-ink text-center pt-2">
        <SectionTitle>¿Nos queres regalar algo?</SectionTitle>
        <div>
          <p>
            CUENTA CBU:{' '}
            <span className={classSpan}>0140188803520053725776</span>{' '}
          </p>
          <p>
            Alias CBU: <span className={classSpan}>NOSCASAMOSPABLOYLU</span>
          </p>
          <p>
            Integrante: <span className={classSpan}>JUAN LUCAS, FIORUCCI</span>
          </p>
          <p>
            CUIL/CUIT: <span className={classSpan}>20-31738683-5</span>
          </p>
          <p>
            Tipo: <span className={classSpan}>Caja de Ahorro</span>
          </p>
          <p>
            Banco: <span className={classSpan}>Provincia de Buenos Aires</span>
          </p>
        </div>
      </Section>
    </Container>
  );
};

export default Gift;
