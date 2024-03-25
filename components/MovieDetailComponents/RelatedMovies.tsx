import { MovieDetailsInterface, TVShow } from "@/lib/types";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  similarMovies: MovieDetailsInterface[] | TVShow[];
  tabValue: number | null;
};

const RelatedMovies = ({ similarMovies, tabValue }: Props) => {
  const router = useRouter();
  return (
    <div className="mt-10">
      {tabValue === null && (
        <h3 className="tracking-wide text-lg py-4 text-left">Related Movies</h3>
      )}

      <div className="overflow-x-scroll scrollbar-hide flex space-x-4">
        {similarMovies.map((movie: any) => (
          <div
            key={movie.id}
            className="relative transition duration-200 ease-in-out transform cursor-pointer group hover:scale-105"
            onClick={() =>
              movie?.first_air_date
                ? router.push(`/tv/${movie.id}`)
                : router.push(`/movie/${movie.id}`)
            }
          >
            <p className="absolute bottom-2 left-2 z-10 text-white">
              {movie.title ||
                movie.original_title ||
                movie.name ||
                movie.original_name}
            </p>
            <img
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEEnfnmg0xqqPNKc03SRlnxdBWqf7u0L6QlzySW8GjlwJzN8MJmlhA074Mfq1n2aeyrEU&usqp=CAU"
              }
              alt={
                movie.title ||
                movie.original_title ||
                movie.name ||
                movie.original_name
              }
              className={
                tabValue === null
                  ? "object-fill rounded-lg h-44 min-w-64"
                  : "object-fill rounded-lg h-72 min-w-96"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedMovies;
