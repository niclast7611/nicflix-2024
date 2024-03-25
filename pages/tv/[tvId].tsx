import Nav from "@/components/Nav";
import TvShowDetails from "@/components/TvShowDetails";
import { TVShow } from "@/lib/types";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

type Props = {
  tvDetails: TVShow;
  similarTvShowData: TVShow[];
};

const Details = ({ tvDetails, similarTvShowData }: Props) => {
  return (
    <div className="h-screen">
      <Nav />
      <TvShowDetails
        tvDetails={tvDetails}
        similarTvShowData={similarTvShowData}
      />
    </div>
  );
};

export default Details;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const tvId = context.query.tvId;

  const tvDetails = await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.error("error:" + err));

  const similarTvShows = await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.error("error:" + err));

  const similarTvShowData = similarTvShows.results;

  return {
    props: {
      tvDetails,
      similarTvShowData,
    },
  };
};
