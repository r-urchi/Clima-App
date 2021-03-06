import React, { useContext } from 'react';
import { ProviderContext }  from '../context/WeatherContext';

const Menu = () => {

    const { getWeather, cities } = useContext(ProviderContext)

    return(
        <div className="menu-container">
            <a href="/">ClimApp 
                <img src="img/sun.png" alt="ClimApp"/>
            </a>
            <div className="menu__btn">
                {cities.map((city, i) => {
                        return (<input key={i} type="button" value={city.name} onClick={getWeather}/>)
                    })}
            </div>
        </div>
    )
}

export default Menu;

