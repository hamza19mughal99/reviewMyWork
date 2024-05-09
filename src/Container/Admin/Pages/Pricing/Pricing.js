import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Form, Spinner } from "react-bootstrap";
import { PlanCreate, PlanDelete, PlanGet, PlanUpdate } from '../../../../Redux/Action/admin';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../../Util/Loader';
import { errorNotify, successNotify } from '../../../../Util/Toast';
import BlackButton from '../../../../Component/Button/BlackButton';
import SpinLoader from '../../../../Util/SpinLoader';

const Pricing = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const { loading, getPlanData } = useSelector((state) => state.getAllPlanData)

    const { loading: createLoading, createPlanData } = useSelector((state) => state.postPlanData)
    const { loading: updateLoading, updatePlanData } = useSelector((state) => state.planUpdatedData)
    const { loading: deleteLoading, deletedPlanData } = useSelector((state) => state.PlanDeletedData)

    useEffect(() => {
        if (createPlanData?.status === 1) {
            successNotify("Created Successfully!")
            dispatch({ type: "PLAN_CREATE_RESET" })
            setShow(false)
            setName('')
            setPrice('')
            dispatch(PlanGet())
        }
        if (updatePlanData?.status === 1) {
            successNotify("Update Successfully!")
            dispatch({ type: "PLAN_UPDATE_RESET" })
            setShow2(false)
            setName('')
            setPrice('')
            setId('')
            dispatch(PlanGet())
        }
        if (deletedPlanData?.status === 1) {
            successNotify("Deleted Successfully!")
            setId('')
            dispatch({ type: "PLAN_DELETE_RESET" })
            setDeleteModal(false)
            dispatch(PlanGet())
        }
    }, [createPlanData, updatePlanData, deletedPlanData])

    useEffect(() => {
        dispatch(PlanGet())
    }, [])

    const professionHandler = (action) => {
        if (name.length === 0 || price.length === 0) {
            errorNotify("Please filled up fields")
            return;
        }

        if (parseInt(price) < 1) {
            errorNotify("Price must be greater than 0")
            return;
        }

        let data = {
            planName: name,
            amount: parseInt(price)
        }

        if (action === 'CREATE') {
            dispatch(PlanCreate(data))
        }

        if (action === 'EDIT') {
            dispatch(PlanUpdate(id, data))
        }
    }

    const deleteHandler = () => {
        dispatch(PlanDelete(id))
    }

    const modal = <Modal centered show={show} onHide={() => setShow(false)} className='profession_modal'>
        <Modal.Header closeButton>
            <Modal.Title>Create New Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <div>
                    <div className='mb-3'>
                        <label>Plan Name</label>
                        <input placeholder='Enter Plan Name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Plan Price</label>
                        <input placeholder='Enter Plan Price' type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    {
                        createLoading ? <div style={{ display: "flex", alignItems: "end" }}> <SpinLoader /> </div> :
                            <BlackButton type="button" onClick={() => professionHandler('CREATE')}>
                                Create <img src='/images/btn_arrow_img.png' alt='' />
                            </BlackButton>
                    }
                </div>
            </Form>
        </Modal.Body>
    </Modal>

    const modal2 = <Modal centered show={show2} onHide={() => setShow2(false)} className='profession_modal'>
        <Modal.Header closeButton>
            <Modal.Title>Edit Profession</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <div>
                    <div className='mb-3'>
                        <label>Plan Name</label>
                        <input placeholder='Enter Plan Name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Plan Price</label>
                        <input placeholder='Enter Plan Price' type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    {
                        updateLoading ? <div style={{ display: "flex", alignItems: "end" }}> <SpinLoader /> </div> :
                            <BlackButton type="button" onClick={() => professionHandler('EDIT')}>
                                Edit <img src='/images/btn_arrow_img.png' alt='' />
                            </BlackButton>
                    }
                </div>
            </Form>
        </Modal.Body>
    </Modal>

    const modal3 = <Modal centered show={deleteModal} className='delete_modal'>
        <Modal.Body>
            <div>
                <h6>Are you sure you want to delete?</h6>
                <div>
                    <button onClick={deleteHandler}> {deleteLoading ? <Spinner animation='border' size='sm' /> : 'Yes'}</button>
                    <button onClick={() => setDeleteModal(false)}>No</button>
                </div>
            </div>
        </Modal.Body>
    </Modal>

    const showEdit = (data) => {
        setShow2(true)
        setId(data._id)
        setName(data.planName)
        setPrice(data.amount)
    }

    return (
        <div className='reviewer_work_page'>
            {modal}
            {modal2}
            {modal3}
            <Container>
                <h1>Service Plans</h1>

                <div className='create_profession'>
                    <button onClick={() => {
                        setShow(true)
                        setId('')
                        setName('')
                    }}>Create New Plan</button>
                </div>

                {
                    loading ? <Loader /> :
                        <Row style={{ gap: "10px 0" }}>
                            {
                                getPlanData?.PlanGet?.map((p) => {
                                    return (
                                        <Col md={4}>
                                            <div className='profession_box'>
                                                <h2>Plan Name: <span> {p.planName} </span></h2>
                                                <h2>Plan Price: <span> {p.amount}$ </span></h2>
                                                <div>
                                                    <button onClick={() => showEdit(p)}>Edit</button>
                                                    <button onClick={() => {
                                                        setDeleteModal(true)
                                                        setId(p._id)
                                                    }}>Delete</button>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                }
            </Container>
        </div>
    )
}

export default Pricing