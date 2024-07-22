export interface coordinates {
  lat: number;
  lon: number;
}
export interface city {
  coord: coordinates;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface clouds {
  all: number;
}

export interface main {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

export interface rain {
  "3h": number;
}
export interface sys {
  pod: string;
}
export interface weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}
export interface wind {
  deg: number;
  gust: number;

  speed: number;
}
export interface list {
  clouds: clouds;
  dt: number;
  dt_txt: string;
  main: main;
  pop: number;
  rain: rain;
  sys: sys;
  visibility: number;
  weather: weather[];
  wind: wind;
}

export interface meteoData {
  city: city;
  cnt: number;
  cod: string;
  list: list[];
  message: number;
}
