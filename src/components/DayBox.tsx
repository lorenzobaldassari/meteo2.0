import { Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { list } from "../interfaces/meteoData";
import { Maximize, NoEncryption } from "@mui/icons-material";
import { coldTemp, hotTemp, PRIMARY, SECONDARY } from "../constant/color";
import { Link, useNavigate } from "react-router-dom";

interface props {
  elem: list[];
  index: number;
  cityName: string;
}
export default function DayBox({ elem, index, cityName }: props) {
  let [bgcolor, setBgColor] = useState<string>("");
  let [actualDay, setactualDay] = useState<string>("Lunedì");
  const [minTemp, setMinTemp] = useState<number>(0);
  const [maxTemp, setMaxTemp] = useState<number>(0);
  const navigate = useNavigate();

  const handleColor = () => {
    if (index % 2 === 0) {
      setBgColor("#e6ebf5");
    } else {
      setBgColor(SECONDARY);
    }
  };
  const handleCurrentDay = () => {
    const day = new Date(elem[0].dt_txt);
    switch (day.getDay()) {
      case 0:
        setactualDay("Domenica");
        break;
      case 1:
        setactualDay("Lunedì");
        break;
      case 2:
        setactualDay("Martedì");
        break;
      case 3:
        setactualDay("Mercoledì");
        break;
      case 4:
        setactualDay("Giovedì");
        break;
      case 5:
        setactualDay("Venerdì");
        break;
      case 6:
        setactualDay("Sabato");
        break;
      default:
        setactualDay("lunedi");
        break;
    }
  };

  // const hnadleMaxAndMin1 = () => {
  let tempMax = elem[0].main.temp;
  let tempMin = elem[0].main.temp;
  elem.map((elem) => {
    if (tempMin > elem.main.temp) {
      tempMin = elem.main.temp;
    }
  });
  elem.map((elem) => {
    if (tempMax < elem.main.temp) {
      tempMax = elem.main.temp;
    }
  });
  // console.log("contrtollare wui", elem);
  // setMaxTemp(tempMax);
  // setMinTemp(tempMin);
  // };
  useEffect(() => {
    handleCurrentDay();
    handleColor();
    // hnadleMaxAndMin1();
  }, []);

  return (
    <Link
      style={{ textDecoration: "none", color: PRIMARY }}
      onClick={() => navigate("/")}
      to={`/daypage?param=${elem[0].dt_txt}&city=${cityName}&actualDay=${actualDay}`}
    >
      <Grid
        container
        alignItems={"center"}
        flexDirection={"row"}
        justifyContent={"end"}
        bgcolor={bgcolor}
        px={2}
        sx={{ textDecoration: "none" }}
      >
        <Grid item xs={4}>
          <Stack flexDirection={"row"} justifyContent={"start"}>
            {elem.length > 4 && (
              <img
                src={`http://openweathermap.org/img/w/${elem[5].weather[0].icon}.png`}
                alt="weather image"
                width={55}
              />
            )}
            {elem.length < 5 && (
              <img
                src={`http://openweathermap.org/img/w/${elem[0].weather[0].icon}.png`}
                alt="weather image"
                width={55}
              />
            )}
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography
            textAlign={"left"}
            px={4}
            bgcolor={bgcolor}
            sx={{ textDecoration: "none" }}
          >
            {actualDay}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Stack justifyContent={"end"} pl={5} flexDirection={"row"}>
            <Typography textAlign={"right"} color={coldTemp}>
              {tempMin.toFixed(2)}°
            </Typography>
            <Typography ml={1} textAlign={"right"} color={hotTemp}>
              {tempMax.toFixed(2)}°
            </Typography>
          </Stack>
        </Grid>
        {/* <Grid item xs={2}></Grid> */}
      </Grid>
    </Link>
  );
}
