
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
        
    }, [])

        const {name , flag , population , capital} = country;

    return (
    <div>
      <h1>country name : {name} </h1>
      <Car style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Car>
  </div>
    );
};

export default CountryDetail;