import React from 'react';
import './Payment.css';
import { Col, Container, Row } from 'react-bootstrap';
import BlackButton from '../../../../Component/Button/BlackButton';

const Payment = () => {

  const monthlyBuyHandler = () => {
    window.location.href = 'https://buy.stripe.com/test_00g5mL4h11Q5fYY8ww'
  }

  return (
    <div className='payment_main'>
      <Container>
        <h1>Payment Page</h1>
        <h6>(allow 3 working weeks for this) All of our reviewers are
          individuals who are working in the field. We would like to
          give them ample time for a thorough review</h6>

        <Row className='justify-content-center mb-3'>
          <Col md={4}>
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
          </Col>
          <Col md={4}>
            <div className='package_main'>
              <h5>One Time Payment</h5>
              <span>$159/month</span>

              <form action="https://rmw-backend.azurewebsites.net/api/subscription/payment/onetime" method="POST">
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