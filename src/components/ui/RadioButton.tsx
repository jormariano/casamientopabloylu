'use client';

import clsx from 'clsx';
import { RadioGroupProps } from '@/src/types/radioButton.types';
import { useState } from 'react';

const RadioButton = ({
  label,
  name,
  options,
  className,
  layout,
  variant,
  onValueChange,
  ...props
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState('');
  const classRadio =
    'h-4 w-4 appearance-none rounded-full border-2 border-rust cursor-pointer transition-all checked:bg-rust checked:border-rust';
  const classButton =
    'w-3xs flex items-center justify-center rounded-sm border border-rust px-6 py-3 transition-all duration-200 peer-checked:bg-rust peer-checked:text-cream hover:bg-rust/10';

  return (
    <div className={clsx('flex flex-col gap-3', className)}>
      <p className="text-sm font-medium ">{label}</p>
      <div
        className={clsx(
          'gap-3',
          layout === 'grid'
            ? 'grid grid-cols-2'
            : 'flex flex-col items-center md:flex-row md:mt-2',
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
              onChange={() => {
                setSelectedValue(option.value);
                onValueChange?.(option.value);
              }}
              className={clsx(
                variant === 'button' ? 'peer sr-only' : classRadio,
              )}
              {...props}
            />

            {variant === 'button' ? (
              <span className={classButton}>{option.label}</span>
            ) : (
              <span>{option.label}</span>
            )}
          </label>
        ))}

        {variant === 'radio' && selectedValue === 'otra' && (
          <input
            name={`otraRestriccion${name?.replace('foodRestriction', '') ?? ''}`}
            placeholder="¿Cuál?"
            required
            className="w-full rounded-lg border border-olive/20 bg-white px-4 py-2 placeholder:text-gray-400 focus:border-rust focus:outline-none focus:ring-2 focus:ring-rust/20 transition-all duration-200 text-1xl text-ink"
          />
        )}
      </div>
    </div>
  );
};

export default RadioButton;
