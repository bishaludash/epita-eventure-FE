import React, {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
} from "react";

interface IProps {
  onSubmit: () => void;
  text?: string;
}

const SubmitButton: React.FC<IProps> = ({ onSubmit, text }) => {
  return (
    <div className=" btn my-4" onClick={onSubmit}>
      {text ? text : "Submit"}
    </div>
  );
};

export default SubmitButton;
