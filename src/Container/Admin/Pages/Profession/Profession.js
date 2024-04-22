import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Form, Spinner } from "react-bootstrap";
import './Profession.css';
import { ProfessionCreate, ProfessionDelete, ProfessionGet, ProfessionUpdate } from '../../../../Redux/Action/admin';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../../Util/Loader';
import { errorNotify, successNotify } from '../../../../Util/Toast';
import BlackButton from '../../../../Component/Button/BlackButton';
import SpinLoader from '../../../../Util/SpinLoader';

const Profession = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [id, setId] = useState('')
    const [name, setName] = useState('')

    const { loading, getProfessionData } = useSelector((state) => state.getAllProfessionData)
    const { loading: createLoading, createProfessionData } = useSelector((state) => state.professionCreateData)
    const { loading: updateLoading, updateProfessionData } = useSelector((state) => state.professionUpdateData)
    const { loading: deleteLoading, deleteProfessionData } = useSelector((state) => state.professionDeleteData)

    useEffect(() => {
        if (createProfessionData?.status === 1) {
            successNotify("Created Successfully!")
            dispatch({ type: "PROFESSION_CREATE_RESET" })
            setShow(false)
            setName('')
            dispatch(ProfessionGet())
        }
    }, [createProfessionData])

    useEffect(() => {
        if (updateProfessionData?.status === 1) {
            successNotify("Update Successfully!")
            dispatch({ type: "PROFESSION_UPDATE_RESET" })
            setShow2(false)
            setName('')
            dispatch(ProfessionGet())
        }
    }, [updateProfessionData])

    useEffect(() => {
        if (deleteProfessionData?.status === 1) {
            successNotify("Created Successfully!")
            setId('')
            dispatch({ type: "PROFESSION_DELETE_RESET" })
            setDeleteModal(false)
            dispatch(ProfessionGet())
        }
    }, [deleteProfessionData])

    useEffect(() => {
        dispatch(ProfessionGet())
    }, [])

    const professionHandler = (action) => {
        if (name.length === 0) {
            errorNotify("Please filled up fields")
            return;
        }

        if (action === 'CREATE') {
            let data = {
                professionName: name
            }
            dispatch(ProfessionCreate(data))
        }

        if (action === 'EDIT') {
            let data = {
                professionName: name
            }
            dispatch(ProfessionUpdate(id, data))
        }

    }

    const deleteHandler = () => {
        dispatch(ProfessionDelete(id))
    }

    const modal = <Modal centered show={show} onHide={() => setShow(false)} className='profession_modal'>
        <Modal.Header closeButton>
            <Modal.Title>Create Profession</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <div>
                    <label>Profession Name</label>
                    <input placeholder='Enter Profession Name' value={name} onChange={(e) => setName(e.target.value)} />
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
                    <label>Profession Name</label>
                    <input placeholder='Enter Profession Name' value={name} onChange={(e) => setName(e.target.value)} />
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
                    <button onClick={deleteHandler}> {deleteLoading ? <Spinner /> : 'Yes'}</button>
                    <button onClick={() => setDeleteModal(false)}>No</button>
                </div>
            </div>
        </Modal.Body>
    </Modal>

    const showEdit = (data) => {
        setShow2(true)
        setId(data._id)
        setName(data.professionName)
    }

    return (
        <div className='reviewer_work_page'>
            {modal}
            {modal2}
            {modal3}
            <Container>
                <h1>Profession</h1>

                <div className='create_profession'>
                    <button onClick={() => {
                        setShow(true)
                        setId('')
                        setName('')
                    }}>Create Profession</button>
                </div>

                {
                    loading ? <Loader /> :
                        <Row style={{ gap: "10px 0" }}>
                            {
                                getProfessionData?.ProfessionGet?.map((p) => {
                                    return (
                                        <Col md={4}>
                                            <div className='profession_box'>
                                                <h2>Profession Name: <span> {p.professionName} </span></h2>
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

export default Profession