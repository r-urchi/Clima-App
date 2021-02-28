import React, { useContext } from 'react';
import { ProviderContext }  from '../context/WeatherContext';

const Menu = () => {

    const { getWeather, cities } = useContext(ProviderContext)

    return(
        <div className="menu-container">
            {cities.map((city, i) => {
                    return (<input key={i} type="button" value={city.name} onClick={getWeather}/>)
                })}
        </div>
    )
}

export default Menu;