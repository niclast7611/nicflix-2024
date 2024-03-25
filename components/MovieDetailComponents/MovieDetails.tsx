import { MovieDetailsInterface } from "@/lib/types";
import React from "react";
import DetailsHeader from "./DetailsHeader";
import DetailsOverview from "./DetailsOverview";

type Props = {
  movieDetails: MovieDetailsInterface;
  similarMovies: MovieDetailsInterface[];
};

const MovieDetails = ({ movieDetails, similarMovies }: Props) => {
  console.log(movieDetails, similarMovies);
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
        />

        <DetailsOverview
          overview={movieDetails?.overview}
          similarMovies={similarMovies}
        />
      </div>
    </div>
  );
};

export default MovieDetails;
