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
import moment from 'moment';
import MuiDataTable from '../../../../Component/MuiDataTables/MuiDataTables';

const ReviewerDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams()

  const [getUserData, setGetUserData] = useState({})
  const [getUserWork, setGetUserWork] = useState([])

  const { loading, getUserUpdateData, error } = useSelector((state) => state.userGetData)
  const { loading: getLoading, getReviewerData } = useSelector((state) => state.reviewerData)

  useEffect(() => {
    dispatch(ReviewerGet())
  }, [])

  useEffect(() => {
    if (getReviewerData) {
      let getUser = getReviewerData?.users?.find((u) => u.user._id === id)
      setGetUserData(getUser.user)
      setGetUserWork(getUser?.work)
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

  const downloadPdf = (getId) => {
    console.log(getId)
    navigate(`/admin/all-review/work/${getId}?getId=${id}`);
  }

  const dashboardCols = [
    {
      name: "_id",
      options: {
        display: false,
      },
    },
    { name: 'fileName', label: "Work Name" },
    { name: "createdAt", label: "Submission Date" },
    { name: "score", label: "Submission Score" },
    {
      name: "isReviewed", label: 'Review',
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <p style={{ marginBottom: '0px', color: "green", fontWeight: "600" }}>
              {
                value && 'Review Submitted!'
              }
            </p>
          );
        },
      },
    },
    {
      name: "View", label: 'View',
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <div style={{ display: "flex", alignItems: "center", gap: '10px' }}>
              <BlackButton onClick={() => downloadPdf(tableMeta?.rowData[0])}>
                <img src='/images/btn_arrow_img.png' alt='' /> </BlackButton>
            </div>
          );
        },
      },
    }
  ];

  const data = getUserWork?.map((a) => {
    return {
      _id: a?._id,
      fileName: a?.fileName,
      createdAt: moment(a?.createdAt).format('LL'),
      score: a?.score,
      isReviewed: a?.isReviewed
    }
  })

  return (
    <div style={{ backgroundColor: "#eff0f0a1" }}>
      <Container fluid>
        <Row>
          {
            getLoading ? <Loader /> :
              <>
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
                <Col md={12}>
                  <h1 className='text-center' style={{ fontSize: "40px", fontWeight: "700", marginBottom: "30px" }}>
                    Reviewer Work
                  </h1>

                  <div style={{ marginBottom: "30px" }}>
                    <MuiDataTable data={data} columns={dashboardCols} />
                  </div>
                </Col>
              </>
          }
        </Row>
      </Container>
    </div>
  )
}
export default ReviewerDetail