import {useState} from 'react';
import { getWeatherData } from '../../services/WeatherService';
import ForecastCardList from '../ForecastCardList/ForecastCardList';
import './Search.css';

const Search = ({onSearch}) =>{

    const [condition, setCondition] = useState("");

    const handleSearch = () =>{
        if (condition.trim()){
            onSearch(condition);
            setCondition(""); //Rensar sökfältet
        }
    };
    
    return (
        <>
        <div className ='searchStyle'>
            <input type="text" 
            value = {condition} onChange ={(e) =>
                setCondition(e.target.value)}
                placeholder ="Skriv en stad"/>
            <button onClick = {handleSearch}>Sök</button>
        </div>
        <ForecastCardList forecast={weatherList} />
        </>
    );
}

export default Search;