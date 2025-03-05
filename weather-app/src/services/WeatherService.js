
export const getWeatherData = async (location, endpoint = "weather") => {
    
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/${endpoint}?q=${location}&appid=${apiKey}&units=metric`;
   
    return await fetch (url).then (response => response.json());

};

