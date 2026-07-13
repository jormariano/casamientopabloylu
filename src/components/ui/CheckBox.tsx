import { CheckBoxProps } from '@/src/types/checkBox.types';

const CheckBox = ({ label, name, options }: CheckBoxProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CheckBox;
