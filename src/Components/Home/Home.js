
import React, { useEffect, useState } from 'react';

import Countries from '../Countrys/Countries';

const Home = () => {
    const [countries , setCountries] = useState([]);

    useEffect(()=> {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            
            <h1> Total Countries : {countries.length} </h1>

            <div class="row">

            {
                countries.map( country => <Countries country = {country}></Countries>)
            }

            </div>
        </div>
    );
};

export default Home;