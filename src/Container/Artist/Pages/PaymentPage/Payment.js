import React, { useEffect } from 'react';
import './Payment.css';
import { Col, Container, Row } from 'react-bootstrap';
import BlackButton from '../../../../Component/Button/BlackButton';
import { PlanGet } from '../../../../Redux/Action/admin';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../../Util/Loader';

const Payment = () => {
  const dispatch = useDispatch();

  let userFound = JSON.parse(localStorage.getItem('user'))

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
                getPlanData?.PlanGet?.map((p) => {
                  return (
                    <Col md={5}>
                      <div className='package_main'>
                        <h5>{p.planName}</h5>
                        <span>{p.amount}$</span>

                        {/* http://localhost:4000/ */}
                        {/* https://rmw-backend.azurewebsites.net/ */}
                        <form action={`https://rmw-backend.azurewebsites.net/api/subscription/payment/onetime?planId=${p?._id}`} method="POST">
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