import React, { useEffect, useState } from 'react';
import './Auth.css';
import { Col, Container, Form, Modal, Row } from 'react-bootstrap';
import BlackButton from '../../../Component/Button/BlackButton';
import WhiteButton from '../../../Component/Button/WhiteButton';
import Input from '../../../Component/Input/Input';
import { errorNotify } from '../../../Util/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { AuthRegister } from '../../../Redux/Action/auth';
import { useNavigate } from 'react-router-dom';
import { TiTick } from "react-icons/ti";
import Select from 'react-select'
import SpinLoader from '../../../Util/SpinLoader';
import { ProfessionGet } from '../../../Redux/Action/admin';

const ReviewerRegister = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [register, setRegister] = useState({
        fullName: '',
        email: "",
        password: "",
        about: ""
    })
    const [previousWork, setPreviousWork] = useState([{
        links: ''
    }]);
    const [modalStatus, setModalStatus] = useState(false)
    const [profession, setProfession] = useState(null)

    const { loading, getRegisterData, error } = useSelector((state) => state.registerData)
    const { getProfessionData } = useSelector((state) => state.getAllProfessionData)

    const loginUser = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (loginUser) {
            if (loginUser.user.role === 'artist') {
                navigate("/artist/work")
            }
            else if (loginUser.user.role === 'reviewer') {
                navigate("/reviewer/work")
            }
            else if (loginUser.user.role === 'admin') {
                navigate("/admin/dashboard")
            }
        }
    }, [loginUser])

    useEffect(() => {
        if (getRegisterData?.status === 1) {
            setModalStatus(true)

            setRegister({
                fullName: '',
                email: "",
                password: "",
                about: ""
            })
            setPreviousWork([{
                links: ''
            }])
        }
        if (error) {
            errorNotify(error)
            dispatch({ type: "REGISTER_RESET" })
        }
    }, [error, getRegisterData])

    useEffect(() => {
        dispatch(ProfessionGet())
    }, [])

    const professionOptions = getProfessionData?.ProfessionGet?.map((p) => {
        return {
            value: p._id,
            label: p.professionName
        }
    })

    const inputHandler = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        let emptyPreviousWork = previousWork.some((v) => v.links.length === 0)

        if (register.fullName.length === 0 || register.email.length === 0 || register.password.length === 0
            || register.about.length === 0 || !profession || emptyPreviousWork) {
            errorNotify("Please filled up all fields")
            return
        }

        let data = {
            ...register,
            profession: profession.value,
            previousWork,
            role: "reviewer"
        }

        dispatch(AuthRegister(data))
    }

    const handleAddMore = () => {
        setPreviousWork([...previousWork, { links: '' }]);
    };

    const handleInputChange = (index, event) => {
        const updatedWork = [...previousWork];
        updatedWork[index].links = event.target.value;
        setPreviousWork(updatedWork);
    };

    const backHandler = () => {
        dispatch({ type: 'REGISTER_RESET' })
        navigate('/')
    }

    const modal = <Modal
        show={modalStatus}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Body>
            <div className='text-center' style={{ padding: "40px 15px" }}>
                <TiTick style={{ fontSize: "60px", color: "green" }} />
                <div>
                    <h5 style={{ fontSize: "25px", fontWeight: "700", color: "green" }}>Registered Successfully!!</h5>
                    <p style={{ fontSize: "18px", fontWeight: "600", marginBottom: "0" }}>you will be reviewed by Admin. Once Admin approved you account
                        you will get email and then you can access your account</p>

                    <div className='d-flex justify-content-center mt-4'>
                        <WhiteButton onClick={backHandler}>
                            Back
                            <img src='/images/btn_arrow_img.png' alt='' />
                        </WhiteButton>
                    </div>
                </div>
            </div>
        </Modal.Body>
    </Modal>

    return (
        <div style={{ backgroundColor: "#eff0f0a1" }}>
            {modal}
            <Container fluid>
                <Row>
                    <Col md={6} className='p-0'>
                        <div className='signup_left'>
                            <img src='/images/artist_signup.png' alt='' />
                        </div>
                    </Col>

                    <Col md={6} className='p-0'>
                        <div className='signup_form'>
                            <h1>Become A Reviewer</h1>

                            <Form onSubmit={submitHandler}>
                                <Input type="text" label="Full Name" name='fullName' value={register.fullName} onChange={inputHandler} />
                                <Input type="email" label="Email Address" name='email' value={register.email} onChange={inputHandler} />
                                <Input type="password" label="Password" name="password" value={register.password} onChange={inputHandler} />

                                <Form.Group className="mb-3">
                                    <Form.Label>Link to your previous work <br />
                                        <span>IMPORTANT: Make sure all your link works</span>
                                    </Form.Label>
                                    {previousWork.map((work, index) => (
                                        <Form.Control type="text" className='mb-1'
                                            value={work.links}
                                            onChange={(event) => handleInputChange(index, event)}
                                        />
                                    ))}
                                    <p onClick={handleAddMore}>+ Add More</p>
                                </Form.Group>

                                <div className="mb-3">
                                    <Form.Label>Select Profession</Form.Label>
                                    <Select options={professionOptions} placeholder="select profession"
                                        className='profession_bg' onChange={(v) => setProfession(v)} />
                                </div>

                                <Input type="textarea" rows={3} label="In a few words tell us about yourself"
                                    name='about' value={register.about} onChange={inputHandler}
                                />

                                <h6 onClick={() => navigate('/login')}>Already have an account? login now</h6>

                                {
                                    loading ? <SpinLoader /> :
                                        <BlackButton>
                                            Submit
                                            <img src='/images/btn_arrow_img.png' alt='' />
                                        </BlackButton>
                                }
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ReviewerRegister