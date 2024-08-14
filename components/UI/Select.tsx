import { TUser } from "@/types/EventType";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IProps {
  label: string;
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  optionData: any;
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
        className="select select-bordered w-full text-white disabled:text-white capitalize"
        disabled={disabled}
        name={name}
        onChange={(e) => onChange(e)}
        value={value}
      >
        <option value="" className="text-white capitalize">
          Select Option
        </option>
        {optionData.map((item: any, key: number) => (
          <option
            key={key}
            value={item?.sub ? item.sub : item.id}
            className="text-white capitalize"
          >
            {item.nickname ? item.nickname : item?.eventName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
