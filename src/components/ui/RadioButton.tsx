import clsx from 'clsx';
import { RadioGroupProps } from '@/src/types/radioButton.types';

const RadioButton = ({
  label,
  name,
  options,
  className,
  onValueChange,
  layout,
  variant,
  ...props
}: RadioGroupProps) => {
  return (
    <div className={clsx('flex flex-col gap-3', className)}>
      <p className="text-sm font-medium">{label}</p>
      <div
        className={clsx(
          'gap-3',
          layout === 'grid' ? 'grid grid-cols-2' : 'flex flex-col',
        )}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-1 cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              onChange={() => onValueChange?.(option.value)}
              className={clsx(
                variant === 'button'
                  ? 'peer sr-only'
                  : `
          h-4
          w-4
          appearance-none
          rounded-full
          border-2
          border-rust
          cursor-pointer
          transition-all
          checked:bg-rust
          checked:border-rust
        `,
              )}
              {...props}
            />

            {variant === 'button' ? (
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
            ) : (
              <span>{option.label}</span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;
