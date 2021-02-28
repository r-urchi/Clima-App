import React, {useContext} from 'react';
import FiveCard from './FiveCard';
import { ProviderContext }  from '../context/WeatherContext';

const WeatherFive = () => {

const { fiveDays } = useContext(ProviderContext)

// console.log(fiveDays)

    return(
            <div className="info-container-days">
                <h2>Pronóstico diario</h2>
                <div className="card-five">
                    {fiveDays === [] ? null : <>{fiveDays.map((day, i) => {
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
                        })}</>}
                </div>
            </div>
    )
}

export default WeatherFive;
