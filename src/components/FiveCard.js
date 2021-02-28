import React from 'react';

const FiveCard = ({date, temp, st, hum, wind, max, min}) => {

    return(
        <div className="card">
            <p className="card__date">{date}</p>
            <p className="card__temp">Temperatura: {temp}°</p>
            <p className="card__st">Sensación Térmica: {st}°</p>
            <p className="card__hum">Humedad: {hum}%</p>
            <p className="card__wind">Viento: {wind} km/h</p>
            <p className="card__max">Temp. Max. {max}°</p>
            <p className="card__min">Temp Min. {min}°</p>
        </div>
    )
}

export default FiveCard;
