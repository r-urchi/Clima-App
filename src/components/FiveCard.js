import React from 'react';

const FiveCard = () => {

    return(
        <div className="card">
            <p className="card__date">28-2-2021</p>
            <p className="card__st">Sensación Térmica: 30°</p>
            <p className="card__hum">Humedad: 50%</p>
            <p className="card__wind">Viento: 20 km/h</p>
            <p className="card__max">Temp. Max. 35°</p>
            <p className="card__min">Temp Min. 15°</p>
        </div>
    )
}

export default FiveCard;
