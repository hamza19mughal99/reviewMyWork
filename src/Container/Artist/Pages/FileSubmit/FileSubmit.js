import React, { useState } from 'react';
import './FileSubmit.css';
import { Container, Modal } from 'react-bootstrap';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useNavigate } from 'react-router-dom';
import { errorNotify } from '../../../../Util/Toast';

const FileSubmit = () => {
  const navigate = useNavigate();
  const userFound = JSON.parse(localStorage.getItem('user'))

  const [showModal, setShowModal] = useState(false)

  const submitWork = () => {

    if (!userFound) {
      setShowModal(!showModal)
      return
    }

    if (userFound?.user?.paymentStatus) {
      navigate('/artist/form-submit')
    }
    else {
      errorNotify("Please complete your payment first")
      navigate('/artist/payment')
    }
  }

  const pageHandler = () => {
    // localStorage.setItem("isSubmission", JSON.stringify(true))
    navigate("/auth?name=artist")
  }

  const modal = <Modal show={showModal} onHide={() => setShowModal(false)}>
    <Modal.Header closeButton>
    </Modal.Header>
    <Modal.Body className='loginModal'>
      <h5>In Order to Proceed to Payment Page or Submit your Work you need to <br /> <span>Login or Register First</span></h5>

      <div className='d-flex justify-content-center mt-5'>
        <BlackButton onClick={pageHandler}>
          Login OR Register
          <img src='/images/btn_arrow_img.png' alt='' />
        </BlackButton>
      </div>
    </Modal.Body>
  </Modal>

  return (
    <div className='file_submit_main'>
      {modal}
      <Container>
        <h1>Submission Page</h1>
        <h6>(allow 3 working weeks for this) All of our reviewers are
          individuals who are working in the field. We would like to
          give them ample time for a thorough review</h6>

        <div className='d-flex justify-content-center mt-5 mb-5'>
          <BlackButton style={{ padding: "11px 35px" }} onClick={submitWork}> Submit
            <img src='/images/btn_arrow_img.png' alt='' /> </BlackButton>
        </div>

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

export default FileSubmit