import React, { useEffect } from 'react';
import './Home.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { errorNotify } from '../../../Util/Toast';
import PleaseWaitLoader from '../../../Util/PleaseWaitLoader';
import { useDispatch, useSelector } from 'react-redux';
import { EditHomeGet } from '../../../Redux/Action/EditPages';
import { cloudUrl } from '../../../Util/Helper';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginUser = JSON.parse(localStorage.getItem("user"));

    const { loading, getHomeEditData } = useSelector((state) => state.getEditHome)

    useEffect(() => {
        dispatch(EditHomeGet())
    }, [])

    const artistHandler = () => {
        if (loginUser) {
            if (loginUser.user.role === 'artist') {
                navigate("/artist/form-submit")
            }
            else {
                errorNotify("You are already loggedIn")
            }
        }
        else {
            navigate("/auth?name=artist")
        }
    }

    const reviewerHandler = () => {
        if (loginUser) {
            if (loginUser.user.role === 'reviewer') {
                navigate("/reviewer/work")
            }
            else {
                errorNotify("You are already loggedIn")
            }
        }
        else {
            navigate("/auth?name=reviewer")
        }
    }

    return (
        <div className='home_main'>
            {
                loading ?
                    <PleaseWaitLoader /> :
                    <>
                        <div className='banner_main'>
                            <h1>{getHomeEditData?.data[0]?.bannerText}</h1>
                            <button onClick={artistHandler} className='home_banner_btn'>
                                Review my work <img src='/images/btn_arrow_black.png' alt='' />
                            </button>
                        </div>

                        <Container className='home_boxes'>
                            <Row>
                                {
                                    getHomeEditData?.data[0]?.services?.map((s) => {
                                        return (
                                            <Col md={4}>
                                                <div className='box_main'>
                                                    <img src={`${cloudUrl}${s.mainImg.filename}`} alt='' />
                                                    <p>{s.mainHeading}</p>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Container>

                        <div className='footer_banner'>
                            <button onClick={reviewerHandler}>
                                Become a Reviewer <img src='/images/btn_arrow_black.png' alt='' /> </button>
                        </div>
                    </>
            }
        </div>
    )
}
export default Home