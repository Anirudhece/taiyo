import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

function ChartsAndMaps() {
  const { data,status,isFeatching } = useQuery(
    ["graphDisease"],
    async () =>
      await fetch(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      ).then((response) => response.json())
  );
  console.log(data);

  return (
    <>
      <Box>
        {/* <Box>{data}</Box> */}
        <Box></Box>
      </Box>
    </>
  );
}

export default ChartsAndMaps;
