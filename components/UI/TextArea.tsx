import React, { ChangeEvent } from "react";

interface IProps {
  label: string;
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
}
const TextArea: React.FC<IProps> = ({ label, name, value, onChange }) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text text-white">{label}</span>
      </div>
      <textarea
        name={name}
        className="textarea textarea-bordered h-24 text-white"
        placeholder="Details"
        value={value}
        onChange={(e) => onChange(e)}
      ></textarea>
    </label>
  );
};

export default TextArea;
