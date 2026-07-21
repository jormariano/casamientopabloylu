import { InputHTMLAttributes } from 'react';
import { SelectOption } from './select.types';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  type?: 'button' | 'submit';
}
