import { InputHTMLAttributes } from 'react';
import { SelectOption } from './select.types';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}
