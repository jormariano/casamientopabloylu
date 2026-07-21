import clsx from 'clsx';
import { InputProps } from '@/src/types/input.types';

const Input = ({ label, error, className, ...props }: InputProps) => {
  return (
    <div className="mb-3 flex flex-col gap-2">
      <label
        htmlFor={props.id ?? props.name}
        className="text-sm font-medium text-ink"
      >
        {label}
      </label>

      <input
        {...props}
        id={props.id ?? props.name}
        className={clsx(
          'w-full rounded-lg border border-olive/20 bg-white px-4 py-2 text-ink',
          'placeholder:text-gray-400',
          'focus:border-rust focus:outline-none focus:ring-2 focus:ring-rust/20',
          'transition-all duration-200',
          className,
        )}
      />

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
