import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Modal, Row } from 'react-bootstrap';
import BlackButton from '../../../../../Component/Button/BlackButton';
import Input from '../../../../../Component/Input/Input';
import { errorNotify, successNotify } from '../../../../../Util/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArtistWork, OneTimePayment, SubsPayment } from '../../../../../Redux/Action/artist';
import Loader from '../../../../../Util/Loader';
import '../FileSubmit.css';
import SpinLoader from '../../../../../Util/SpinLoader';

const SubmitForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const isSuccess = searchParams.get('success');
    const isMonthly = searchParams.get('payment');
    const planId = searchParams.get('planId');
    const [showModal, setShowModal] = useState(false)

    let userFound = JSON.parse(localStorage.getItem('user'))
    // const isSubmission = JSON.parse(localStorage.getItem('isSubmission'))

    const [workForm, setWorkForm] = useState({
        fileName: '',
        fileUrl: ''
    })
    const [fileType, setFileType] = useState('fileLink')
    const [fileSelect, setFileSelect] = useState(null)
    const [fileDetailed, setFileDetailed] = useState('')

    const { loading: postLoading, artistWorkData, error: postError } = useSelector((state) => state.postArtistWork)
    const { loading, subPayData } = useSelector((state) => state.postSubscription)
    const { loading: oneLoading, oneTimeData } = useSelector((state) => state.postOneTimePayment)

    useEffect(() => {
        // if (!userFound.user.paymentStatus && isSuccess && isMonthly === 'monthly') {
        //     let data = { artistId: userFound?.user?._id, planId: planId }
        //     dispatch(SubsPayment(data))
        // }

        if (!userFound.user.paymentStatus && isSuccess && isMonthly === 'onetime') {
            let data = { artistId: userFound?.user?._id, planId: planId }
            dispatch(OneTimePayment(data))
        }
    }, [])

    useEffect(() => {
        if (subPayData) {
            successNotify(subPayData?.message)

            if (userFound && userFound.user) {
                userFound.user.paymentStatus = true;
                localStorage.setItem("user", JSON.stringify(userFound));
            }

            dispatch({ type: 'SUBSCRIPTION_RESET' })
        }

        if (oneTimeData) {
            successNotify(oneTimeData?.message)

            if (userFound && userFound.user) {
                userFound.user.paymentStatus = true;
                localStorage.setItem("user", JSON.stringify(userFound));
            }

            dispatch({ type: 'ONE_TIME_RESET' })
        }
    }, [subPayData, oneTimeData])

    useEffect(() => {
        if (artistWorkData) {
            if (artistWorkData?.status === 1) {
                successNotify("Created Successfully!!")
                dispatch({ type: "ARTIST_WORK_RESET" })
                navigate('/artist/work')
            }
            else {
                successNotify("Created Successfully!!")
                dispatch({ type: "ARTIST_WORK_RESET" })
                setShowModal(true)
            }
        }
        else if (postError) {
            errorNotify(postError)
            dispatch({ type: "ARTIST_WORK_RESET" })
        }
    }, [artistWorkData, postError])

    const inputHandler = (e) => {
        setWorkForm({
            ...workForm,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (fileType === 'fileLink') {
            if (workForm.fileName.length === 0 || !fileSelect) {
                errorNotify("Please filled up fields")
                return
            }

            const artistData = new FormData();
            artistData.append("artistId", userFound.user._id)
            artistData.append("fileName", workForm.fileName)
            artistData.append("profession", userFound?.user?.profession?.professionName)
            artistData.append("mpFile", fileSelect)
            artistData.append("fileDetailed", fileDetailed)
            artistData.append("fileUrl", '')
            artistData.append("fileType", fileType)

            dispatch(ArtistWork(artistData))
        }

        else if (fileType === 'url') {
            if (workForm.fileName.length === 0 || workForm.fileUrl.length === 0) {
                errorNotify("Please filled up fields")
                return
            }

            let isHttp = workForm.fileUrl?.startsWith("http://") || workForm.fileUrl?.startsWith("https://")
            if (!isHttp) {
                errorNotify("The File url must be correct")
                return;
            }

            const artistData = new FormData();
            artistData.append("artistId", userFound.user._id)
            artistData.append("fileName", workForm.fileName)
            artistData.append("profession", userFound?.user?.profession?.professionName)
            artistData.append("fileDetailed", fileDetailed)
            artistData.append("fileUrl", workForm.fileUrl)
            artistData.append("fileType", fileType)

            dispatch(ArtistWork(artistData))
        }
    }

    const modal = <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='loginModal'>
            <h5>Your Work has been Created!!</h5>
            <p>Thank you for submitting your work. The status of work is <span>Pending </span>
                Once you done your <span>payment</span>. One of our team members will review your work
                and assign it for review.</p>

            <div className='d-flex justify-content-center mt-5'>
                <BlackButton onClick={() => navigate('/artist/payment')}>
                    Payment Now
                    <img src='/images/btn_arrow_img.png' alt='' />
                </BlackButton>
            </div>
        </Modal.Body>
    </Modal>

    const handleFileSelect = (e) => {
        const file = e.target.files[0];

        if (file) {
            const allowedTypes = ['application/pdf', 'audio/mpeg', 'image/png', 'text/plain', 'video/mp4'];
            const maxSizeInBytes = 5 * 1024 * 1024;

            if (allowedTypes.includes(file.type) && file.size <= maxSizeInBytes) {
                setFileSelect(file);
            }
            else {
                let errorMessage = 'Invalid file. ';
                if (!allowedTypes.includes(file.type)) {
                    errorMessage += 'Please select a PDF, MP3, MP4, PNG, or TXT file. ';
                }
                if (file.size > maxSizeInBytes) {
                    errorMessage += 'File size should be within 5MB.';
                }
                errorNotify(errorMessage);
                e.target.value = null;
            }
        }
    };

    return (
        <div style={{ backgroundColor: "#eff0f0a1", minHeight: "81vh" }}>
            {modal}
            <Container fluid>
                {
                    loading || oneLoading ? <div className='my-5'> <Loader /> </div> :
                        <Row className='justify-content-center'>
                            <Col md={8} className='p-0'>
                                <div className='signup_form submit_work' style={{ height: "auto" }}>
                                    <h1 className='text-center'>Submit Work Form ( {userFound?.user?.profession?.professionName} )</h1>

                                    <p> All of our reviewers are
                                        individuals who are working in the field. We would like to
                                        give them ample time for a review</p>

                                    <Form onSubmit={submitHandler}>
                                        <Row>
                                            <Col md={12}>
                                                <div className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="Upload File"
                                                        name="fileType"
                                                        checked={fileType === 'fileLink'}
                                                        value="fileLink"
                                                        type="radio"
                                                        onChange={(e) => setFileType(e.target.value)}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Live Url"
                                                        name="fileType"
                                                        checked={fileType === 'url'}
                                                        value="url"
                                                        type="radio"
                                                        onChange={(e) => setFileType(e.target.value)}
                                                    />
                                                </div>
                                            </Col>
                                            {
                                                fileType === 'fileLink' ?
                                                    <Col md={12}>
                                                        <Input type="file" label="Upload File (PDF, MP3, MP4, PNG, or TXT)"
                                                            accept=".pdf, .mp3, .mp4, .png, .txt" onChange={handleFileSelect} />
                                                    </Col> :
                                                    <Col md={12}>
                                                        <Input type="text" label="Work File Url (Live link should be working perfectly)" name='fileUrl'
                                                            value={workForm.fileUrl} onChange={inputHandler} />
                                                    </Col>
                                            }
                                            <Col md={12}>
                                                <Input type="text" label="Work File Name" name='fileName' value={workForm.fileName} onChange={inputHandler} />
                                            </Col>
                                        </Row>
                                        <div className='d-flex justify-content-end'>
                                            {
                                                postLoading ? <SpinLoader /> :
                                                    <BlackButton>
                                                        Create
                                                        <img src='/images/btn_arrow_img.png' alt='' />
                                                    </BlackButton>
                                            }
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                }
            </Container>
        </div>
    )
}
export default SubmitForm