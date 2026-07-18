import { InputProps } from '@/src/types/input.types';
import clsx from 'clsx';

const Input = ({ label, className, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 mb-2.5">
      <label
        htmlFor={props.name}
        className={clsx('text-sm', 'font-medium', 'text-ink', className)}
      >
        {label}
      </label>
      <input
        {...props}
        className={clsx(
          'rounded-lg',
          'bg-white',
          'focus:outline-1',
          'focus:outline-rust',
          'p-1',
          className,
        )}
      />
    </div>
  );
};

export default Input;
