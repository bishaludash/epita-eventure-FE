import React, { ChangeEvent } from "react";

interface IProps {
  label: string;
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
const TextInput: React.FC<IProps> = ({
  label,
  name,
  value,
  onChange,
  disabled,
}) => {
  return (
    <label className="input input-bordered flex items-center gap-2 my-4 ">
      <span className=" text-white ">{label}</span>
      <span className="mr-2">:</span>
      <input
        type="text"
        value={value}
        name={name}
        className="grow text-white"
        onChange={(e) => onChange(e)}
        disabled={disabled}
      />
    </label>
  );
};

export default TextInput;
