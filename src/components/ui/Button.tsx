// usar para: Confirmar, Ver ubicación, Agendar en Google Calendar, Compartir
import { ButtonProps } from '@/src/types/button.types';

const Button = ({
  label,
  className,
  onClick,
  type = 'button',
}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
