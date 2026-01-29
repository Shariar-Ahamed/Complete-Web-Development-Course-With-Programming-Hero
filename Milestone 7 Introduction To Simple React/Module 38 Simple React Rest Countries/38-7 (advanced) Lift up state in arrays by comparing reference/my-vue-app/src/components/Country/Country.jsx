import React, { useState } from 'react';

import './country.css'                      //For css file


const Country = ({country, handleVisitedCountries}) => {
    // console.log(country.area.area) 
    const [visited, setVisited] = useState(false);


    const handleVisited = () => {
         // console.log('button clicked')
        // setVisited(true)

       //! 1st way
        //  if(visited){
        //     setVisited(false)  
        // }
        // else {
        //     setVisited(true)
        // }

        //! 2nd way
        // setVisited(visited ? false : true);
        
        //! 3rd way
        setVisited(!visited)
        handleVisitedCountries(country)
    }

    

    return (
        <div className={`country ${visited && 'country-visited'}`}>

            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>

            <h2>Capital: {country.capital.capital}</h2>

            <h3>Name: {country.name.common} </h3>

            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            
            <p>Population: {country.population.population}</p>

            <button onClick={handleVisited} >
                {visited ? 'Visited' : 'Not visited'}
            </button>

        </div>
    );
};

export default Country;