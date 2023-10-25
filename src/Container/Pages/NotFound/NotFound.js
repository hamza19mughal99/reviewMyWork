import React from 'react';
import './NotFound.css';
import BlackButton from '../../../Component/Button/BlackButton';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='not_found'>
            <h1>Page Not Found</h1>
            <BlackButton type="button" onClick={() => navigate('/')}>
                Return
                <img src='/images/btn_arrow_img.png' alt='' />
            </BlackButton>
        </div>
    )
}

export default NotFound