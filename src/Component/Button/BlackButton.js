import React from 'react';
import './Button.css';

const BlackButton = ({ onClick, type, style, children }) => {
    return (
        <button onClick={onClick} type={type} style={style} className='black_btn'>
            {children}
        </button>
    )
}
export default BlackButton