import './ForecastItem.css';

const ForecastItem = ({item}) =>{

    //Denna presentationskomponent ska samla ihop allt som ska visas i forecast-cards
   return (<>
        <div className="forecastCard">
                  <p className = "dateStyle">{item.date}</p>
                    <p>Min Temp: {item.minTemp}°C</p>
                   <p>Max Temp: {item.maxTemp}°C</p>
                    <img src={`http://openweathermap.org/img/wn/${item.icon}.png`} 
            alt="weather icon" />
       </div>
    </>);
  };

 export default ForecastItem;