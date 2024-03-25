import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import Row from "@/components/Row";
import { Movies } from "@/lib/types";
import React from "react";

type Props = {
  TrendingNow: Movies[];
  NetflixOriginals: Movies[];
  TopRated: Movies[];
  ActionMovies: Movies[];
  ComedyMovies: Movies[];
  HorrorMovies: Movies[];
  RomanceMovies: Movies[];
  Documentaries: Movies[];
};

const Home = ({
  ActionMovies,
  ComedyMovies,
  Documentaries,
  TrendingNow,
  NetflixOriginals,
  TopRated,
  HorrorMovies,
  RomanceMovies,
}: Props) => {
  return (
    <div className="text-white h-screen overflow-y-auto">
      <Nav />
      <Banner bannerResponse={NetflixOriginals} />
      <div className="flex flex-col">
        <Row
          rowMovies={NetflixOriginals}
          title="Netflix Originals"
          isLargeRow={true}
        />
        <Row rowMovies={TrendingNow} title="Trending Now" />
        <Row rowMovies={TopRated} title="Top Rated" />
        <Row rowMovies={ActionMovies} title="Action Movies" />
        <Row rowMovies={ComedyMovies} title="Comedy Movies" />
        <Row rowMovies={HorrorMovies} title="Horror Movies" />
        <Row rowMovies={RomanceMovies} title="Romance Movies" />
        <Row rowMovies={Documentaries} title="Documentaries" />
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const categories = [
    {
      name: "Trending Now",
      query: `/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
    },
    {
      name: "Netflix Originals",
      query: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_networks=213`,
    },
    {
      name: "Top Rated",
      query: `/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
    },
    {
      name: "Action Movies",
      query: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=28`,
    },
    {
      name: "Comedy Movies",
      query: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=35`,
    },
    {
      name: "Horror Movies",
      query: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=27`,
    },
    {
      name: "Romance Movies",
      query: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10749`,
    },
    {
      name: "Documentaries",
      query: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=99`,
    },
  ];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // Create fetch promises for all categories
  const fetchPromises = categories.map(({ name, query }) =>
    fetch(`${baseUrl}${query}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => ({ [name.replace(/\s+/g, "")]: data.results }))
      .catch((error) => {
        console.error(`Failed to fetch ${name}:`, error);
        return { [name.replace(/\s+/g, "")]: [] };
      })
  );

  // Await all the fetch promises
  const fetchedCategories = await Promise.all(fetchPromises);

  // // Combine all fetched categories into a single object
  const props = fetchedCategories.reduce(
    (acc, current) => ({
      ...acc,
      ...current,
    }),
    {}
  );

  return {
    props,
    revalidate: 3600, // Revalidate at most once per hour
  };
};
