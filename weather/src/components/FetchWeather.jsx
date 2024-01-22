
import React, { useState } from "react";
import BarraRicerca from "./BarraRicerca";
import RisultatiMeteo from "./RisultatiMeteo";
import { Container } from "react-bootstrap";

function FetchWeather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [day, setDay] = useState(null);

  const fetchSearch = async () => {
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

    const fetchForecast = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3f64327af1492cb6b843fb2420be96e9&lang=en&units=metric`);
        const data = await response.json();
        setDay(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };
    const handleSearch = () => {
      if (city.length > 3) {
        fetchSearch();
        fetchForecast();
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
      <Container className="d-flex justify-content-center " >
        <RisultatiMeteo city={city} weatherData={weatherData} day={day}/>
      </Container>
    </>
  );
}

export default FetchWeather;