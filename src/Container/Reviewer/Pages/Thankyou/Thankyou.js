import React from 'react';
import './Thankyou.css';
import { Container } from 'react-bootstrap';
import WhiteButton from '../../../../Component/Button/WhiteButton';
import { useNavigate } from 'react-router-dom';

const Thankyou = () => {
  const navigate = useNavigate();
  return (
    <div className='thankyou_main'>
      <Container>
        <h1>Thank you for <br /> your review!</h1>

        <div className='give_payment'>We will process the review and submit for your payment</div>

        <div className='d-flex justify-content-center mt-4'>
          <WhiteButton onClick={() => navigate('/reviewer/work')}> Return
            <img src='/images/btn_arrow_img.png' alt='' /></WhiteButton>
        </div>
      </Container>
    </div>
  )
}

export default Thankyou