import React, {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
} from "react";

interface IProps {
  onSubmit: () => void;
}

const SubmitButton: React.FC<IProps> = ({ onSubmit }) => {
  return (
    <div className=" btn my-4" onClick={onSubmit}>
      Submit
    </div>
  );
};

export default SubmitButton;
