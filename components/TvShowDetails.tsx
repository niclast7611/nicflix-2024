import { TVShow } from "@/lib/types";
import React, { useState } from "react";
import DetailsHeader from "./MovieDetailComponents/DetailsHeader";
import DetailsOverview from "./MovieDetailComponents/DetailsOverview";
import Trailers from "./MovieDetailComponents/Trailers";
import RelatedMovies from "./MovieDetailComponents/RelatedMovies";
import MoreDetails from "./MovieDetailComponents/MoreDetails";

type Props = {
  tvDetails: TVShow;
  similarTvShowData: TVShow[];
};

const TvShowDetails = ({ tvDetails, similarTvShowData }: Props) => {
  const [tabValue, setTabValue] = useState(1);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-white mx-16 py-10">
      <img
        src={`https://image.tmdb.org/t/p/original/${tvDetails.poster_path}`}
        alt={tvDetails.name || tvDetails.original_name}
        className="object-cover w-80 h-[30rem] md:w-[29rem] md:h-[38rem] max-w-md"
      />
      <div className="text-center md:text-left w-full md:w-1/2 md:ml-24 flex flex-col">
        <DetailsHeader
          title={tvDetails?.name}
          adult={tvDetails?.adult}
          release_date={tvDetails?.first_air_date}
          runtime={tvDetails?.runtime}
          number_of_seasons={tvDetails?.number_of_seasons}
          vote_average={tvDetails?.vote_average}
          homepage={tvDetails?.homepage}
          tabValue={tabValue}
          setTabValue={setTabValue}
        />

        {tabValue === 1 && (
          <DetailsOverview
            overview={tvDetails?.overview}
            similarMovies={similarTvShowData}
          />
        )}
        {tabValue === 2 && <Trailers id={tvDetails?.id} type={"tv"} />}
        {tabValue === 3 && (
          <RelatedMovies
            similarMovies={similarTvShowData}
            tabValue={tabValue}
          />
        )}
        {tabValue === 4 && <MoreDetails movieDetails={tvDetails} type={"tv"} />}
      </div>
    </div>
  );
};

export default TvShowDetails;
