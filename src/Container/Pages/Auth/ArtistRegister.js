import React, { useEffect, useState } from 'react';
import './Auth.css';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Select from 'react-select'
import BlackButton from '../../../Component/Button/BlackButton';
import Input from '../../../Component/Input/Input';
import { errorNotify, successNotify } from '../../../Util/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { AuthRegister } from '../../../Redux/Action/auth';
import { useNavigate } from 'react-router-dom';
import SpinLoader from '../../../Util/SpinLoader';
import { ProfessionGet } from '../../../Redux/Action/admin';
import { MdDelete } from "react-icons/md";

const ArtistRegister = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [register, setRegister] = useState({
        fullName: '',
        email: "",
        password: "",
        c_password: "",
        about: ""
    })
    const [profession, setProfession] = useState(null)
    const [previousWork, setPreviousWork] = useState([{
        links: ''
    }]);

    const { loading, getRegisterData, error } = useSelector((state) => state.registerData)
    const { loading: professionLoading, getProfessionData } = useSelector((state) => state.getAllProfessionData)

    const loginUser = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (loginUser) {
            if (loginUser.user.role === 'artist') {
                navigate("/artist/form-submit")
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
            setRegister({
                fullName: '',
                email: "",
                password: "",
                c_password: "",
                about: ""
            })
            setProfession({})
            setPreviousWork([{
                links: ''
            }])
            dispatch({ type: "REGISTER_RESET" })
            navigate('/login')
            successNotify("Registered Successfully!")
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

        if (register.fullName.length === 0 || register.email.length === 0 || register.password.length === 0 || register.c_password.length === 0 || register.about.length === 0 || !profession || emptyPreviousWork) {

            let errorMessage = "Please fill up empty fields: ";

            if (register.fullName.length === 0) {
                errorMessage += "Full Name, ";
            }
            if (register.email.length === 0) {
                errorMessage += "Email, ";
            }
            if (register.password.length === 0) {
                errorMessage += "Password, ";
            }
            if (register.c_password.length === 0) {
                errorMessage += "Confirm Password, ";
            }
            if (register.about.length === 0) {
                errorMessage += "About, ";
            }
            if (!profession) {
                errorMessage += "Profession, ";
            }
            if (emptyPreviousWork) {
                errorMessage += "Previous Work, ";
            }
            errorMessage = errorMessage.slice(0, -2);
            errorNotify(errorMessage);
            return;
        }

        if (register.password !== register.c_password) {
            errorNotify("Password and Confirm Password must be same");
            return
        }

        let isHttp = previousWork?.every((v) => {
            return v?.links?.startsWith("http://") || v?.links?.startsWith("https://") || v?.links?.startsWith("www.")
        });

        if (!isHttp) {
            errorNotify("The website must be correct")
            return;
        }

        let data = {
            ...register,
            profession: profession.value,
            previousWork,
            role: "artist",
            isActive: true
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

    const deleteInputHandler = (i) => {
        const updatedWork = [...previousWork];
        updatedWork.splice(i, 1);
        setPreviousWork(updatedWork);
    }

    return (
        <div style={{ backgroundColor: "#eff0f0a1" }}>
            <Container fluid>
                <Row>
                    <Col md={6} className='p-0'>
                        <div className='signup_left'>
                        </div>
                    </Col>

                    <Col md={6} className='p-0'>
                        <div className='signup_form'>
                            <h1>Artist Sign Up Page</h1>

                            <Form onSubmit={submitHandler}>
                                <Input isRequired={true} type="text" label="Full Name" name='fullName' value={register.fullName} onChange={inputHandler} />
                                <Input isRequired={true} type="email" label="Email Address" name='email' value={register.email} onChange={inputHandler} />
                                <Input isRequired={true} type="password" label="Password" name="password" value={register.password} onChange={inputHandler} />
                                <Input isRequired={true} type="password" label="Confirm Password" name="c_password" value={register.c_password} onChange={inputHandler} />

                                <Form.Group className="mb-3">
                                    <Form.Label>Link to your previous work <span className='req_field'>*</span> <br />
                                        <span>IMPORTANT: Make sure all your link works</span>
                                    </Form.Label>
                                    {previousWork.map((work, index) => (
                                        <div className='work_link'>
                                            <Form.Control type="text" className='mb-1'
                                                placeholder='example: www.site.com  or https://site.com'
                                                value={work.links}
                                                onChange={(event) => handleInputChange(index, event)}
                                            />
                                            {
                                                previousWork.length !== 1 &&
                                                <MdDelete onClick={() => deleteInputHandler(index)} />
                                            }
                                        </div>
                                    ))}
                                    <p onClick={handleAddMore}>+ Add More</p>
                                </Form.Group>

                                <div className="mb-3">
                                    <Form.Label>Select Profession <span className='req_field'>*</span></Form.Label>
                                    <Select options={professionOptions} placeholder="select profession" isLoading={professionLoading}
                                        className='profession_bg' onChange={(v) => setProfession(v)} />
                                </div>

                                <Input isRequired={true} type="textarea" rows={3} label="In a few words tell us about yourself"
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

export default ArtistRegister