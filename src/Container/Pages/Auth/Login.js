import React, { useEffect, useState } from 'react';
import './Auth.css';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import BlackButton from '../../../Component/Button/BlackButton';
import Input from '../../../Component/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthLogin } from '../../../Redux/Action/auth';
import { errorNotify, successNotify } from '../../../Util/Toast';
import SpinLoader from '../../../Util/SpinLoader';

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
        if (getLoginData) {
            successNotify("Login Successfully!")
            dispatch({ type: "LOGIN_RESET" })

            setLogin({
                email: "",
                password: "",
            })

            if (getLoginData?.user?.role === 'artist') {
                navigate('/artist/form-submit')
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
                            {/* <img src='/images/login_left.png' alt='' style={{ height: "88vh", objectFit: "cover" }} /> */}
                        </div>
                    </Col>

                    <Col md={6} className='p-0'>
                        <div className='signup_form'>
                            <h1>Log In</h1>

                            <Form onSubmit={submitHandler}>
                                <Input isRequired={true} label="Email Address" type="email" name='email'
                                    placeholder="Enter email Address" value={login.email} onChange={inputHandler} />
                                <Input isRequired={true} label="Password" type="password" name="password"
                                    placeholder="Enter Password" value={login.password} onChange={inputHandler} />
                                {/* <h6>Forgot Password?</h6> */}

                                <Row>
                                    <Col md={4}>
                                        {
                                            loading ? <SpinLoader /> :
                                                <BlackButton type="submit">
                                                    Login
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

export default Login