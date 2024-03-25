import { TVShow } from "@/lib/types";
import React from "react";
import DetailsHeader from "./MovieDetailComponents/DetailsHeader";
import DetailsOverview from "./MovieDetailComponents/DetailsOverview";

type Props = {
  tvDetails: TVShow;
  similarTvShowData: TVShow[];
};

const TvShowDetails = ({ tvDetails, similarTvShowData }: Props) => {
  console.log(tvDetails, similarTvShowData);
  return (
    <div className="flex items-center justify-center text-white mx-16 mt-10">
      <img
        src={`https://image.tmdb.org/t/p/original/${tvDetails.poster_path}`}
        alt={tvDetails.name || tvDetails.original_name}
        className="object-cover w-[29rem] h-[38rem] max-w-md"
      />
      <div className="text-left w-1/2 ml-24 flex flex-col">
        <DetailsHeader
          title={tvDetails?.name}
          adult={tvDetails?.adult}
          release_date={tvDetails?.first_air_date}
          runtime={tvDetails?.runtime}
          number_of_seasons={tvDetails?.number_of_seasons}
          vote_average={tvDetails?.vote_average}
        />

        <DetailsOverview
          overview={tvDetails?.overview}
          similarMovies={similarTvShowData}
        />
      </div>
    </div>
  );
};

export default TvShowDetails;
