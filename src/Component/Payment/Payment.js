import React, { useState } from 'react';
import { Form, Spinner } from "react-bootstrap";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { errorNotify, successNotify } from '../../Util/Toast';
import axios from 'axios';
import BlackButton from '../Button/BlackButton';

const Payment = () => {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(false)
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();

    const userFound = JSON.parse(localStorage.getItem('user'))

    const planSubmitHandler = async (e) => {
        e.preventDefault();
        setLoader(true)

        if (!stripe || !elements) {
            setLoader(false)
            return;
        }

        const cardElement = elements.getElement(CardElement)
        const cardDetail = await stripe.createToken(cardElement)

        if (cardDetail.error) {
            setLoader(false)
            errorNotify(cardDetail.error.message)
            return
        }

        const cardObj = {
            card: cardDetail?.token?.card,
            id: cardDetail?.token?.id
        }

        let data = {
            token: JSON.stringify(cardObj),
            reviewerId: userFound?.user?._id
        }

        axios.put(`reviewer/card-save`, data).then((res) => {
            setLoader(false)
            successNotify("Card Save Successfully!")
            
            window.location.href = res.data.oauthLink

        }).catch(() => {
            errorNotify("Error in saving")
        })
    }

    return (

        // <div>
        //     <a target="_blank" href='https://connect.stripe.com/d/setup/e/_Ozd1JSQkhvd5Y1rDE7g9F9KLzx/YWNjdF8xT0JkbFo0RXE4dWNvQU5E/1ba159a44739a5618'>
        //         stripe
        //     </a>
        // </div>
        <Form onSubmit={planSubmitHandler}>
            <Form.Group>
                <CardElement
                    className={"mb-3 card_div"}
                    options={{
                        hidePostalCode: true,
                        style: {
                            base: {
                                fontSize: '23px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#949494',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='d-flex justify-content-end'>
                    <BlackButton type="submit">
                        {loader ? <Spinner animation='border' size='sm' /> :
                            <>
                                Save Details
                                <img src='/images/btn_arrow_img.png' alt='' />
                            </>
                        }
                    </BlackButton>
                </div>
            </Form.Group>
        </Form>
    )
}

export default Payment