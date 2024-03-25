import { Video } from "@/lib/types";
import React, { useEffect, useState } from "react";

type Props = {
  id: number;
  type: string;
};

const Trailers = ({ id, type }: Props) => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
        .then((res) => res.json())
        .catch((error) => console.error(error));

      setVideos(res.results);
    };
    fetchVideos();
  }, [id, type]);

  return (
    <div className="flex overflow-x-scroll scrollbar-hide space-x-4 mt-8">
      {videos?.map(
        (video) =>
          video?.site === "YouTube" && (
            <iframe
              key={video.key}
              width="900"
              height="300"
              src={`https://www.youtube.com/embed/${video.key}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )
      )}
    </div>
  );
};

export default Trailers;
