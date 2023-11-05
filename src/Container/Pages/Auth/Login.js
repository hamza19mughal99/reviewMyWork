import React, { useEffect, useState } from 'react';
import './Auth.css';
import { Col, Container, Form, Row } from 'react-bootstrap';
import BlackButton from '../../../Component/Button/BlackButton';
import Input from '../../../Component/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthLogin } from '../../../Redux/Action/auth';
import { errorNotify, successNotify } from '../../../Util/Toast';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: "",
    })

    const { loading, getLoginData, error } = useSelector((state) => state.loginData)

    const userFound = JSON.parse(localStorage.getItem('user'))
    // const isSubmission = JSON.parse(localStorage.getItem('isSubmission'))

    useEffect(() => {
        if (userFound) {
            if (userFound?.user?.role === 'artist') {
                // if (!isSubmission) {
                if (userFound?.user?.paymentStatus) {
                    navigate('/artist/form-submit')
                }
                else {
                    navigate('/artist/payment')
                }
                // }
                // else {
                //     navigate('/artist/work')
                // }
            }
            else if (userFound?.user?.role === 'reviewer') {
                navigate('/reviewer/work')
            }
            else if (userFound?.user?.role === 'admin') {
                navigate('/admin/profile')
            }
        }
    }, [userFound])

    useEffect(() => {
        if (getLoginData) {
            successNotify("Login Successfully!")
            dispatch({ type: "LOGIN_RESET" })

            setLogin({
                email: "",
                password: "",
            })

            if (getLoginData?.user?.role === 'artist') {
                // if (isSubmission) {
                if (userFound?.user?.paymentStatus) {
                    navigate('/artist/form-submit')
                }
                else {
                    navigate('/artist/payment')
                }
                // }
                // else {
                //     navigate('/artist/work')
                // }
            }
            else if (getLoginData?.user?.role === 'reviewer') {
                navigate('/reviewer/work')
            }

        }
        if (error) {
            errorNotify(error)
            dispatch({ type: "LOGIN_RESET" })
        }
    }, [error, getLoginData])

    const inputHandler = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (login.email.length === 0 || login.password.length === 0) {
            errorNotify("Please filled up all fields")
            return
        }

        let data = {
            ...login,
        }

        dispatch(AuthLogin(data))
    }

    return (
        <div style={{ backgroundColor: "#eff0f0a1" }}>
            <Container fluid>
                <Row className='align-items-center'>
                    <Col md={6} className='p-0'>
                        <div className='signup_left'>
                            <img src='/images/login_left.png' alt='' style={{ height: "87vh", objectFit: "cover" }} />
                        </div>
                    </Col>

                    <Col md={6} className='p-0'>
                        <div className='signup_form'>
                            <h1>Log In</h1>

                            <Form onSubmit={submitHandler}>
                                <Input label="Email Address" type="email" name='email' value={login.email} onChange={inputHandler} />
                                <Input label="Password" type="password" name="password" value={login.password} onChange={inputHandler} />

                                <div>
                                    <BlackButton type="submit">
                                        {
                                            loading ? 'Loading...' : <>
                                                Login
                                                <img src='/images/btn_arrow_img.png' alt='' />
                                            </>
                                        }
                                    </BlackButton>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login