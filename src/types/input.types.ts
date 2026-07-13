import { ReactNode } from 'react';
import { HTMLInputTypeAttribute } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  // name: string;
  // placeholder?: string;
  // type?: HTMLInputTypeAttribute;
  className?: string;
}
