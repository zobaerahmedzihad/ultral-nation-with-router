
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [ country , setCountry] = useState({})

    useEffect(()=> {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setCountry(data[0]))
        
    }, [countryName])

        const {name} = country;

    return (
    <div>
      <h1>country name : {name} </h1>
      <h1>This is me</h1>
  </div>
    );
};

export default CountryDetail;