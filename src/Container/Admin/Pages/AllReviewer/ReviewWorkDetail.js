import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ArtistGetWork } from '../../../../Redux/Action/artist';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../../Util/Loader';
import { Col, Container, Row } from 'react-bootstrap';
import ReactToPrint from "react-to-print";
import BlackButton from '../../../../Component/Button/BlackButton';
import moment from 'moment/moment';
import { cloudUrl } from '../../../../Util/Helper';
import { ReviewGetWork } from '../../../../Redux/Action/reviewer';

const ReviewWorkDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const componentRef = useRef();
    const navigate = useNavigate();
    const [workDetail, setWorkDetail] = useState({})

    const searchParams = new URLSearchParams(location.search);
    const getId = searchParams.get('getId');

    const pagestyle = "@page { size: 2.5in 4in }"

    const { loading, reviewerGetWorkData } = useSelector((state) => state.reviewGetData)

    useEffect(() => {
        dispatch(ReviewGetWork(getId))
    }, [])

    useEffect(() => {
        if (reviewerGetWorkData) {
            setWorkDetail(reviewerGetWorkData?.data?.find((d) => d._id === id))
        }
    }, [reviewerGetWorkData])

    return (
        <div>
            {
                loading ? <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Loader />
                </div> :
                    <Container className='mt-5'>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "end", gap: '10px' }}>
                            <BlackButton onClick={() => navigate(-1)}>
                                Back
                                <img src='/images/btn_arrow_img.png' alt='' /> </BlackButton>
                        </div>

                        <div ref={componentRef}>
                            <div className='reviewed_data mx-5'>
                                {
                                    workDetail?.isReviewed ?
                                        <div className='date'>
                                            Reviewed At
                                            <h5>{moment(workDetail?.updatedAt).format('LL')}</h5>
                                        </div> :
                                        <div className='date'>
                                            Created At
                                            <h5>{moment(workDetail?.createdAt).format('LL')}</h5>
                                        </div>
                                }
                                <div className='data_file'>
                                    <h6>File Name:  <span>{workDetail?.fileName}</span> </h6>
                                    {
                                        workDetail?.isReviewed &&
                                        <h6>Review By:  <span>{workDetail?.reviewedData?.reviewer?.fullName}</span> </h6>
                                    }

                                    {
                                        workDetail?.fileType === "url" ?
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <a href={workDetail?.fileUrl} target='_blank' className='live_video'>
                                                    Click Here to Watch Live Video URL/Link
                                                    <img src='/images/btn_arrow_img.png' alt='' style={{ width: "35px" }} />
                                                </a>
                                            </div>
                                            :
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <a href={`${cloudUrl}${workDetail?.mpFile?.filename}`} target='_blank' className='live_video'>
                                                    Click Here to Open File
                                                    <img src='/images/btn_arrow_img.png' alt='' style={{ width: "35px" }} />
                                                </a>
                                            </div>
                                    }

                                    {
                                        workDetail?.isReviewed &&
                                        <div className='mb-4 justify-content-center'>
                                            <h4>Score: <span>{workDetail?.score}</span></h4>
                                        </div>
                                    }
                                </div>
                            </div>

                            <hr style={{ marginBottom: "45px" }} />

                            {
                                workDetail && workDetail?.isReviewed ?
                                    <div className='data_questions mx-5'>
                                        <Row>
                                            <Col md={6} className='mb-2'>
                                                <h5><span>Q1-</span> What is your first impression of the work?</h5>
                                                <p><span>Ans - </span> {workDetail?.reviewedData?.impression}</p>
                                            </Col>
                                            <Col md={6} className='mb-2'>
                                                <h5><span>Q2-</span> What was your impression of the sequencing attribtutes?</h5>
                                                <p><span>Ans - </span> {workDetail?.reviewedData?.attributes}</p>
                                            </Col>
                                            <Col md={6} className='mb-2'>
                                                <h5><span>Q3-</span> How did the work develop through your obsevation?</h5>
                                                <p><span>Ans - </span> {workDetail?.reviewedData?.obsevation}</p>
                                            </Col>
                                            <Col md={6} className='mb-2'>
                                                <h5><span>Q4-</span> Is this work ready for release in to the world?</h5>
                                                <p><span>Ans - </span> {workDetail?.reviewedData?.world}</p>
                                            </Col>
                                            <Col md={6} className='mb-2'>
                                                <h5><span>Q5-</span> Any other comments?</h5>
                                                <p><span>Ans - </span> {workDetail?.reviewedData?.comment}</p>
                                            </Col>
                                        </Row>
                                    </div> :
                                    <div className='data_questions mx-5'>
                                        <h2>In Progress</h2>
                                    </div>
                            }
                        </div>

                        {
                            workDetail && workDetail?.isReviewed &&
                            <div className='mb-4 d-flex justify-content-end'>
                                <ReactToPrint
                                    pagestyle={pagestyle}
                                    trigger={() => (
                                        <BlackButton> Download PDF
                                            <img src='/images/btn_arrow_img.png' alt='' /></BlackButton>
                                    )}
                                    content={() => componentRef.current}
                                />
                            </div>
                        }
                    </Container>
            }
        </div>
    )
}

export default ReviewWorkDetail