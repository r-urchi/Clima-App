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
    // -------Info inicio
    // ------------------------------------------------------------

    const [city, setCity] = useState('Buenos Aires')
    const [dataCity, setDatacity] = useState(false)

    const getWeather = (e) =>{
      e.preventDefault()
      setCity(e.target.value)
      // console.log(e.target.value)
    }

    useEffect(() => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`)
            .then(response => {
              return response.json();
            })
            .then(data => {
              // console.log(data)
                setDatacity(data)
            });
      }, [city]);


    // ------------------------------------------------------------
    // -------Info ciudad proximos 5 dias
    // ------------------------------------------------------------
    const [dataCityFiveDays, setDatacityFiveDays] = useState(false)

    useEffect(() => {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_KEY}&units=metric`)
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
  
    return(
        <Provider value={{dataCity, getWeather, cities, setCities, city, fiveDays}}>
        {children}
      </Provider>
    )
}

export default WeatherContext
