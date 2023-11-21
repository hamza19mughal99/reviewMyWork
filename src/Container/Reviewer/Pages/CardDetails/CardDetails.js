import React from 'react';
import './CardDetails.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import Payment from '../../../../Component/Payment/Payment';

const CardDetails = () => {

    const { state } = useLocation()

    const stripePromise = loadStripe('pk_test_51O5VwCKJke2Y2VQTWSZcH4R0qz8mLzWtxJz6p4OV6gqxcDzyM85iZbZynkkKjFXjhLH2PPEi5KIA0TQqBEnnTTpx00JI8WHm7B');

    return (
        <div className='contract_payment'>
            <Container>
                <div className='contract_payment_main'>
                    <h2>Card Details</h2>
                    <p>To get Work Reviewed Payment please add your card details here <br />
                        (Your Details will be confidentails to everyone)</p>

                    <h6>You will get <b>45$</b> per work reviewed approved by Admin</h6>

                    <Row className="justify-content-center py-5">
                        <Col md={10}>
                            <div className='order_product_detail mb-3'>
                                <div className='p-3'>
                                    <Elements stripe={stripePromise}>
                                        <Payment />
                                    </Elements>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default CardDetails