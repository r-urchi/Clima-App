import React, {useContext} from 'react';
import { ProviderContext }  from '../context/WeatherContext';

const Search = () => {

    const { searchWeather } = useContext(ProviderContext)

    return(
        <form onSubmit={searchWeather} className="form-search">
            <input type="text" name="city" placeholder="Ingresa una ciudad" required/>
            <button>Ver Clima</button>
        </form>
    )
}

export default Search;

