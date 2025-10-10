import React, { useState }from 'react';
import './Country.css'




const Country = ({country}) => {
    const [Visited, setVisited] = useState(false)


    // console.log(country.area.area)
    // console.log(country.population.population);

    const handleVisited = () => {
        //* Basic system
        // setVisited(true)
       
        //* if else system
        // if(Visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        //* Ternary system
        // setVisited(Visited? false : true);

        //* Logical system
        setVisited(!Visited);
        
    }

    return (
        // <div className='country'>
        <div className={`country ${Visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area}{country.area.area > 30000 ? ' Big Country' : ' Small Country'}</p>
            
            <button onClick={handleVisited}>
                {Visited ? 'Visited' : 'Not Visited'}
            </button>

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