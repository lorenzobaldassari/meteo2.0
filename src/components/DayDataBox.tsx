import { Grid, Stack, ThemeProvider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { list } from "../interfaces/meteoData";
import { SECONDARY, THIRD } from "../constant/color";
import { dayDataBoxTypoTheme } from "../constant/theme";

interface props {
  elem: list;
  index: number;
}

export default function DayDataBox({ elem, index }: props) {
  let [bgcolor, setBgColor] = useState<string>("");
  const [preipitazioni, setPrecipitazioni] = useState<string>("");

  const handleColor = () => {
    if (index % 2 === 0) {
      setBgColor(SECONDARY);
    } else {
      setBgColor(SECONDARY);
    }
    if (elem.rain) {
      if (elem.rain["3h"] <= 2) {
        setPrecipitazioni("minime");
      } else if (2 < elem.rain["3h"] && elem.rain["3h"] >= 4) {
        setPrecipitazioni("moderate");
      } else if (4 < elem.rain["3h"] && elem.rain["3h"] >= 8) {
        setPrecipitazioni("Abbondanti");
      } else if (elem.rain["3h"] > 8) {
        setPrecipitazioni("uragano scappate!");
      }
    }
  };

  useEffect(() => {
    handleColor();
  }, []);
  return (
    <ThemeProvider theme={dayDataBoxTypoTheme}>
      <Grid
        container
        px={1}
        // bgcolor={bgcolor}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={3}>
          <Typography>{elem.main.temp}°</Typography>
        </Grid>
        <Grid item xs={3} flexDirection={"row"} justifyContent={"start"}>
          <Typography mx={2}>{new Date(elem.dt_txt).getHours()}:00</Typography>
        </Grid>
        <Grid item xs={3}>
          <Stack flexDirection={"column"} alignItems={"center"}>
            <img
              width={50}
              src={`http://openweathermap.org/img/w/${elem.weather[0].icon}.png`}
              alt="imagine del meteo"
            />
            {elem.rain && (
              <Typography sx={{ fontSize: "0.7em" }}>
                {preipitazioni} {elem.rain["3h"]}mm
              </Typography>
            )}
          </Stack>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <Stack
            flexDirection={"column"}
            alignItems={"start"}
            justifyContent={"start"}
          >
            <Typography>{elem.main.humidity}%</Typography>
            <Typography>{elem.wind.speed}Km/h</Typography>
            <Typography>{}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
