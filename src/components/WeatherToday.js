import React, {useContext} from 'react';
import { ProviderContext }  from '../context/WeatherContext';

const WeatherToday = () => {

const { dataCity } = useContext(ProviderContext)

    return(
        <>
        <div className="info-container">
            <div className="info__main">
                <p className="info__city">El tiempo en {dataCity.name}</p>
                <p className="info__temp">{dataCity.main.temp}°</p>
            </div>
            <div className="info__more">
                <div className="info__moreInfo">
                    <p className="info__st">Sensación Térmica: {dataCity.main.feels_like}°</p>
                    <p className="info__hum">Humedad: {dataCity.main.humidity}%</p>
                    <p className="info__wind">Viento: {dataCity.wind.speed} km/h</p>
                </div>
                <div className="info__max-min">
                    <p className="info__max">Temp. Max. {dataCity.main.temp_max}°</p>
                    <p className="info__min">Temp Min. {dataCity.main.temp_min}°</p>
                </div>
            </div>
        </div> 
        </>
    )
}

export default WeatherToday;

