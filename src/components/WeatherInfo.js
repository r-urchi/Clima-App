import React, {useContext} from 'react';
import Search from './Search'
import WeatherToday from './WeatherToday'
import WeatherFive from './WeatherFive';
import { ProviderContext }  from '../context/WeatherContext';

const WeatherInfo = () => {

const { dataCity } = useContext(ProviderContext)

    return(
    <>
        <Search/>
        {dataCity ? 
        <> 
        {dataCity.cod === '404' ? <div className="error">No se encontraron datos...</div> : 
           <> 
            <WeatherToday/>
            <WeatherFive/> 
            </> 
        }
        </>
        : 'Obteniendo datos...'}    
    </>

    )
}

export default WeatherInfo;

