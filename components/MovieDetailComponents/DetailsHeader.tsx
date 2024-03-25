import useFormatRuntime from "@/hooks/useFormatRuntime";
import React from "react";
import { FaStar } from "react-icons/fa6";

type Props = {
  title?: string;
  release_date?: string;
  runtime?: number;
  adult?: boolean;
  vote_average?: number;
  number_of_seasons?: number;
};

const DetailsHeader = ({
  title,
  release_date,
  runtime,
  adult,
  vote_average,
  number_of_seasons,
}: Props) => {
  const formattedRuntime = useFormatRuntime(runtime || 0);

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl tracking-wider">{title}</h1>
        <div className="text-gray-700 flex space-x-3 pt-2">
          <p>{release_date?.split("-")[0]}</p>
          <span>|</span>
          <p>{number_of_seasons ? number_of_seasons : formattedRuntime}</p>
          <span>|</span>
          <p>{adult ? "18+" : "13+"}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-2xl">{vote_average}</span>
        <FaStar className="h-6 w-6 text-yellow-500" />
      </div>
    </div>
  );
};

export default DetailsHeader;
