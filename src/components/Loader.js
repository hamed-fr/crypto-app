import React from 'react';
import spinner from '../gif/spinner.gif'

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="spinner"/>
            <h3>Loading...</h3>
        </div>
    );
};

export default Loader;