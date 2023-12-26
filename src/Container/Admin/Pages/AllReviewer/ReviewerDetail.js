import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import BlackButton from '../../../../Component/Button/BlackButton';
import Input from '../../../../Component/Input/Input';
import { errorNotify, successNotify } from '../../../../Util/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ReviewerGet, UserUpdate } from '../../../../Redux/Action/admin';
import Loader from '../../../../Util/Loader';
import SpinLoader from '../../../../Util/SpinLoader';

const ReviewerDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams()

  const [getUserData, setGetUserData] = useState({})

  const { loading, getUserUpdateData, error } = useSelector((state) => state.userGetData)
  const { loading: getLoading, getReviewerData } = useSelector((state) => state.reviewerData)

  useEffect(() => {
    dispatch(ReviewerGet())
  }, [])

  useEffect(() => {
    if (getReviewerData) {
      let getUser = getReviewerData?.users?.filter((u) => u._id === id)
      setGetUserData(getUser[0])
    }
  }, [getReviewerData])

  useEffect(() => {
    if (getUserUpdateData) {
      successNotify("User Active Successfully!")
      dispatch({ type: "USER_UPDATE_RESET" })
      navigate(-1)
    }
    if (error) {
      errorNotify(error)
      dispatch({ type: "USER_UPDATE_RESET" })
    }
  }, [error, getUserUpdateData])

  const activeHandler = () => {
    let data = { id }
    dispatch(UserUpdate(data))
  }

  return (
    <div style={{ backgroundColor: "#eff0f0a1" }}>
      <Container fluid>
        <Row>
          {
            getLoading ? <Loader /> :
              <Col md={12} className='p-0'>
                <div className='signup_form'>

                  <div className='d-flex justify-content-end'>
                    <BlackButton onClick={() => navigate(-1)}>
                      Back
                      <img src='/images/btn_arrow_img.png' alt='' />
                    </BlackButton>
                  </div>

                  <h1 className='text-center'>Reviewer Detail</h1>

                  <Input disable={true} type="text" label="Full Name" name='fullName' value={getUserData.fullName} />
                  <Input disable={true} type="email" label="Email Address" name='email' value={getUserData.email} />

                  <Form.Group className="mb-3">
                    <Form.Label>Link to your previous work <br />
                    </Form.Label>
                    {getUserData?.previousWork?.map((work, index) => (
                      <Form.Control type="text" className='mb-1' key={index}
                        value={work.links}
                        disabled
                      />
                    ))}
                  </Form.Group>
                  <Input disable={true} type="text" label="Profession" name="password" value={getUserData?.profession?.professionName} />

                  <Input type="textarea" rows={3} label="In a few words tell us about yourself"
                    name='about' value={getUserData?.about} disable={true}
                  />
                  {
                    !getUserData?.isActive && <div className='d-flex justify-content-end'>
                      {
                        loading ? <SpinLoader /> :
                          <BlackButton onClick={activeHandler}>
                            Approve
                            <img src='/images/btn_arrow_img.png' alt='' />
                          </BlackButton>
                      }
                    </div>
                  }
                </div>
              </Col>
          }
        </Row>
      </Container>
    </div>
  )
}
export default ReviewerDetail