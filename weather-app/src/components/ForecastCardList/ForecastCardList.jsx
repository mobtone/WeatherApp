import { useEffect, useState } from 'react';
import { getWeatherData } from '../../services/WeatherService';

const ForecastCardList = ({location}) => {

    const [forecast, setForecast] = useState([]);

useEffect(() => {
    const getForecast = async () =>{
        const data = await getWeatherData(location);
        const handledForecast = data.list.slice(0, 5).map((entryDay) => ({
            date: new Date(day.dt * 1000).toLocaleDateString(),
            minTemp: entryDay.main.temp_min,
            maxTemp: entryDay.main.temp_max,
            icon: entryDay.weather[0].icon,
        }));
        setForecast(handledForecast);
    };

    getForecast();
}, [location]);

    return(
        <>
        <div className="forecastList">
            {forecast.map((day, index) => (
                <div key = {index} className = "forecastCard">
                    <p>{day.date}</p>
                    <p>Min Temp: {day.minTemp}°C</p>
                    <p>Max Temp: {day.maxTemp}°C</p>
                    <img src={`http://openweathermap.org/img/wn/${day.icon}.png`} 
            alt="weather icon" />
        </div>
         ))}
         </div>
        </>
    );
}

export default ForecastCardList;