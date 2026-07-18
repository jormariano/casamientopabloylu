import clsx from 'clsx';
import { RadioGroupProps } from '@/src/types/radioButton.types';

const RadioButton = ({
  label,
  name,
  options,
  className,
  onValueChange,
  layout = 'grid',
  ...props
}: RadioGroupProps) => {
  return (
    <div className={clsx('flex flex-col gap-3', className)}>
      <p className="text-sm font-medium">{label}</p>

      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="radio"
            className="peer sr-only"
            name={name}
            value={option.value}
            onChange={() => onValueChange?.(option.value)}
            {...props}
          />

          <span
            className="
                w-3xs
                flex
                items-center
                justify-center
                rounded-sm
                border
                border-rust
                px-6
                py-3
                transition-all
                duration-200

                peer-checked:bg-rust
                peer-checked:text-cream

                hover:bg-rust/10
            "
          >
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
