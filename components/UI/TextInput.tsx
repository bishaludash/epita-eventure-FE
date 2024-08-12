import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IProps {
  label: string;
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const TextInput: React.FC<IProps> = ({ label, name, value, onChange }) => {
  return (
    <label className="input input-bordered flex items-center gap-2 my-4">
      {label} <span className="mr-2">:</span>
      <input
        type="text"
        value={value}
        name={name}
        className="grow"
        onChange={(e) => onChange(e)}
      />
    </label>
  );
};

export default TextInput;
