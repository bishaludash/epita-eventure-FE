import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IProps {
  id: number;
  label: string;
  itemDate: string | undefined;
  details: string;
  location: string;
}

const Card: React.FC<IProps> = ({ id, label, itemDate, details, location }) => {
  return (
    <div className="card bg-base-100 w-full shadow-md border border-gray-700 hover:cursor-pointer hover:shadow-gray-400 transition delay-75">
      <figure>
        <img src={`https://picsum.photos/id/${id}/400/200`} alt="Shoes" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">
          {label}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{location}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
