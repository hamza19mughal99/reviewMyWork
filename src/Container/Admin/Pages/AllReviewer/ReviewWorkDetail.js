import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
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
    const [planType, setPlanType] = useState('')
    const [questions, setQuestions] = useState([])

    const searchParams = new URLSearchParams(location.search);
    const getId = searchParams.get('getId');

    const pagestyle = "@page { size: 2.5in 4in }"

    const { loading, reviewerGetWorkData } = useSelector((state) => state.reviewGetData)

    useEffect(() => {
        dispatch(ReviewGetWork(getId))
    }, [])

    useEffect(() => {
        if (reviewerGetWorkData) {
            const getWork = reviewerGetWorkData?.data?.find((d) => d._id === id)
            setWorkDetail(getWork)
            setPlanType(getWork.artist.planType.planName)

            if (getWork.artist.planType.planName === "Quick Peek") {
                setQuestions([
                    'First Impressions: What feelings or ideas does the music evoke when you first listen to it? Which musical element most contributes to this?',
                    'Melody and Harmony Analysis: How do the melody and harmony work together? Is there a balance between tension and release?',
                    'Rhythmic Structure: How does the rhythm contribute to the overall feel and flow of the piece? Are there any particularly effective uses of rhythm or tempo changes?',
                    'Originality and Creativity: What aspects of the composition are most unique or creative? How does the composer’s personal style shine through?',
                    'Areas for Growth: Can you suggest specific areas for improvement or exploration in future compositions?',
                    'Encouraging Insight: What is the most exciting or compelling aspect of this composition? Encourage continued creativity and exploration.'
                ])
            }
            else if (getWork.artist.planType.planName === 'Comprehensive Review') {
                setQuestions([
                    'Technical Proficiency: Assess the composer’s technical execution in terms of melody, harmony, rhythm, and dynamics. Where do their strengths lie, and what suggests areas for growth?',
                    'Thematic Depth: Explore the themes or stories behind the music. How effectively are they communicated? What underlying messages or emotions are conveyed?',
                    'Emotional Engagement: Describe the emotional journey of the piece. How does it connect with and impact the listener?',
                    'Innovation and Influence: Identify elements that show innovation or a unique approach. How do these aspects enhance the overall composition?',
                    'Contextual Placement: Consider the piece’s place within its musical genre or the broader musical tradition. How does it contribute to, challenge, or expand on existing musical narratives?',
                    'Personalized Advancement Plan: Offer a detailed plan or suggestions for the composer’s technical and creative development, based on your analysis.'
                ])
            }
            else if (getWork.artist.planType.planName === 'Express Review') {
                setQuestions([
                    'Immediate Highlight: What element of the music stands out immediately, and why?',
                    'Core Strengths Brief: What are the key strengths of the composition, such as melody, harmony, rhythm, or dynamics?',
                    'Swift Improvement Suggestions: Offer one or two quick, actionable suggestions for improvement.',
                    "Motivational Note: Provide a brief word of encouragement that acknowledges the composer's effort and potential."
                ])
            }
            else if (getWork.artist.planType.planName === "Express Comprehensive Review") {
                setQuestions([
                    "Immediate Technical and Creative Impressions: Share your initial thoughts on both the technical and creative aspects of the composition. What stands out?",
                    "Concept and Communication: How clearly and effectively is the main idea or emotion of the piece communicated?",
                    "Emotional and Intellectual Connection: Describe your immediate emotional or intellectual response to the piece. How does the composition achieve this connection?",
                    "Distinctive Features: Identify the most compelling or innovative feature of the composition.",
                    "Focused Development Advice: Provide focused advice for the composer’s next steps in both technical skill and creative expression.",
                    "Quick Encouragement and Forward Steps: End with positive reinforcement and suggest a specific direction for the composer's next project."
                ])
            }
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
                                                <h5><span>Q1-</span> {questions[0]}</h5>
                                                <p><span>Ans - </span> {workDetail?.reviewedData?.question1}</p>
                                            </Col>
                                            <Col md={6} className='mb-2'>
                                                <h5><span>Q2-</span> {questions[1]}</h5>
                                                <p><span>Ans - </span> {workDetail?.reviewedData?.question2}</p>
                                            </Col>
                                            <Col md={6} className='mb-2'>
                                                <h5><span>Q3-</span> {questions[2]}</h5>
                                                <p><span>Ans - </span> {workDetail?.reviewedData?.question3}</p>
                                            </Col>
                                            <Col md={6} className='mb-2'>
                                                <h5><span>Q4-</span> {questions[3]}</h5>
                                                <p><span>Ans - </span> {workDetail?.reviewedData?.question4}</p>
                                            </Col>
                                            {
                                                planType !== 'Express Review' &&
                                                <>
                                                    <Col md={6} className='mb-2'>
                                                        <h5><span>Q5-</span> {questions[4]}</h5>
                                                        <p><span>Ans - </span> {workDetail?.reviewedData?.question5}</p>
                                                    </Col>
                                                    <Col md={6} className='mb-2'>
                                                        <h5><span>Q6-</span> {questions[5]}</h5>
                                                        <p><span>Ans - </span> {workDetail?.reviewedData?.question6}</p>
                                                    </Col>
                                                </>
                                            }
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