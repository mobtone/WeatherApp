//WeatherCard ansvarar för väder i huvudkortet i appe och mappning
//av api-responsen till html-element
import {useEffect, useState} from 'react';
import { getWeatherData } from "../../services/WeatherService";

const WeatherCard = ({location}) => {

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const getData = async () =>{
            const data = await getWeatherData(location);
            setWeather({
                location: data.name,
                temperature: data.main.temp,
                condition: data.weather[0].description,
                icon: data.weather[0].icon,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
            });
        };
        getData();
    }, [location]);

    return(
        <div className= 'weatherCardStyle'>
            <h2>{weather.location}</h2>
            <p>{weather.date} {weather.time}</p>
            <p>Temperature: {weather.temperature}</p>
            <p>Condition: {weather.condition}</p>
            <img src= {`http://openweathermap.org/img/wn/${weather.icon}.png`} alt= {weather.condition} />
        </div>
    );
}

export default WeatherCard;
