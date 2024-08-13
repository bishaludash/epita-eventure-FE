import React, { ChangeEvent } from "react";

interface IProps {
  message: string;
  color?: string;
}
const Toast: React.FC<IProps> = ({ message, color }) => {
  return (
    <div className="toast toast-top toast-center">
      <div className={`alert ${color ? color : "alert-success"} `}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
