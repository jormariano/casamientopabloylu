import { SelectOption } from './select.types';

export interface CheckBoxProps {
  label: string;
  name: string;
  options: SelectOption[];
  className?: string;
}
