import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { token } from "../constant/APIsettinga";
import { list, meteoData } from "../interfaces/meteoData";
import { Stack, Typography } from "@mui/material";
import DayDataBox from "../components/DayDataBox";
import Nuvola503 from "../assets/Nuvola503.jpg";
import { SECONDARY } from "../constant/color";

export default function DayPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city");
  const actualdate = queryParams.get("param");
  const actualDay = queryParams.get("actualDay");
  const [meteo, setMeteo] = useState<list[]>();
  const getMeteo = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=it&appid=${token}`
      );
      if (response.ok) {
        const meteoData: meteoData = await response.json();
        console.log(meteoData);
        const day = meteoData.list.filter((elem) => {
          if (actualdate) {
            const a = new Date(actualdate).getDay();
            const b = new Date(elem.dt_txt).getDay();

            return a === b;
          }
        });
        setMeteo(day);
        console.log("day", day);
      } else {
        throw new Error(`errore nella response del meteo`);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getMeteo();
  }, [queryParams]);

  return (
    <Stack sx={{ backgroundImage: `url(${Nuvola503})` }} py={4}>
      <Stack bgcolor={SECONDARY}>
        <Stack flexDirection={"row"} justifyContent={"center"}>
          <Typography sx={{ fontSize: "1.2em" }} fontWeight={"bold"}>
            {actualDay}
          </Typography>
        </Stack>
        {meteo &&
          meteo.map((elem, index) => {
            return <DayDataBox index={index} elem={elem} />;
          })}
      </Stack>
    </Stack>
  );
}
