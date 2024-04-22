import React, { useEffect, useState } from 'react';
import './Auth.css';
import { Col, Container, Form, Row } from 'react-bootstrap';
import BlackButton from '../../../Component/Button/BlackButton';
import Input from '../../../Component/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ForgotPassword } from '../../../Redux/Action/auth';
import { errorNotify, successNotify } from '../../../Util/Toast';
import SpinLoader from '../../../Util/SpinLoader';

const ForgetPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('')

    const { loading, getForgetPasswordData, error } = useSelector((state) => state.forgetPasswordData)
    const userFound = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        if (userFound) {
            if (userFound?.user?.role === 'artist') {
                navigate('/artist/form-submit')
            }
            else if (userFound?.user?.role === 'reviewer') {
                navigate('/reviewer/work')
            }
            else if (userFound?.user?.role === 'admin') {
                navigate('/admin/dashboard')
            }
        }
    }, [userFound])

    useEffect(() => {
        if (getForgetPasswordData) {
            successNotify("Email Sent!")
            dispatch({ type: "FORGET_PASSWORD_RESET" })

            setEmail('')
        }
        if (error) {
            errorNotify(error)
            dispatch({ type: "FORGET_PASSWORD_RESET" })
        }
    }, [error, getForgetPasswordData])

    const submitHandler = (e) => {
        e.preventDefault();

        if (email.length === 0) {
            errorNotify("Please filled up all fields")
            return
        }

        let data = { email }
        dispatch(ForgotPassword(data))
    }

    return (
        <div style={{ backgroundColor: "#eff0f0a1" }}>
            <Container fluid>
                <Row className='align-items-center'>
                    <Col md={6} className='p-0'>
                        <div className='signup_left'>
                        </div>
                    </Col>

                    <Col md={6} className='p-0'>
                        <div className='signup_form'>
                            <h1>Forget Password</h1>

                            <Form onSubmit={submitHandler}>
                                <Input isRequired={true} label="Email Address" type="email" name='email'
                                    placeholder="Enter email Address" value={email} onChange={(e) => setEmail(e.target.value)} />

                                <Row>
                                    <Col md={12}>
                                        {
                                            loading ? <SpinLoader /> :
                                                <BlackButton type="submit">
                                                    Send Link
                                                    <img src='/images/btn_arrow_img.png' alt='' />
                                                </BlackButton>
                                        }
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ForgetPassword