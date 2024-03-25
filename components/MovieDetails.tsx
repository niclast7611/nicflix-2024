import useFormatRuntime from "@/hooks/useFormatRuntime";
import useTruncateString from "@/hooks/useTruncateString";
import { MovieDetailsInterface } from "@/lib/types";
import { useRouter } from "next/router";
import React from "react";
import { FaStar } from "react-icons/fa6";

type Props = {
  movieDetails: MovieDetailsInterface;
  similarMovies: MovieDetailsInterface[];
};

const MovieDetails = ({ movieDetails, similarMovies }: Props) => {
  console.log("similarMovies", similarMovies);
  const router = useRouter();
  return (
    <div className="flex items-center justify-center text-white mx-16 mt-10">
      <img
        src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
        alt={movieDetails.title || movieDetails.original_title}
        className="object-cover w-[29rem] h-[38rem] max-w-md"
      />
      <div className="text-left w-1/2 ml-24 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl tracking-wider">
              {movieDetails?.title}
            </h1>
            <div className="text-gray-700 flex space-x-3 pt-2">
              <p>{movieDetails?.release_date?.split("-")[0]}</p>
              <span>|</span>
              <p>{useFormatRuntime(movieDetails?.runtime)}</p>
              <span>|</span>
              <p>{movieDetails?.adult ? "18+" : "13+"}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{movieDetails?.vote_average}</span>
            <FaStar className="h-6 w-6 text-yellow-500" />
          </div>
        </div>

        <div className="flex flex-col my-10 space-y-6">
          <div className="text-lg uppercase flex space-x-10">
            <h3 className="border-b-[6px] border-red-700 text-white font-semibold pb-2">
              Overview
            </h3>
            <h3 className="text-gray-700 font-light pb-2">Trailers & More</h3>
            <h3 className="text-gray-700 font-light pb-2">More Like This</h3>
            <h3 className="text-gray-700 font-light pb-2">Details</h3>
          </div>

          <p className="leading-7 tracking-wide text-sm">
            {useTruncateString(movieDetails?.overview || "", 300)}
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
        </div>

        <div>
          <h3 className="tracking-wide text-lg pb-2">Related Movies</h3>

          <div className="overflow-x-scroll scrollbar-hide flex space-x-4">
            {similarMovies.map((movie: any) => (
              <div
                key={movie.id}
                className="relative transition duration-200 ease-in-out transform cursor-pointer group hover:scale-105"
                onClick={() => router.push(`/${movie.id}`)}
              >
                <p className="absolute bottom-2 left-2 z-10 text-white">
                  {movie?.title}
                </p>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.title || movie.original_title}
                  className="object-fill rounded-lg h-44 min-w-64"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
