
import React from 'react';
import { Link } from 'react-router-dom';

const Countries = (props) => {
    // console.log(props);
    const { name, region } = props.country;
    return (

        <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title">Name : {name}</h1>
            <h4 class="card-text">Region : {region} </h4>
            <Link to = {`/country/${name}`}> More Details </Link><br/>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
     
    );
};

export default Countries;