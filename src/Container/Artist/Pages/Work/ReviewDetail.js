import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ArtistGetWork } from '../../../../Redux/Action/artist';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../../Util/Loader';
import { Col, Container, Row } from 'react-bootstrap';
import ReactToPrint from "react-to-print";
import './Work.css';
import BlackButton from '../../../../Component/Button/BlackButton';

const ReviewDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const componentRef = useRef();
    const [workDetail, setWorkDetail] = useState({})

    const pagestyle = "@page { size: 2.5in 4in }"

    const userFound = JSON.parse(localStorage.getItem('user'))
    const { loading, artistGetWorkData } = useSelector((state) => state.getArtistWork)

    useEffect(() => {
        dispatch(ArtistGetWork(userFound.user._id))
    }, [])

    useEffect(() => {
        if (artistGetWorkData) {
            const findWork = artistGetWorkData?.data?.find((d) => d._id === id)
            setWorkDetail(findWork)
        }
    }, [artistGetWorkData])

    return (
        <div>
            {
                loading ? <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Loader />
                </div> :
                    <Container>
                        <div className='review_detail_data' ref={componentRef}>
                            <h1 className='mb-5'>Review Detail</h1>

                            <div className='mb-4 d-flex justify-content-around'>
                                <h6>File Name:  <span>{workDetail?.fileName}</span> </h6>
                                <h6>Review By:  <span>{workDetail?.reviewedData?.reviewer?.fullName}</span> </h6>
                            </div>

                            <div className='mb-4 justify-content-center'>
                                    <h4>Score: <span>{workDetail?.score}</span></h4>
                            </div>

                            <Row>
                                <Col md={12} className='mb-2'>
                                    <h5><span>Q1-</span> What is your first impression of the work?</h5>
                                    <hr />
                                    <p>{workDetail?.reviewedData?.impression}</p>
                                </Col>
                                <Col md={12} className='mb-2'>
                                    <h5><span>Q2-</span> What was your impression of the sequencing attribtutes?</h5>
                                    <hr />
                                    <p>{workDetail?.reviewedData?.attributes}</p>
                                </Col>
                                <Col md={12} className='mb-2'>
                                    <h5><span>Q3-</span> How did the work develop through your obsevation?</h5>
                                    <hr />
                                    <p>{workDetail?.reviewedData?.obsevation}</p>
                                </Col>
                                <Col md={12} className='mb-2'>
                                    <h5><span>Q4-</span> Is this work ready for release in to the world?</h5>
                                    <hr />
                                    <p>{workDetail?.reviewedData?.world}</p>
                                </Col>
                                <Col md={12} className='mb-2'>
                                    <h5>Any other comments?</h5>
                                    <hr />
                                    <p>{workDetail?.reviewedData?.comment}</p>
                                </Col>
                            </Row>
                        </div>

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
                    </Container>
            }
        </div >
    )
}

export default ReviewDetail