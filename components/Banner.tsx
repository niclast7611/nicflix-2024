import React, { useEffect, useState, useCallback } from "react";
import useTruncateString from "@/hooks/useTruncateString";
import { NetflixOriginals } from "@/lib/types";
import Image from "next/image";

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState<NetflixOriginals | null>(null);

  const fetchNetflixOriginals = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_networks=213`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch the data");

      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setBannerMovie(data.results[randomIndex]);
    } catch (error) {
      console.error("Failed to fetch Netflix Originals:", error);
    }
  }, []);

  useEffect(() => {
    fetchNetflixOriginals();
  }, [fetchNetflixOriginals]);

  const description = bannerMovie?.overview;

  return (
    <header className="relative h-[448px] object-contain">
      <>
        <Image
          src={`https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}`}
          alt={bannerMovie?.name ?? "Banner"}
          layout="fill"
          objectFit="cover"
        />
        <div className="ml-8 absolute top-1/3">
          <h1 className="text-5xl font-bold pb-1">{bannerMovie?.name}</h1>
          <div className="px-2">
            <button className="text-white font-bold rounded-md px-8 mr-4 py-2 bg-[#333]/50 hover:bg-[#e6e6e6] hover:text-black transition duration-200 ease-in-out">
              Play
            </button>
            <button className="text-white font-bold rounded-md px-8 mr-4 py-2 bg-[#333]/50 hover:bg-[#e6e6e6] hover:text-black transition duration-200 ease-in-out">
              My List
            </button>
          </div>
          <div className="max-h-20 max-w-xl pt-4">
            <p className="leading-5 ">
              {useTruncateString(description ?? "", 200)}
            </p>
          </div>
        </div>
      </>
    </header>
  );
};

export default Banner;
