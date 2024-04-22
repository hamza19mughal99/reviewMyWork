import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className='footer_main'>
      <Container>
        <Row>
          <Col md={4}>
            <img src='/images/main_logo.png' alt='' className='main_logo' />
            <h5>Review your work with the best Professionals.</h5>
          </Col>
          <Col md={2}>
            <h6>Quick Links</h6>
            <ul>
              <li onClick={() => navigate('/')}>- Home</li>
              <li onClick={() => navigate('/about')}>- About Us</li>
              <li onClick={() => navigate('/services')}>- Services</li>
              <li onClick={() => navigate('/testimonials')}>- Testimonials</li>
              <li onClick={() => navigate('/contact')}>- Contact Us</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Information </h6>
            <ul>
              <li onClick={() => navigate('/faqs')}>- FAQs</li>
              <li onClick={() => navigate('/privacy-policy')}>- Privacy Policy</li>
              <li onClick={() => navigate('/terms-use')}>- Terms Of Use</li>
              <li onClick={() => navigate('/copyright')}>- Copyright Notice</li>
              <li onClick={() => navigate('/submission-guidelines')}>- Submission Guidelines</li>
              <li onClick={() => navigate('/submission-agreement')}>- Submission Agreement</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Social Media</h6>

            <div style={{ marginTop: "20px" }}>
              <a href='https://www.instagram.com/reviewmywork_/' target='_blank'>
                <FaInstagram />
              </a>
              <a href="mailto:BonjourRMW@gmail.com">
                <HiOutlineMail />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <p>© 2024 Review my work. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
