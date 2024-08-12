import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IProps {
  label: string;
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  optionData: [];
}
const Select: React.FC<IProps> = ({
  label,
  name,
  value,
  onChange,
  optionData,
}) => {
  return (
    <select className="select select-bordered w-full ">
      <option disabled selected>
        {label}
      </option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>
  );
};

export default Select;
