import React from 'react';
import './Home.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const loginUser = JSON.parse(localStorage.getItem("user"));

    const artistHandler = () => {
        if (loginUser) {
            if (loginUser.user.role === 'artist') {
                navigate("/artist/form-submit")
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
        }
        else {
            navigate("/auth?name=reviewer")
        }
    }

    return (
        <div className='home_main'>
            <div className='banner_main'>
                <h1><span>Get your work reviewed</span> <br /> by a highly trained, <br />
                    more importantly working <br />
                    <span>professional</span>
                </h1>
            </div>

            <div className='review_btn'>
                <button onClick={artistHandler}>
                    Review my work <img src='/images/btn_arrow.png' alt='' />
                </button>
            </div>

            <Container className='home_boxes'>
                <Row>
                    <Col md={4}>
                        <div className='box_main'>
                            <img src='/images/box1.png' alt='' />
                            <p>All of our reviewers have worked at major agencies, studios, production
                                companies, television, studios, and management companies.
                                They're the exact type of people who you want to have review
                                your submitted work.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='box_main second_box'>
                            <img src='/images/box2.png' alt='' />
                            <p style={{ color: "#000", fontWeight: "500" }}>Our reviewers are the best of the bunch. Beyond their previous experience,
                                they've been selected for their knowledge ofthe movies, music and
                                scores currently in development around Hollywood. </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='box_main'>
                            <img src='/images/box3.png' alt='' />
                            <p>Our reviewers also have an understanding and commitment to the Composers
                                Annonymous's mission: to help creators find the right composer for the
                                project and just letting the msuic speak.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className='footer_banner'>
                <button onClick={reviewerHandler}>
                    Become a Reviewer <img src='/images/btn_arrow_black.png' alt='' /> </button>
            </div>
        </div>
    )
}
export default Home