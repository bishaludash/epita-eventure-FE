import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IProps {
  id: number;
  label: string;
  itemDate: string | undefined;
  details: string;
  location: string;
}

const Card: React.FC<IProps> = ({ id, label, itemDate, details, location }) => {
  const formatDate = (date: string | undefined) => {
    if (date) {
      return new Date(date).toLocaleDateString();
    }
    return "";
  };
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
        <div className="w-[100%] h-12 overflow-hidden text-ellipsis">
          <p>{details}</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex">{formatDate(itemDate)}</div>
          <div className="ml-2 badge badge-outline overflow-hidden text-nowrap">
            {location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
