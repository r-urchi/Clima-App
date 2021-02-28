import React, { createContext, useState, useEffect } from 'react';
import {WEATHER_KEY} from '../keys';
export const ProviderContext = createContext();


const { Provider } = ProviderContext;

const WeatherContext = ({children}) => {

    // ------------------------------------------------------------
    // -------Menu
    // ------------------------------------------------------------
    const [cities, setCities] = useState([
        {name: 'Buenos Aires'}, 
        {name: 'Londres'}, 
        {name: 'Madrid'},
        {name: 'Tokyo'},
        {name: 'Sydney'},
        {name: 'Paris'}
    ])

    // ------------------------------------------------------------
    // -------Info ciudades
    // ------------------------------------------------------------


    const [city, setCity] = useState('Buenos Aires')
    const [dataCity, setDatacity] = useState(false)

    const getWeather = (e) =>{
      e.preventDefault()
      setCity(e.target.value)
      // console.log(e.target.value)
    }

    useEffect(() => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`)
            .then(response => {
              return response.json();
            })
            .then(data => {
              console.log(data)
                setDatacity(data)
                // getWeatherFiveDays(city)
            });
      }, [city]);
  
    return(
        <Provider value={{dataCity, getWeather, cities, setCities, city}}>
        {children}
      </Provider>
    )
}

export default WeatherContext
