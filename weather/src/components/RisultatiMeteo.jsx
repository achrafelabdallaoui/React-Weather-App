import { BiWind } from "react-icons/bi"; 
import { WiHumidity } from "react-icons/wi"; 
import { FaTemperatureHigh } from "react-icons/fa"; 
import { FaTemperatureLow } from "react-icons/fa"; 


const RisultatiMeteo = ({city, weatherData}) => (
    <>
      {weatherData && (
        <>
        <div className="bg-light bg-opacity-10 rounded-5">
        <div className="text-center">
        <div className="display-3 "> {city}</div>
        <div className="display-1 ">{weatherData.main.temp}°C</div>
        <div className="display-5 ">
            {weatherData.weather[0].description}
            <img src= {`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png `} height={60}/>
        </div>
        </div>
        <div className=" d-flex my-4 ">
            <div className="mx-3">Temp max:<br/> 
            {weatherData.main.temp_max}°C <FaTemperatureHigh /></div>
            <div className="mx-3">Temp min:<br/> 
            {weatherData.main.temp_min}°C <FaTemperatureLow /></div>
            <div className="mx-3">Humidity:<br/> 
            {weatherData.main.humidity}% <WiHumidity /></div>
            <div className="mx-3">Wind:<br/>
             {weatherData.wind.speed}KM/h <BiWind  /></div>
        </div>
        </div>
       
      </>
      )}


    </>
  );

  export default RisultatiMeteo;