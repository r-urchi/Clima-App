import React, {useContext, useEffect, useState} from 'react';
import FiveCard from './FiveCard';
import {WEATHER_KEY} from '../keys';
import { ProviderContext }  from '../context/WeatherContext';

const WeatherFive = () => {

const { city } = useContext(ProviderContext)

const [dataCityFiveDays, setDatacityFiveDays] = useState(false)
// const [cinco, setCinco] = useState()


useEffect(() => {

        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_KEY}&units=metric`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          // console.log(data.list)
         setDatacityFiveDays(data.list)
        });
}, [city]);

let fiveDays = []
    if(dataCityFiveDays){
        for (let index = 0; index < 40; index++) {
            if(index % 8 === 1){
                fiveDays.push(dataCityFiveDays[index]);
            }
        }   
}


console.log(fiveDays)

    return(
            <div className="info-container-days">
                <h2>Pronóstico diario</h2>
                <div className="card-five">
                    {fiveDays === [] ? null : <div>{fiveDays.map((day, i) => {
                            return (<FiveCard 
                                    key={i} 
                                    date={day.dt_txt}
                                    temp={day.main.temp}
                                    st={day.main.feels_like}
                                    hum={day.main.humidity}
                                    wind={day.wind.speed}
                                    max={day.main.temp_max}
                                    min={day.main.temp_min}
                                    />)
                        })}</div>}
                </div>
            </div>
    )
}

export default WeatherFive;
