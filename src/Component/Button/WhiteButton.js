import React from 'react';
import './Button.css';

const WhiteButton = ({ onClick, type, style, disable, children }) => {
    return (
        <button onClick={onClick} type={type} style={style} disabled={disable ? true : false} className='white_btn'>
            {children}
        </button>
    )
}
export default WhiteButton