import SectionTitle from './ui/SectionTitle';
import { LiaCheckCircle } from 'react-icons/lia';

const ConfirmationMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-26 gap-6 md:py-40 md:gap-10">
      <LiaCheckCircle className="text-cream my-2" size={40} />
      <SectionTitle>¡Formulario enviado con éxito! </SectionTitle>
      <SectionTitle>Gracias por completarlo</SectionTitle>
    </div>
  );
};

export default ConfirmationMessage;
