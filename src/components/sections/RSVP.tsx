import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Input from '../ui/Input';
import Select from '../ui/Select';
import CheckBox from '../ui/CheckBox';
import { foodRestrictions } from '@/src/constants/rsvp.constants';

const RSVP = () => {
  return (
    <Container>
      <Section className="bg-olive">
        <SectionTitle>Confirmá tu asistencia</SectionTitle>
        <h3 className="text-1xl text-cream text-center">
          Contanos si venís antes del 15 de octubre de 2026
        </h3>
        <form className="bg-cream rounded-lg p-4">
          <Input
            label="Nombre y apellido:"
            name="fullName"
            placeholder="Nombre y apellido"
            type="text"
            required
            autoComplete="name"
            maxLength={80}
          ></Input>
          <Select
            label="Restricción alimentaria:"
            name="foodRestriction"
            options={foodRestrictions}
          ></Select>
          <CheckBox
            label="¿Asistís?"
            name="attendance"
            options={[
              {
                value: 'yes',
                label: 'Sí',
              },
              {
                value: 'no',
                label: 'No',
              },
            ]}
          />
        </form>
      </Section>
    </Container>
  );
};

export default RSVP;
