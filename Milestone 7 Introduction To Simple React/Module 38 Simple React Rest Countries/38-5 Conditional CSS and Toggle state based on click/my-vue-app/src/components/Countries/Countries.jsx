import React, { use } from 'react';
import Country from '../Country/country';    //For countries file 
import './countries.css'                   //For css file




const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    
    return (
        <div>
            <h1>IN the countries: {countries.length}</h1>
            <div className='countries'>
            {
                countries.map(country => <Country 
                    key={country.cca3.cca3}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;