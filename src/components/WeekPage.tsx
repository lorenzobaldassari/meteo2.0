import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { list } from "../interfaces/meteoData";
import DayBox from "./DayBox";

interface props {
  cityFrontName: string;
  fiveDaysMeteoData: list[][];
}

export default function WeekPage({ cityFrontName, fiveDaysMeteoData }: props) {
  return (
    <Paper elevation={5} sx={{ borderRadius: "8px", marginY: "5em" }}>
      <Stack>
        <Stack my={2}>
          <Typography textAlign={"center"} px={2} pb={2} variant="h5">
            Previsioni Meteo di {cityFrontName.slice(0, 1).toUpperCase()}
            {cityFrontName.slice(1)}
          </Typography>
          {fiveDaysMeteoData.map((elem: list[], i: number) => {
            return (
              <DayBox key={i} elem={elem} index={i} cityName={cityFrontName} />
            );
          })}
        </Stack>
      </Stack>
    </Paper>
  );
}
