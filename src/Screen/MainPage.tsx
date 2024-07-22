import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { PRIMARY } from "../constant/color";
import { Token } from "@mui/icons-material";
import { token } from "../constant/APIsettinga";
import DayBox from "../components/DayBox";
import { list, meteoData } from "../interfaces/meteoData";

const arrayPlaceholder: number[] = [1, 2, 3, 4, 5];
export default function MainPage() {
  const [cityName, setCityName] = useState<string>("chiuduno");
  const [fiveDaysMeteoData, setFiveDaysMeteoData] = useState<list[][]>([]);

  const getMeteo = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=it&appid=${token}`
      );
      if (response.ok) {
        const meteoData: meteoData = await response.json();
        console.log(meteoData);
        const now: Date = new Date();
        const arrayOfDayWeathers: list[][] = [];
        // const day1 = meteoData.list.filter((elem) => {
        //   const a = new Date(elem.dt_txt).getDay();
        //   return a === now.getDay();
        //   arrayOfDayWeathers.push(day1);
        // });
        for (let i = 0; i < 5; i++) {
          const day = meteoData.list.filter((elem) => {
            const a = new Date(elem.dt_txt).getDay();
            return a === now.getDay() + i;
          });
          // console.log(day);
          if (day[0]) {
            arrayOfDayWeathers.push(day);
          }
        }
        console.log(arrayOfDayWeathers);
        setFiveDaysMeteoData(arrayOfDayWeathers);
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
    <MainLayout>
      <Grid
        bgcolor={"#b2b2b2"}
        container
        justifyContent={"center"}
        paddingBottom={3}
      >
        <Grid item xs={12} lg={8} mx={1}>
          <Stack
            my={4}
            justifyContent={"center"}
            width={"100%"}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <TextField
              sx={{ width: "80%" }}
              InputProps={{
                style: {
                  borderRadius: "12px",
                  backgroundColor: "white",
                },
              }}
              size="small"
              id="outlined-search"
              label="Search field"
              type="search"
            />
          </Stack>
          <Stack flexDirection={"row"} justifyContent={"center"}>
            <Button sx={{ bgcolor: PRIMARY }} variant="contained">
              Bergamo
            </Button>
            <Button
              sx={{ bgcolor: PRIMARY, marginX: "2%" }}
              variant="contained"
              onClick={getMeteo}
            >
              Brescia
            </Button>
            <Button sx={{ bgcolor: PRIMARY }} variant="contained">
              Milano
            </Button>
          </Stack>
          <Paper elevation={5} sx={{ borderRadius: "8px", marginY: "2em" }}>
            <Stack>
              <Stack my={2}>
                <Typography px={2} pb={2} variant="h4">
                  Previsioni Meteo per la città di{" "}
                  {cityName.slice(0, 1).toUpperCase()}
                  {cityName.slice(1)}
                </Typography>
                {fiveDaysMeteoData &&
                  fiveDaysMeteoData.map((elem: list[], i: number) => {
                    return (
                      <DayBox
                        key={i}
                        elem={elem}
                        index={i}
                        cityName={cityName}
                      />
                    );
                  })}
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
