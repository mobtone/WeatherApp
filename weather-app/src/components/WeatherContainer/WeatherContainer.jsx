import { useState, useEffect } from 'react';
import Search from '../Search/Search';
import ForecastCardList from '../ForecastCardList/ForecastCardList';
import WeatherCard from '../WeatherCard/WeatherCard';

//WeatherContainer hanterar state dvs att sidan ska omrenderas varje gång platsen ändras
//Samlar ihop de övriga komponenterna i programmet 

const WeatherContainer = () => {

const [location, setLocation] = useState("Stockholm");

const handleSearch = (city) => {
    setLocation(city); //Uppdaterar platsen när användaren söker på en stad genom useState
    };



    return (
        <>
        <div>
            <Search onSearch = {handleSearch} />
            <WeatherCard location = {location} />
            <ForecastCardList location = {location} />
        </div>
        </>
);
}
    export default WeatherContainer;



// useEffect(() => {
//     fetchForecastData = async () => {
//         const forecast = await getW
//     }

// })


// return (
// <>
//     <div>
//         <Search onSearch={handleSearch} />
//         <Weathercard weather = {currentWeather} />
//     </div>
// </>
// );


