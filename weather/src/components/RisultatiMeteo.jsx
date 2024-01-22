
import { BiWind } from "react-icons/bi"; 
import { WiHumidity } from "react-icons/wi"; 
import { FaTemperatureHigh } from "react-icons/fa"; 
import { FaTemperatureLow } from "react-icons/fa"; 


const RisultatiMeteo = ({city, weatherData, day}) => (
    <>
      {weatherData && day &&(
        <>
        <div className="bg-light bg-opacity-10 rounded-5 w-50 p-2 mb-5">
        <div className="text-center">
        <div className="display-3 "> {city}</div>
        
        <div className="display-1 ">{weatherData.main.temp}°C</div>
        <div className="display-5 ">
            {weatherData.weather[0].description}
            <img src= {`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png `} height={60}/>
        </div>
        </div>
        <div className=" d-flex my-4 justify-content-around bg-light bg-opacity-25 rounded-5 km/h">
            <div className="mx-3">Temp max:<br/> 
            {weatherData.main.temp_max}°C <FaTemperatureHigh /></div>
            <div className="mx-3">Temp min:<br/> 
            {weatherData.main.temp_min}°C <FaTemperatureLow /></div>
            <div className="mx-3">Humidity:<br/> 
            {weatherData.main.humidity}% <WiHumidity /></div>
            <div className="mx-3">Wind:<br/>
             {weatherData.wind.speed}KM/h <BiWind  /></div>
        </div>
        <div className="d-flex justify-content-around mb-3">
        <div className="text-center bg-light bg-opacity-50 rounded-5 w-25 py-3">
              <p >Today</p>
              
              <p>{day.list[0].main.temp}°C <FaTemperatureHigh /></p>
              <p>{day.list[0].main.humidity} % <WiHumidity /></p>
              <p>{day.list[0].wind.speed} km/h  <BiWind  /></p>
             <img src= {`https://openweathermap.org/img/wn/${day.list[0].weather[0].icon}@2x.png`} alt="" height={60}/>
             <p>{day.list[0].weather[0].description}</p>
         </div>
         <div className="text-center bg-light bg-opacity-50 rounded-5 w-25 py-3">
              <p >Tomorrow</p>
              
              <p>{day.list[8].main.temp}°C <FaTemperatureHigh /></p>
              <p>{day.list[8].main.humidity} % <WiHumidity /></p>
              <p>{day.list[8].wind.speed} km/h  <BiWind  /></p>
             <img src= {`https://openweathermap.org/img/wn/${day.list[8].weather[0].icon}@2x.png`} alt="" height={60}/>
             <p>{day.list[8].weather[0].description}</p>
         </div>
         <div className="text-center bg-light bg-opacity-50 rounded-5 w-25 py-3">
              <p >Day After</p>
              
              <p>{day.list[16].main.temp}°C <FaTemperatureHigh /></p>
              <p>{day.list[16].main.humidity} % <WiHumidity /></p>
              <p>{day.list[16].wind.speed} km/h  <BiWind  /></p>
             <img src= {`https://openweathermap.org/img/wn/${day.list[16].weather[0].icon}@2x.png`} alt="" height={60}/>
             <p>{day.list[16].weather[0].description}</p>
         </div>
                
        </div>
        </div>
       
      </>
      )}


    </>
  );

  export default RisultatiMeteo;