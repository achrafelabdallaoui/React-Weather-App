import React, { useState } from "react";
import BarraRicerca from "./BarraRicerca";
import RisultatiMeteo from "./RisultatiMeteo";
import { Container } from "react-bootstrap";

function FetchWeather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=472fd5a8a4862dffcd7119a94ee5bc4a&units=metric`
      );
      const data = await response.json();

      setWeatherData(data);
    } catch (error) {
      console.error("Errore nel recupero dei dati meteorologici:", error);
    }
  };

  return (
    <>
      <Container className="p-5 radius my-5 rounded-5">
        <BarraRicerca
          city={city}
          handleSearch={handleSearch}
          setCity={setCity}
        />
      </Container>
      <Container className="d-flex justify-content-center">
        <RisultatiMeteo city={city} weatherData={weatherData} />
      </Container>
    </>
  );
}

export default FetchWeather;