import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import BlackButton from '../../../../Component/Button/BlackButton';
import Input from '../../../../Component/Input/Input';
import { errorNotify, successNotify } from '../../../../Util/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ArtistGet, UserUpdate } from '../../../../Redux/Action/admin';
import Loader from '../../../../Util/Loader';
import SpinLoader from '../../../../Util/SpinLoader';
import moment from "moment";
import MuiDataTable from '../../../../Component/MuiDataTables/MuiDataTables';

const ArtistDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams()

  const [getUserData, setGetUserData] = useState({})
  const [getUserWork, setGetUserWork] = useState([])

  const { loading, getUserUpdateData, error } = useSelector((state) => state.userGetData)
  const { loading: getLoading, getArtistData } = useSelector((state) => state.artistGetData)

  useEffect(() => {
    dispatch(ArtistGet())
  }, [])

  useEffect(() => {
    if (getArtistData) {
      let getUser = getArtistData?.users?.find((u) => u.user._id === id)
      setGetUserData(getUser.user)
      setGetUserWork(getUser?.work)
    }
  }, [getArtistData])

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
    navigate(`/admin/all-artist/work/${getId}?getId=${id}`, { state: { artistId: id } });
  }

  const dashboardCols = [
    {
      name: "_id",
      options: {
        display: false,
      },
    },
    { name: 'fileName', label: "File Name" },
    { name: "createdAt", label: "Submitted Date" },
    {
      name: "score", label: 'Submission Score',
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <div>
              {
                tableMeta?.rowData[5] ? value : 0
              }
            </div>
          );
        },
      }
    },
    {
      name: "status", label: 'status',
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <div>
              {value === 'approved' ? <span style={{ color: "green" }}> {value} </span> : <span style={{ color: "yellow" }}>{value}</span>}
            </div>
          );
        },
      }
    },
    {
      name: "isReviewed", label: 'isReviewed',
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <div style={{ display: "flex", alignItems: "center", gap: '10px' }}>
              {value ?
                <p style={{ color: "green", marginBottom: "0" }}>Yes</p>
                :
                <p style={{ color: "red", marginBottom: "0" }}>No</p>
              }
            </div>
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
      isReviewed: a?.isReviewed,
      status: a.workStatus
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

                    <h1 className='text-center'>Artist Detail</h1>

                    <Row>
                      <Col md={4}>
                        <Input disable={true} type="text" label="Full Name" name='fullName' value={getUserData.fullName} />
                      </Col>
                      <Col md={4}>
                        <Input disable={true} type="email" label="Email Address" name='email' value={getUserData.email} />
                      </Col>
                      <Col md={4}>
                        <Input disable={true} type="text" label="Profession" value={getUserData?.profession?.professionName} />
                      </Col>
                      <Col md={12}>
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
                      </Col>
                      <Col md={12}>
                        <Input type="textarea" rows={3} label="In a few words tell us about yourself"
                          name='about' value={getUserData?.about} disable={true}
                        />
                      </Col>
                    </Row>
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
                    Artist Work
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
export default ArtistDetail