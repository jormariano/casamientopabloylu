import { InputHTMLAttributes } from 'react';
import { SelectOption } from './select.types';

export interface RadioGroupProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'onChange'
> {
  label?: string;
  options: SelectOption[];
  className?: string;
  onValueChange?: (value: string) => void;
  layout?: 'grid' | 'flex';
  variant?: 'button' | 'radio';
}
