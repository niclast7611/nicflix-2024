import useTruncateString from "@/hooks/useTruncateString";
import React from "react";
import RelatedMovies from "./RelatedMovies";
import { MovieDetailsInterface, TVShow } from "@/lib/types";

type Props = {
  overview?: string;
  similarMovies: MovieDetailsInterface[] | TVShow[];
};

const DetailsOverview = ({ overview, similarMovies }: Props) => {
  return (
    <div className="flex flex-col mt-10 space-y-6">
      <div className="text-lg uppercase flex space-x-10">
        <h3 className="border-b-[6px] border-red-700 text-white font-semibold pb-2">
          Overview
        </h3>
        <h3 className="text-gray-700 font-light pb-2">Trailers & More</h3>
        <h3 className="text-gray-700 font-light pb-2">More Like This</h3>
        <h3 className="text-gray-700 font-light pb-2">Details</h3>
      </div>

      <p className="leading-7 tracking-wide text-sm">
        {useTruncateString(overview || "", 300)}
      </p>

      {/* <div className="flex w-full">
            <h3 className="text-gray-700 font-light w-28">Starring</h3>
            <p className="text-white w-full pl-8">
              Director Name,Director Name, Director Name ,Director Name{" "}
            </p>
          </div>
          <div className="flex w-full">
            <h3 className="text-gray-700 font-light w-28">Created by</h3>
            <p className="text-white w-full pl-8">Director Name</p>
          </div>
          <div className="flex w-full">
            <h3 className="text-gray-700 font-light  w-28">Genre</h3>
            <p className="text-white w-full pl-8">Director Name</p>
          </div> */}
      <RelatedMovies similarMovies={similarMovies} />
    </div>
  );
};

export default DetailsOverview;
