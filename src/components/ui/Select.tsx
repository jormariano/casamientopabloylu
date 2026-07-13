import { SelectProps } from '@/src/types/select.types';
import clsx from 'clsx';

const Select = ({ label, name, options, className }: SelectProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className={clsx('text-sm', 'font-medium', 'text-ink', className)}
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className={clsx(
          'rounded-lg',
          'bg-white',
          'focus:outline-1',
          'focus:outline-rust',
          'p-1',
          className,
        )}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={clsx('text-sm', 'font-medium', 'text-ink', className)}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
