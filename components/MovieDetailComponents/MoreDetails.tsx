import { MovieDetailsInterface, TVShow } from "@/lib/types";
import React, { useEffect, useState } from "react";

type Props = {
  type: string;
  movieDetails: MovieDetailsInterface | TVShow;
};

const MoreDetails = ({ type, movieDetails }: Props) => {
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    const fetchCredits = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${type}/${movieDetails.id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
        .then((res) => res.json())
        .catch((error) => console.error(error));

      setCast(res.cast?.slice(0, 11));
      setCrew(res.crew?.slice(0, 11));
    };
    fetchCredits();
  }, [movieDetails.id, type]);
  console.log(cast);
  return (
    <div>
      <p className="leading-7 tracking-wide text-sm">{movieDetails.overview}</p>
      <div className="flex w-full mt-8">
        <h3 className="text-gray-700 font-light w-28">Starring</h3>
        <p className="text-white w-full pl-8">
          {cast?.map((actor: any) => actor.name).join(", ")} ...
        </p>
      </div>
      <div className="flex w-full mt-8">
        <h3 className="text-gray-700 font-light w-28">Crew</h3>
        <p className="text-white w-full pl-8">
          {crew?.map((actor: any) => actor.name).join(", ")} ...
        </p>
      </div>
      <div className="flex w-full mt-8">
        <h3 className="text-gray-700 font-light w-28">Genre</h3>
        <p className="text-white w-full pl-8">
          {movieDetails?.genres.map((genre: any) => genre.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default MoreDetails;
