import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { token } from "../constant/APIsettinga";
import { list, meteoData } from "../interfaces/meteoData";
import { Stack, Typography } from "@mui/material";
import DayDataBox from "../components/DayDataBox";

export default function DayPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city");
  const actualdate = queryParams.get("param");
  const [meteo, setMeteo] = useState<list[]>([]);
  const getMeteo = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=it&appid=${token}`
      );
      if (response.ok) {
        const meteoData: meteoData = await response.json();
        console.log(meteoData);
        const now: Date = new Date();

        const day = meteoData.list.filter((elem) => {
          const a = new Date(elem.dt_txt).getDay();
          return a === now.getDay();
        });

        setMeteo(day);

        console.log(day);
      } else {
        throw new Error(`errore nella response del meteo`);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getMeteo();
  }, []);

  return (
    <Stack>
      {meteo &&
        meteo.map((elem, index) => {
          return <DayDataBox index={index} elem={elem} />;
        })}
    </Stack>
  );
}
