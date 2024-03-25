import { Movies } from "@/lib/types";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  title: string;
  rowMovies: Movies[];
  isLargeRow?: boolean;
};

const Row = ({ title, rowMovies, isLargeRow = false }: Props) => {
  const imageSizeClass = isLargeRow ? "max-h-56" : "max-h-28";
  const imageWrapperClass = `mr-10 w-full transition-transform duration-500 ease-in-out hover:scale-105 opacity-100 cursor-pointer ${imageSizeClass}`;
  console.log("rowMovies", rowMovies);
  const router = useRouter();
  return (
    <div className="ml-5 first:mt-5">
      <h2 className="text-lg font-bold">{title}</h2>

      <div className="flex overflow-y-hidden overflow-x-scroll p-5 scrollbar-hide">
        {rowMovies?.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original/${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name ?? "Movie"}
            className={imageWrapperClass}
            onClick={() => {
              movie?.first_air_date
                ? router.push(`/tv/${movie.id}`)
                : router.push(`/movie/${movie.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
