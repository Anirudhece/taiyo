import React from "react";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
function ChartsAndMaps() {
  const { data, status, isFetching } = useQuery(["graphDisease"], async () => {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return response.json();
  });

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error fetching data</p>;
  }
  console.log("data", data);
  const transformedData = Object.keys(data.cases).map((date) => ({
    date,
    cases: data.cases[date],
    deaths: data.deaths[date], // Make sure 'deaths' and 'recovered' are properties in your API response
    recovered: data.recovered[date],
  }));
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <LineChart width={900} height={400} data={transformedData}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cases" stroke="blue" strokeWidth={3} />
          <Line type="monotone" dataKey="deaths" stroke="red" strokeWidth={3} />
          <Line type="monotone" dataKey="recovered" stroke="orange" strokeWidth={3}/>
        </LineChart>
      </Box>
      <Box></Box>
    </>
  );
}

export default ChartsAndMaps;
