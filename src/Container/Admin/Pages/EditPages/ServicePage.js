import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux';
import { EditServicesGet, EditServicesUpdate } from '../../../../Redux/Action/EditPages';
import Loader from '../../../../Util/Loader';
import SpinLoader from '../../../../Util/SpinLoader';
import BlackButton from '../../../../Component/Button/BlackButton';
import { successNotify } from '../../../../Util/Toast';

const ServicePage = () => {
    const dispatch = useDispatch();
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')
    const [allServices, setAllServices] = useState([{ text: "" }])

    const { loading, getServiceEditData } = useSelector((state) => state.getServiceEdit)
    const { loading: updateLoading, updateServiceEditData } = useSelector((state) => state.updateServiceEdit)

    useEffect(() => {
        if (updateServiceEditData?.status === 1) {
            successNotify(updateServiceEditData?.message)
            dispatch(EditServicesGet());
            dispatch({ type: "SERVICE_EDIT_UPDATE_RESET" })
        }
    }, [updateServiceEditData])

    useEffect(() => {
        dispatch(EditServicesGet())
    }, [])

    useEffect(() => {
        if (getServiceEditData?.status === 1) {
            setTopText(getServiceEditData?.data?.topText)
            setBottomText(getServiceEditData?.data?.BottomText)

            let arr = [];
            getServiceEditData?.data?.serviceDetail.map((s) => {
                arr.push({ text: s.text })
            })

            setAllServices(arr)
        }
    }, [getServiceEditData])

    const handleServiceDetail = (index, value) => {
        const newService = [...allServices];
        newService[index].text = value;
        setAllServices(newService);
    }

    const serviceHandler = () => {
        const data = {
            topText,
            serviceDetail: allServices,
            BottomText: bottomText
        }
        dispatch(EditServicesUpdate(data))
    }

    return (
        <div className='main_content_edit'>
            <Container>
                <h1>Edit Service Page</h1>

                {
                    loading ? <Loader /> :
                        <div className='main_home_content_edit'>
                            <div className='mb-3'>
                                <label>Top Text</label>
                                <ReactQuill theme="snow" value={topText} onChange={(e) => setTopText(e)} />
                            </div>

                            <div>
                                <label>Service Details</label>
                                <Row>
                                    {
                                        allServices.map((s, index) => {
                                            return (
                                                <Col md={6}>
                                                    <div className='mb-3'>
                                                        <ReactQuill theme="snow" value={s.text} onChange={(e) => handleServiceDetail(index, e)} />
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </div>

                            <div className='mb-3'>
                                <label>Bottom Text</label>
                                <ReactQuill theme="snow" value={bottomText} onChange={(e) => setBottomText(e)} />
                            </div>

                            {
                                updateLoading ? <SpinLoader /> :
                                    <BlackButton type="button" onClick={serviceHandler}>
                                        Update <img src='/images/btn_arrow_img.png' alt='' />
                                    </BlackButton>
                            }
                        </div>
                }
            </Container>
        </div>
    )
}

export default ServicePage