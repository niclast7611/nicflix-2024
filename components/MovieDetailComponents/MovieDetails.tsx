import { MovieDetailsInterface } from "@/lib/types";
import React, { useState } from "react";
import DetailsHeader from "./DetailsHeader";
import DetailsOverview from "./DetailsOverview";
import Trailers from "./Trailers";
import RelatedMovies from "./RelatedMovies";
import MoreDetails from "./MoreDetails";

type Props = {
  movieDetails: MovieDetailsInterface;
  similarMovies: MovieDetailsInterface[];
};

const MovieDetails = ({ movieDetails, similarMovies }: Props) => {
  const [tabValue, setTabValue] = useState(1);

  return (
    <div className="flex items-center justify-center text-white mx-16 mt-10">
      <img
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdX32R9n8TFGp9dIKfy_C2lh_nJDUnRd02GZmh3Ndm0FB2FyeKicGsZbWoZuoPgiGrNAc&usqp=CAU"
        }
        alt={movieDetails.title || movieDetails.original_title}
        className="object-cover w-[29rem] h-[38rem] max-w-md"
      />
      <div className="text-left w-1/2 ml-24 flex flex-col">
        <DetailsHeader
          title={movieDetails?.title}
          adult={movieDetails?.adult}
          release_date={movieDetails?.release_date}
          runtime={movieDetails?.runtime}
          vote_average={movieDetails?.vote_average}
          homepage={movieDetails?.homepage}
          tabValue={tabValue}
          setTabValue={setTabValue}
        />

        {tabValue === 1 && (
          <DetailsOverview
            overview={movieDetails?.overview}
            similarMovies={similarMovies}
          />
        )}
        {tabValue === 2 && <Trailers id={movieDetails?.id} type={"movie"} />}
        {tabValue === 3 && (
          <RelatedMovies similarMovies={similarMovies} tabValue={tabValue} />
        )}
        {tabValue === 4 && (
          <MoreDetails movieDetails={movieDetails} type={"movie"} />
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
