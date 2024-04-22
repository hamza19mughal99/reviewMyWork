import React, { useEffect } from 'react';
import './Payment.css';
import { Col, Container, Row } from 'react-bootstrap';
import BlackButton from '../../../../Component/Button/BlackButton';
import { PlanGet } from '../../../../Redux/Action/admin';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../../Util/Loader';

const Payment = () => {
  const dispatch = useDispatch();

  const { loading, getPlanData } = useSelector((state) => state.getAllPlanData)

  useEffect(() => {
    dispatch(PlanGet())
  }, [])

  return (
    <div className='payment_main'>
      <Container>
        <h1>Payment Page</h1>

        {
          loading ? <Loader /> :
            <Row className='justify-content-center mb-3' style={{ gap: "15px 0" }}>
              {
                getPlanData?.PlanGet?.map((p, i) => {
                  return (
                    <Col md={6}>
                      <div className='package_main'>
                        <h5>{p.planName}</h5>
                        {
                          p.planName === "Quick Peek" &&
                          <div>
                            <p>Get a quick pro look at your art. We'll chat about your style, colors, and what your piece is saying. Perfect if you're just looking for a fast hint on how to level up.</p>
                            <p>What You Get:</p>
                            <ul>
                              <li>Quick check on one piece</li>
                              <li>Advice on style, color, and vibe</li>
                              <li>Tips to make it pop</li>
                              <li>Back to you in 14-20 days</li>
                            </ul>
                          </div>
                        }
                        {
                          p.planName === "Comprehensive Review" &&
                          <div>
                            <p>Deep Dive <br />
                              Ready to really dig into your art? We'll break down everything from your technique to the feels your art gives off. Get ready for some serious growth.
                            </p>
                            <p>What You Get:</p>

                            <ul>
                              <li>Full breakdown of one piece</li>
                              <li>Deep talk on technique and feels</li>
                              <li>Personal growth plan</li>
                              <li>Back to you in 14-20 days</li>
                            </ul>
                          </div>
                        }
                        {
                          p.planName === "Express Review" &&
                          <div>
                            <p>Speedy Feedback <br />
                              In a hurry? Get the quick lowdown on your artwork. We keep it short and sweet but pack it with enough punch to push your art forward, fast.
                            </p>
                            <p>What You Get:</p>

                            <ul>
                              <li>Fast feedback on one piece</li>
                              <li>Quick hits on style and vibe</li>
                              <li>Speedy tips for improvement</li>
                              <li>Back to you in 3-5 days</li>
                            </ul>
                          </div>
                        }
                        {
                          p.planName === "Express Comprehensive Review" &&
                          <div> 
                            <p>Rapid Deep Dive  <br /> 
                            Need those in-depth insights but like, yesterday? We got you. Get the full analysis, only faster, so you can make big moves without the wait.
                            </p>
                            <p>What You Get:</p>

                            <ul>
                              <li>Quick, thorough look at one piece</li>
                              <li>Fast, deep feedback on all the things</li>
                              <li>Your next steps, pronto</li>
                              <li>Back to you in 3-5 days</li>
                            </ul>
                          </div>
                        }
                        <span>{p.amount}$</span>

                        <form action={`https://reviewmyworkbackend.azurewebsites.net/api/subscription/payment/onetime?planId=${p?._id}`} method="POST">
                          <div className='buy_btn'>
                            <BlackButton type={"submit"}>
                              Buy
                              <img src='/images/btn_arrow_img.png' alt='' />
                            </BlackButton>
                          </div>
                        </form>
                      </div>
                    </Col>
                  )
                })
              }
            </Row>
        }
      </Container>
    </div>
  )
}

export default Payment