import React, {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
} from "react";

interface IProps {
  onSubmit: () => void;
  text?: string;
  btnStyle?: string;
}

const SubmitButton: React.FC<IProps> = ({ onSubmit, text, btnStyle }) => {
  return (
    <div className={`btn my-4 ${btnStyle ? btnStyle : ""}`} onClick={onSubmit}>
      {text ? text : "Submit"}
    </div>
  );
};

export default SubmitButton;
