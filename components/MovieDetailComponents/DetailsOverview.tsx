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
    <div className="flex flex-col space-y-6 mt-6">
      <p className="leading-7 tracking-wide text-sm">
        {useTruncateString(overview || "", 300)}
      </p>
      <RelatedMovies similarMovies={similarMovies} tabValue={null} />
    </div>
  );
};

export default DetailsOverview;
