import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IProps {
  label: string;
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  optionData: [];
  disabled?: boolean;
}
const Select: React.FC<IProps> = ({
  label,
  name,
  value,
  onChange,
  optionData,
  disabled,
}) => {
  return (
    <div>
      <div className="label">
        <span className="label-text text-white">{label}</span>
      </div>
      <select
        className="select select-bordered w-full text-white"
        disabled={disabled}
        name={name}
        onChange={(e) => onChange(e)}
      >
        <option disabled value={value} className="text-white">
          {label}
        </option>
        <option value="Han Solo" className="text-white">
          Han Solo
        </option>
        <option value="Greedo" className="text-white">
          Greedo
        </option>
      </select>
    </div>
  );
};

export default Select;
