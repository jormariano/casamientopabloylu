import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { CiGift } from 'react-icons/ci';
import { CopyButton } from './CopyButton';

const Gift = () => {
  const classSpan = 'font-bold';
  const classDiv = 'bg-cream text-ink p-4 rounded-md';
  return (
    <Container>
      <Section className="text-cream text-center p-6 bg-olive">
        <CiGift color="text-cream" size={40} />
        <SectionTitle className="py-3 px-6">
          ¿Nos querés hacer un regalo?
        </SectionTitle>
        <div className="grid gap-2">
          <div className={classDiv}>
            <p>CBU:</p>
            <div className="flex flex-row flex-end">
              <span className={classSpan}>0140188803520053725776</span>
              <CopyButton value="0140188803520053725776" />
            </div>
          </div>
          <div className={classDiv}>
            <p>Alias:</p>
            <div className="flex flex-row flex-end">
              <span className={classSpan}>NOSCASAMOSPABLOYLU</span>
              <CopyButton value="NOSCASAMOSPABLOYLU" />
            </div>
          </div>
          <div className={classDiv}>
            <p>Tiular:</p>
            <span className={classSpan}>JUAN LUCAS, FIORUCCI</span>
          </div>

          <div className={classDiv}>
            <p>CUIL/CUIT:</p>
            <span className={classSpan}>20-31738683-5</span>
          </div>

          <div className={classDiv}>
            <span className={classSpan}>Caja de Ahorro</span>
          </div>

          <div className={classDiv}>
            <span className={classSpan}>Banco Provincia</span>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default Gift;
