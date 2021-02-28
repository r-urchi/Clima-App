import React, {useContext, useEffect, useState} from 'react';
import FiveCard from './FiveCard';
import {WEATHER_KEY} from '../keys';
import { ProviderContext }  from '../context/WeatherContext';

const WeatherFive = () => {

const { city } = useContext(ProviderContext)

const [dataCityFiveDays, setDatacityFiveDays] = useState(false)

    let fiveDays = []

useEffect(() => {

    setTimeout(() => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_KEY}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          // console.log(data.list)
         setDatacityFiveDays(data.list)
        });
        
    }, 2000);
}, [city]);

for (let index = 0; index < 40; index++) {
    if(index % 8 === 1){
        fiveDays.push(dataCityFiveDays[index]);
    }
}

console.log(fiveDays)

    return(
            <div className="info-container-days">
                <h2>Pronóstico diario</h2>
                <div className="card-five">
                    {fiveDays.map((day, i) => {
                            return (<FiveCard key={i}/>)
                        })}
                </div>
            </div>
    )
}

export default WeatherFive;