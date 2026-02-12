import React, { use, useState } from 'react';
import Country from '../Country/country';    //For countries file 
import './countries.css'                   //For css file




const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])



    const handleVisitedCountries = (country) => {
        console.log('handle visited county clicked', country);

        const newVisitedCountries = [...visitedCountries, country];  //Spread operator New update
        setVisitedCountries(newVisitedCountries);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    const handleVisitedFlags = (flag) =>{
        const nowVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(nowVisitedFlags)
    }

    
    return (
        <div>
            <h1>My visited countries: {countries.length}</h1>
            <h3>Total country Visited: {visitedCountries.length} </h3>
            <h3>Total flag Visited: {visitedFlags.length} </h3>

            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>   {/* New update  */}

            <div className="visited-flags-container">
                {
                    visitedFlags.map(flag => <img src={flag} alt={'flag'} />)
                }
            </div>

            <div className='countries'>
            {
                countries.map(country => <Country 
                    key={country.cca3.cca3}
                    country={country}
                    handleVisitedCountries={handleVisitedCountries}  
                    handleVisitedFlags={handleVisitedFlags}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;