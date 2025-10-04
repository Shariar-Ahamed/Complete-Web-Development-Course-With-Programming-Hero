import React from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country.area.area)
    // console.log(country.population.population);

    const handleVisited = () => {
        console.log('Buttn Clicked', country.name.common);
    }

    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area}{country.area.area > 30000 ? ' Big Country' : ' Small Country'}</p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;


/**
 * 1. inline css style object
 * 2. css file
 * 3. css module
 * 4. css framework (tailwind, bootstrap, material ui)
 * 5. styled component (library)
 */