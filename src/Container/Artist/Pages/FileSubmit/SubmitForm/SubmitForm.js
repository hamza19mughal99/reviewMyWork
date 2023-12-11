import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Modal, Row } from 'react-bootstrap';
import BlackButton from '../../../../../Component/Button/BlackButton';
import Input from '../../../../../Component/Input/Input';
import { errorNotify, successNotify } from '../../../../../Util/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArtistWork, OneTimePayment, SubsPayment } from '../../../../../Redux/Action/artist';
import Loader from '../../../../../Util/Loader';

const SubmitForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const isSuccess = searchParams.get('success');
    const isMonthly = searchParams.get('payment');
    const [showModal, setShowModal] = useState(false)

    let userFound = JSON.parse(localStorage.getItem('user'))
    // const isSubmission = JSON.parse(localStorage.getItem('isSubmission'))

    const [workForm, setWorkForm] = useState({
        fileName: '',
        fileUrl: ''
    })
    const [fileType, setFileType] = useState('mp4')
    const [fileSelect, setFileSelect] = useState(null)

    const { loading: postLoading, artistWorkData, error: postError } = useSelector((state) => state.postArtistWork)
    const { loading, subPayData } = useSelector((state) => state.postSubscription)
    const { loading: oneLoading, oneTimeData } = useSelector((state) => state.postOneTimePayment)

    useEffect(() => {
        if (!userFound.user.paymentStatus && isSuccess && isMonthly === 'monthly') {
            let data = { artistId: userFound?.user?._id }
            dispatch(SubsPayment(data))
        }

        else if (!userFound.user.paymentStatus && isSuccess && isMonthly === 'onetime') {
            let data = { artistId: userFound?.user?._id }
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

        if (fileType === 'mp4') {
            if (workForm.fileName.length === 0 || !fileSelect) {
                errorNotify("Please filled up fields")
                return
            }

            const artistData = new FormData();
            artistData.append("artistId", userFound.user._id)
            artistData.append("fileName", workForm.fileName)
            artistData.append("mpFile", fileSelect)
            artistData.append("fileUrl", '')
            artistData.append("fileType", fileType)

            dispatch(ArtistWork(artistData))
        }

        else if (fileType === 'url') {
            if (workForm.fileName.length === 0 || workForm.fileUrl.length === 0) {
                errorNotify("Please filled up fields")
                return
            }

            const artistData = new FormData();
            artistData.append("artistId", userFound.user._id)
            artistData.append("fileName", workForm.fileName)
            // formData.append("mpFile", '')
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
            <p>Right Now the status of work is <span>Pending</span> and it is <span>hide</span> to
                Reviewer. For Review your work you need to do <span>Payment</span>.</p>

            <div className='d-flex justify-content-center mt-5'>
                <BlackButton onClick={() => navigate('/artist/payment')}>
                    Payment Now
                    <img src='/images/btn_arrow_img.png' alt='' />
                </BlackButton>
            </div>
        </Modal.Body>
    </Modal>

    return (
        <div style={{ backgroundColor: "#eff0f0a1", minHeight: "81vh" }}>
            {modal}
            <Container fluid>
                {
                    loading || oneLoading ? <div className='my-5'> <Loader /> </div> :
                        <Row className='justify-content-center'>
                            <Col md={8} className='p-0'>
                                <div className='signup_form submit_work' style={{ height: "auto" }}>
                                    <h1 className='text-center'>Submit Work Form</h1>

                                    <p>(allow 3 working weeks for this) All of our reviewers are
                                        individuals who are working in the field. We would like to
                                        give them ample time for a review</p>


                                    <Form onSubmit={submitHandler}>
                                        <Row>
                                            <Col md={12}>
                                                <div className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="mp4 File"
                                                        name="fileType"
                                                        checked={fileType === 'mp4'}
                                                        value="mp4"
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
                                                fileType === 'mp4' ?
                                                    <Col md={12}>
                                                        <Input type="file" label="Work File (should be mp4)" onChange={(e) => setFileSelect(e.target.files[0])} />
                                                    </Col> :
                                                    <Col md={12}>
                                                        <Input type="text" label="Work File Url (Live link should be working perfectly)" name='fileUrl' value={workForm.fileUrl} onChange={inputHandler} />
                                                    </Col>
                                            }
                                            <Col md={12}>
                                                <Input type="text" label="Work File Name" name='fileName' value={workForm.fileName} onChange={inputHandler} />
                                            </Col>
                                        </Row>
                                        <div className='d-flex justify-content-end'>
                                            <BlackButton>
                                                {
                                                    postLoading ? 'Loading...' : <>
                                                        Create
                                                        <img src='/images/btn_arrow_img.png' alt='' />
                                                    </>
                                                }
                                            </BlackButton>
                                        </div>
                                    </Form>
                                </div>

                                <p style={{ textAlign: "center", fontWeight: "500", marginBottom: "50px" }}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                                    aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                                    vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                                    at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
                                    delenit augue duis dolore te feugait nulla facilisi.
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                                    aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                                    vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                                    at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
                                    delenit augue duis dolore te feugait nulla facilisi.
                                </p>
                            </Col>
                        </Row>
                }
            </Container>
        </div>
    )
}
export default SubmitForm