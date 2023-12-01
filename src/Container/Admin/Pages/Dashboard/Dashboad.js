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

    useEffect(() => {
        dispatch(DashboardGetData())
    }, [])

    return (
        <div>
            {
                loading ? <Loader /> :
                    <Container>
                        <Row className='m-3'>
                            <Col md={6}>
                                <div className='dashboard_box make_green'>
                                    <div>
                                        <h2>Total Earning</h2>
                                        <h4>$ {getDashData?.dashboard?.earning}</h4>
                                    </div>
                                    <div> <FaDollarSign />  </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='dashboard_box make_red'>
                                    <div>
                                        <h2>Total Spend</h2>
                                        <h4>$ {getDashData?.dashboard?.spend}</h4>
                                    </div>
                                    <div> <FaDollarSign /> </div>
                                </div>
                            </Col>
                            <Col md={6}>
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
                            <Col md={6}>
                                <div className='dashboard_box make_blue'>
                                    <div>
                                        <h2>Total Reviewer</h2>
                                        <h4>{getDashData?.dashboard?.reviewer}</h4>
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