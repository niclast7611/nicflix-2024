import MovieDetails from "@/components/MovieDetailComponents/MovieDetails";
import Nav from "@/components/Nav";
import { MovieDetailsInterface } from "@/lib/types";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

type Props = {
  movieDetails: MovieDetailsInterface;
  similarMovieData: MovieDetailsInterface[];
};

const Details = ({ movieDetails, similarMovieData }: Props) => {
  return (
    <div className="h-screen">
      <Nav />

      <MovieDetails
        movieDetails={movieDetails}
        similarMovies={similarMovieData}
      />
    </div>
  );
};

export default Details;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const movieId = context.query.movieId;

  const movieDetails = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.error("error:" + err));

  const similarMovies = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.error("error:" + err));

  const similarMovieData = similarMovies.results;

  return {
    props: {
      movieDetails,
      similarMovieData,
    },
  };
};
