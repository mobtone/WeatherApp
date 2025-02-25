
export const getWeatherData = async (location) => {
    
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
   
    const weatherData = await fetch(url).then(response => response.json());

    return weatherData(location);
   //"http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={apiKey}";

}

