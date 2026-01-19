import React from 'react';

const Country = ({country}) => {
    console.log(country.capital.capital) 
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
            <h2>Capital: {country.capital.capital}</h2>
            <h3>Name: {country.name.common} </h3>
            <span>Population: {country.population.population}</span>
        </div>
    );
};

export default Country;