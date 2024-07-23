import {
  Alert,
  Button,
  FormControl,
  Grid,
  Paper,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { PRIMARY } from "../constant/color";
import { Token } from "@mui/icons-material";
import { token } from "../constant/APIsettinga";
import DayBox from "../components/DayBox";
import { list, meteoData } from "../interfaces/meteoData";
import { mainLayoutTheme } from "../constant/theme";
import Nuvola503 from "../assets/Nuvola503.jpg";
import WeekPage from "../components/WeekPage";
import { useNavigate } from "react-router-dom";

const arrayPlaceholder: number[] = [1, 2, 3, 4, 5];
export default function MainPage() {
  const [cityName, setCityName] = useState<string>("chiuduno");
  const [alert, setAlert] = useState<boolean>(false);
  const [cityFrontName, setFrontCityName] = useState<string>("");
  const [fiveDaysMeteoData, setFiveDaysMeteoData] = useState<list[][]>([]);
  const navigate = useNavigate();

  const getMeteo = async (city: string) => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=it&appid=${token}`
        // `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=it&appid=${token}`
      );
      if (response.ok) {
        setCityName("");
        const meteoData: meteoData = await response.json();
        console.log(meteoData);
        setFrontCityName(city);
        const now: Date = new Date();
        const arrayOfDayWeathers: list[][] = [];
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

        console.log("array che ci interessa", arrayOfDayWeathers);
        setFiveDaysMeteoData(arrayOfDayWeathers);
      } else {
        throw new Error(`errore nella response del meteo`);
      }
    } catch (error) {
      console.log(error, "error");
      setAlert(true);
      setTimeout(() => setAlert(false), 2000);
    }
  };

  const handlegetMeteo = (city: string) => {
    getMeteo(city);
    console.log(city);
  };

  useEffect(() => {
    handlegetMeteo(cityName);
  }, []);

  return (
    <ThemeProvider theme={mainLayoutTheme}>
      {alert && (
        <Alert
          sx={{
            position: "absolute",
            top: "19.5%",
            // textAlign: "center",
            width: "90%",
            // left: "25%",
            fontSize: "0.8em",
            zIndex: 2,
          }}
        >
          la citta non esiste riprova!
        </Alert>
      )}
      <Grid flex={1} container justifyContent={"center"}>
        <Grid
          // bgcolor={"#b2b2b2"}
          className="image"
          item
          xs={12}
          px={2}
          sx={{ backgroundImage: `url(${Nuvola503})` }}
        >
          <Stack
            my={4}
            justifyContent={"center"}
            width={"100%"}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <FormControl>
              <Stack flexDirection={"row"}>
                <TextField
                  sx={{ width: "80%" }}
                  InputProps={{
                    style: {
                      borderRadius: "12px 0px 0px 12px",
                      backgroundColor: "white",
                    },
                  }}
                  size="small"
                  id="outlined-search"
                  // label="Search field"
                  type="search"
                  value={cityName}
                  onChange={(e) => {
                    setCityName(e.target.value);
                  }}
                />
                <Button
                  size="small"
                  sx={{
                    bgcolor: PRIMARY,
                  }}
                  variant="contained"
                  onClick={() => {
                    console.log("e andato");
                    getMeteo(cityName);
                    navigate("/");
                  }}
                >
                  cerca
                </Button>
              </Stack>
            </FormControl>
          </Stack>
          <Stack flexDirection={"row"} justifyContent={"center"} my={5}>
            <Button
              sx={{ bgcolor: PRIMARY }}
              variant="contained"
              onClick={() => {
                handlegetMeteo("bergamo");
                navigate("/");
              }}
            >
              Bergamo
            </Button>
            <Button
              sx={{ bgcolor: PRIMARY, marginX: "2%" }}
              variant="contained"
              onClick={() => {
                handlegetMeteo("brescia");
                navigate("/");
              }}
            >
              Brescia
            </Button>
            <Button
              sx={{ bgcolor: PRIMARY }}
              onClick={() => {
                handlegetMeteo("milano");
                navigate("/");
              }}
              variant="contained"
            >
              Milano
            </Button>
          </Stack>
          <WeekPage
            cityFrontName={cityFrontName}
            fiveDaysMeteoData={fiveDaysMeteoData}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
