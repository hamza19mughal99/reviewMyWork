import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getQuestionsById, questionUpdate } from '../../../../Redux/Action/admin';
import Loader from '../../../../Util/Loader';
import SpinLoader from '../../../../Util/SpinLoader';
import { successNotify } from '../../../../Util/Toast';

const AddQuestions = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { id } = useParams();
    const queryParams = new URLSearchParams(location.search);
    const planId = queryParams.get('planId');
    const professionId = queryParams.get('professionId');

    const [questions, setQuestions] = useState([])
    const [question, setQuestion] = useState('')

    const { loading, questionUpdateData } = useSelector((state) => state.updateQuestionsData)
    const { loading: getLoading, questionGetByIdData } = useSelector((state) => state.getDataQuestionsById)

    useEffect(() => {
        if(questionUpdateData?.status === 1){
            successNotify(questionUpdateData?.message)
            dispatch({type: "QUESTION_UPDATE_RESET"})
            dispatch(getQuestionsById(planId, professionId))
        }
    }, [])

    useEffect(() => {
        dispatch(getQuestionsById(planId, professionId))
    }, [])

    useEffect(() => {
        if (questionGetByIdData?.status === 1) {
            setQuestions(questionGetByIdData?.questionsGet?.allQuestions)
        }
    }, [questionGetByIdData])

    const addQuestionField = (e) => {
        setQuestion(e.target.value)
    }

    const addQuestionHandler = () => {
        if (question.trim() !== '') {
            const newQuestion = { question: question };
            setQuestions([...questions, newQuestion]);
            setQuestion('');
        }
    }

    const saveHandler = () => {
        let data = {
            allQuestions: questions
        }

        dispatch(questionUpdate(data, id))
    }

    return (
        <div className='reviewer_work_page'>
            <Container>
                <h1>Questions</h1>

                <div className='create_profession mb-4'>
                    <button>Back</button>
                </div>

                <div className='questions_main_div'>
                    <div className='write_question'>
                        <input placeholder='Write a Question' value={question} onChange={addQuestionField} />
                        <button onClick={addQuestionHandler}>Add</button>
                    </div>

                    {
                        getLoading ? <Loader /> : <>
                            {
                                questions?.length > 0 ? questions?.map((q, i) => {
                                    return (
                                        <div className='show_question'>
                                            <p>{i + 1}. {q.question} </p>
                                            <div>
                                                <button>Edit</button>
                                                <button>Delete</button>
                                            </div>
                                        </div>
                                    )
                                }) : <p style={{fontWeight: "600", textAlign: "center", marginTop: "30px", fontSize: "20px"}}>No Questions Found</p>
                            }

                            {
                                loading ? <SpinLoader /> :
                                    <div className='save_btn'>
                                        <button onClick={saveHandler}>Save</button>
                                    </div>
                            }
                        </>
                    }

                </div>
            </Container>
        </div>
    )
}

export default AddQuestions