import React from 'react';
import './country.css'                      //For css file


const Country = ({country}) => {
    console.log(country.area.area) 

    const handleVisited = () => {
        console.log('button clicked')
    }

    return (
        <div className='country'>

            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>

            <h2>Capital: {country.capital.capital}</h2>

            <h3>Name: {country.name.common} </h3>

            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            
            <p>Population: {country.population.population}</p>

            <button onClick={handleVisited} >Not visited</button>

        </div>
    );
};

export default Country;