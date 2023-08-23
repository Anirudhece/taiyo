import React from "react";
import { Box, Typography } from "@mui/material";
import Heading from "../../components/Heading";
import LineGraph from "./LineGraph";
import Map from "./Map";

function ChartsAndMaps() {
  return (
    <>
      <Box>
        <Heading align='center' size={"18px"} weight={"500"} value="Line graph" />
        <LineGraph />
        <br />

        <Heading align='center' size={"18px"} weight={"500"} value="Map" />
        <Map />
      </Box>
    </>
  );
}

export default ChartsAndMaps;
