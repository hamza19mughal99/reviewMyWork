import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { PlanGet, ProfessionGet, questionCreate, questionSetsGet } from '../../../../Redux/Action/admin'
import { useDispatch, useSelector } from 'react-redux';
import './QuestionSets.css';
import Select from 'react-select';
import SpinLoader from '../../../../Util/SpinLoader';
import BlackButton from '../../../../Component/Button/BlackButton';
import { errorNotify, successNotify } from '../../../../Util/Toast';
import Loader from '../../../../Util/Loader';
import { useNavigate } from 'react-router-dom';

const QuestionSets = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showAdd, setShowAdd] = useState(false)
    const [selectProfession, setSelectProfession] = useState(null)
    const [selectService, setSelectService] = useState(null)

    const { loading: optionLoading, getProfessionData } = useSelector((state) => state.getAllProfessionData)
    const { loading: planLoading, getPlanData } = useSelector((state) => state.getAllPlanData)

    const { loading: createLoading, createQuestionData, error } = useSelector((state) => state.questionCreateData)
    const { loading, questionSetGetData } = useSelector((state) => state.getQuestionSetData)

    useEffect(() => {
        if (createQuestionData?.status === 1) {
            successNotify(createQuestionData?.message)
            dispatch(questionSetsGet())
            setShowAdd(false)
            dispatch({ type: "QUESTION_CREATE_RESET" })
        }

        else if (error) {
            errorNotify(error)
            dispatch({ type: "QUESTION_CREATE_RESET" })
        }
    }, [createQuestionData])

    useEffect(() => {
        dispatch(ProfessionGet())
        dispatch(PlanGet())
        dispatch(questionSetsGet())
    }, [])

    const options = getProfessionData?.ProfessionGet?.map((p) => {
        return {
            value: p._id,
            label: p.professionName
        }
    })

    const priceOptions = getPlanData?.PlanGet?.map((p) => {
        return {
            value: p._id,
            label: p.planName
        }
    })

    const questionCreateHandler = () => {
        if (!selectProfession || !selectService) {
            errorNotify("Please filled up both fields")
            return;
        }

        const data = {
            professionId: selectProfession.value,
            planId: selectService.value
        }

        dispatch(questionCreate(data))
    }

    const modal = <Modal centered show={showAdd} onHide={() => setShowAdd(false)} className=''>
        <Modal.Header closeButton>
            <Modal.Title>Create Set</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <div className='add_question_set_main'>
                    <div className='mb-3'>
                        <label>Select Profession</label>
                        <Select
                            options={options}
                            isLoading={optionLoading}
                            placeholder="Select profession"
                            className='profession_bg'
                            value={selectProfession}
                            onChange={(selectedOption) => setSelectProfession(selectedOption)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label>Select Service</label>
                        <Select
                            options={priceOptions}
                            isLoading={planLoading}
                            placeholder="Select Service"
                            className='profession_bg'
                            value={selectService}
                            onChange={(selectedOption) => setSelectService(selectedOption)}
                        />
                    </div>
                    {
                        createLoading ? <div style={{ display: "flex", alignItems: "end" }}> <SpinLoader /> </div> :
                            <BlackButton type="button" onClick={questionCreateHandler}>
                                Create <img src='/images/btn_arrow_img.png' alt='' />
                            </BlackButton>
                    }
                </div>
            </Form>
        </Modal.Body>
    </Modal>

    return (
        <div className='reviewer_work_page'>
            {modal}
            <Container>
                <h1>Question Sets</h1>

                <div className='create_profession'>
                    <button onClick={() => setShowAdd(true)}>Create Sets</button>
                </div>

                {
                    loading ? <Loader /> :
                        <Row style={{ gap: "10px 0" }}>
                            {
                                questionSetGetData?.questionsGet?.map((p) => {
                                    return (
                                        <Col md={4}>
                                            <div className='profession_box'>
                                                <h2>Profession Name: <span> {p?.profession?.professionName} </span></h2>
                                                <h2>Plan Name: <span> {p?.plan?.planName} </span></h2>
                                                <div>
                                                    <button 
                                                    onClick={() => navigate(`/admin/question-sets/add-questions/${p._id}?planId=${p?.plan?._id}&professionId=${p?.profession?._id}`)}>Add Questions</button>
                                                    <button style={{display: "none"}}>Delete</button>
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

export default QuestionSets