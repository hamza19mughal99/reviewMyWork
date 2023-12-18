import React from 'react';
import './Payment.css';
import { Col, Container, Row } from 'react-bootstrap';
import BlackButton from '../../../../Component/Button/BlackButton';

const Payment = () => {

  let userFound = JSON.parse(localStorage.getItem('user'))

  return (
    <div className='payment_main'>
      <Container>
        <h1>Payment Page</h1>

        <Row className='justify-content-center mb-3'>
          {/* <Col md={4}>
            <div className='package_main'>
              <h5>Subscription</h5>
              <span>$59/month</span>
              <b>unlimted Reviews</b>
              <form action="https://rmw-backend.azurewebsites.net/api/subscription/payment/monthly" method="POST">
                <div className='buy_btn'>
                  <BlackButton type={"submit"}>
                    Buy
                    <img src='/images/btn_arrow_img.png' alt='' />
                  </BlackButton>
                </div>
              </form>
            </div>
          </Col> */}
          <Col md={5}>
            <div className='package_main'>
              <h5>{userFound?.user?.planType.planName}</h5>
              <span>{userFound?.user?.planType.amount}$</span>

              {/* http://localhost:4000/ */}
              {/* https://rmw-backend.azurewebsites.net/ */}
              <form action={`https://rmw-backend.azurewebsites.net/api/subscription/payment/onetime?planId=${userFound?.user?.planType?._id}`} method="POST">
                <div className='buy_btn'>
                  <BlackButton type={"submit"}>
                    Buy
                    <img src='/images/btn_arrow_img.png' alt='' />
                  </BlackButton>
                </div>
              </form>
            </div>
          </Col>
        </Row>

        <p>
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
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
          minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
          aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
          at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
          delenit augue duis dolore te feugait nulla facilisi.
          <br />
          <br />
        </p>
      </Container>
    </div>
  )
}

export default Payment