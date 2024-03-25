import useFormatRuntime from "@/hooks/useFormatRuntime";
import { Tab, Tabs, styled } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { FaStar } from "react-icons/fa6";

type Props = {
  title?: string;
  release_date?: string;
  runtime?: number;
  adult?: boolean;
  vote_average?: number;
  number_of_seasons?: number;
  tabValue?: number;
  setTabValue: React.Dispatch<React.SetStateAction<number>>;
  homepage?: string;
};

const DetailsHeader = ({
  title,
  release_date,
  runtime,
  adult,
  vote_average,
  number_of_seasons,
  tabValue,
  setTabValue,
  homepage,
}: Props) => {
  const router = useRouter();
  const formattedRuntime = useFormatRuntime(runtime || 0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const CustomTab = styled(Tab)(({ theme }) => ({
    textTransform: "uppercase",
    fontWeight: theme.typography.fontWeightLight,
    fontSize: theme.typography.pxToRem(18),
    color: "rgba(156, 163, 175)", // Tailwind's text-gray-700
    padding: 0,
    minWidth: "auto", // Reduces the minimum width
    marginRight: theme.spacing(4),
    paddingBottom: "7px",
    "&.Mui-selected": {
      color: "#fff", // Tailwind's text-white
      // Custom bottom border to act as the indicator
      paddingBottom: "0px",
      borderBottom: "6px solid #DF1B1C", // Tailwind's border-red-700
    },
  }));

  const CustomTabs = styled(Tabs)({
    ".MuiTabs-indicator": {
      display: "none",
    },
  });

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl tracking-wider hover:underline">
            <a href={homepage} target="_blank">
              {title}
            </a>
          </h1>
          <div className="text-gray-700 flex space-x-3 pt-2">
            <p>{release_date?.split("-")[0]}</p>
            <span>|</span>
            <p>{number_of_seasons ? number_of_seasons : formattedRuntime}</p>
            <span>|</span>
            <p>{adult ? "18+" : "13+"}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{vote_average}</span>
          <FaStar className="h-6 w-6 text-yellow-500" />
        </div>
      </div>
      <div className="mt-6">
        <CustomTabs
          value={tabValue}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <CustomTab label="Overview" value={1} />
          <CustomTab label="Trailers & More" value={2} />
          <CustomTab label="More Like This" value={3} />
          <CustomTab label="Details" value={4} />
        </CustomTabs>
      </div>
    </div>
  );
};

export default DetailsHeader;
