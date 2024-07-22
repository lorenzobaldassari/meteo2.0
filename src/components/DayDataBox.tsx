import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { list } from "../interfaces/meteoData";

interface props {
  elem: list;
  index: number;
}

export default function DayDataBox({ elem, index }: props) {
  let [bgcolor, setBgColor] = useState<string>("");
  const [preipitazioni, setPrecipitazioni] = useState<string>("");

  const handleColor = () => {
    if (index % 2 === 0) {
      setBgColor("#e6ebf5");
    } else {
      setBgColor("white");
    }
    if (elem.rain["3h"]) {
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
    <Stack
      px={1}
      bgcolor={bgcolor}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <Typography>{elem.main.temp}°</Typography>
      <Typography mx={2}>{new Date(elem.dt_txt).getHours()}:00</Typography>
      <Stack flexDirection={"column"} alignItems={"center"}>
        <img
          width={75}
          src={`http://openweathermap.org/img/w/${elem.weather[0].icon}.png`}
          alt="imagine del meteo"
        />
        {elem.rain && (
          <Typography>
            {preipitazioni} {elem.rain["3h"]}mm
          </Typography>
        )}
      </Stack>
      <Stack>
        <Typography>{elem.main.humidity}%</Typography>
        <Typography>{elem.wind.speed}Km/h</Typography>
        <Typography>{}</Typography>
      </Stack>
    </Stack>
  );
}
