import React from 'react';
import './Banner.css';

const Banner = ({ heading }) => {
    return (
        <div className='banner_inner_main'>
            <h2>{heading}</h2>
        </div>
    )
}

export default Banner