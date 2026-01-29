import React, { use, useState } from 'react';
import Country from '../Country/country';    //For countries file 
import './countries.css'                   //For css file




const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) => {
        console.log('handle visited county clicked', country);
    }


    
    return (
        <div>
            <h1>IN the countries: {countries.length}</h1>
            <h3>Total country Visited: </h3>
            <div className='countries'>
            {
                countries.map(country => <Country 
                    key={country.cca3.cca3}
                    country={country}
                    handleVisitedCountries={handleVisitedCountries}  
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;