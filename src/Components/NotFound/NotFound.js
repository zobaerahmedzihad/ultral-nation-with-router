
import React from 'react';
import './NotFound.css';

const NotFound = () => {
    const errorStyle = {
        color : 'red'
    } 
    return (
        <div className = "errorHandle" >
            <h1>This page is Not Found.</h1>
            <h2 style = {errorStyle} > 404 Error..!!!</h2>
        </div>
    );
};

export default NotFound;