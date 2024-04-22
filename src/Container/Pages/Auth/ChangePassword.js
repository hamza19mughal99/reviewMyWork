import React, { useEffect, useState } from 'react';
import './Auth.css';
import { Col, Container, Form, Row } from 'react-bootstrap';
import BlackButton from '../../../Component/Button/BlackButton';
import Input from '../../../Component/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { UpdatePassword } from '../../../Redux/Action/auth';
import { errorNotify, successNotify } from '../../../Util/Toast';
import SpinLoader from '../../../Util/SpinLoader';

const ChangePassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const email = new URLSearchParams(location.search).get('email');
    const [login, setLogin] = useState({
        password: "",
        confirmPassword: "",
    })

    const { loading, getChangePasswordData, error } = useSelector((state) => state.changePasswordData)

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
        if (getChangePasswordData) {
            successNotify("Password Change Successfully!!")
            dispatch({ type: "CHANGE_PASSWORD_RESET" })

            setLogin({
                password: "",
                confirmPassword: "",
            })

            navigate("/login")
        }
        if (error) {
            errorNotify(error)
            dispatch({ type: "CHANGE_PASSWORD_RESET" })
        }
    }, [error, getChangePasswordData])

    const inputHandler = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (login.confirmPassword.length === 0 || login.password.length === 0) {
            errorNotify("Please filled up all fields")
            return
        }

        if (login.confirmPassword === login.password) {
            let data = {
                newPassword: login.password,
                email: email,
                token: id
            }
            dispatch(UpdatePassword(data))
        }
        else {
            errorNotify("new and confirm password are not same!")
        }
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
                            <h1>Change Password</h1>

                            <Form onSubmit={submitHandler}>
                                <Input isRequired={true} label="New Password" type="password" name="password"
                                    placeholder="Enter New Password" value={login.password} onChange={inputHandler} />
                                <Input isRequired={true} label="Confirm Password" type="password" name="confirmPassword"
                                    placeholder="Enter Confirm Password" value={login.confirmPassword} onChange={inputHandler} />

                                <Row>
                                    <Col md={12}>
                                        {
                                            loading ? <SpinLoader /> :
                                                <BlackButton type="submit">
                                                    Submit
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

export default ChangePassword