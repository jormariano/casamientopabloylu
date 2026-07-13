export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label: string;
  name: string;
  options: SelectOption[];
  className?: string;
}
