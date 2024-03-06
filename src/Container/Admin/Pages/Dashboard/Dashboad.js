import axios from 'axios'
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaDollarSign } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import './Dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardGetData } from '../../../../Redux/Action/admin';
import Loader from '../../../../Util/Loader';

const Dashboad = () => {
    const dispatch = useDispatch();
    const { loading, getDashData } = useSelector((state) => state.getDashboardData)

    console.log(getDashData)

    useEffect(() => {
        dispatch(DashboardGetData())
    }, [])

    return (
        <div>
            {
                loading ? <div className='mt-5'> <Loader /> </div> :
                    <Container>
                        <Row className='m-3 main_dashboard'>
                            <Col md={4}>
                                <div className='dashboard_box make_green'>
                                    <div>
                                        <h2>Total Profit</h2>
                                        <h4>$ {getDashData?.dashboard?.profit}</h4>
                                    </div>
                                    <div> <FaDollarSign />  </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='dashboard_box make_green'>
                                    <div>
                                        <h2>Total Received</h2>
                                        <h4>$ {getDashData?.dashboard?.earning}</h4>
                                    </div>
                                    <div> <FaDollarSign /> </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='dashboard_box make_red'>
                                    <div>
                                        <h2>Total Spend</h2>
                                        <h4>$ {getDashData?.dashboard?.spend}</h4>
                                    </div>
                                    <div> <FaDollarSign /> </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='dashboard_box make_blue'>
                                    <div>
                                        <h2>Total Artist</h2>
                                        <h4>{getDashData?.dashboard?.artist}</h4>
                                    </div>
                                    <div>
                                        <FaUser />
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='dashboard_box make_blue'>
                                    <div>
                                        <h2>Paid Artist</h2>
                                        <h4>{getDashData?.dashboard?.paidArtist}</h4>
                                    </div>
                                    <div>
                                        <FaUser />
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='dashboard_box make_blue'>
                                    <div>
                                        <h2>UnPaid Artist</h2>
                                        <h4>{getDashData?.dashboard?.unPaidArtist}</h4>
                                    </div>
                                    <div>
                                        <FaUser />
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='dashboard_box light_blue'>
                                    <div>
                                        <h2>Total Reviewer</h2>
                                        <h4>{getDashData?.dashboard?.reviewer}</h4>
                                    </div>
                                    <div>
                                        <FaUser />
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='dashboard_box light_blue'>
                                    <div>
                                        <h2>Active Reviewer</h2>
                                        <h4>{getDashData?.dashboard?.activeReviewer}</h4>
                                    </div>
                                    <div>
                                        <FaUser />
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='dashboard_box light_blue'>
                                    <div>
                                        <h2>InActive Reviewer</h2>
                                        <h4>{getDashData?.dashboard?.inActiveReviewer}</h4>
                                    </div>
                                    <div>
                                        <FaUser />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            }
        </div>
    )
}

export default Dashboad