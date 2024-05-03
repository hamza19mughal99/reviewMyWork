import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import BlackButton from '../../../../Component/Button/BlackButton';
import { useDispatch, useSelector } from 'react-redux';
import { EditFaqGet, EditFaqPost } from '../../../../Redux/Action/EditPages';
import Loader from '../../../../Util/Loader';
import SpinLoader from '../../../../Util/SpinLoader';
import { successNotify } from '../../../../Util/Toast';

const FaqPage = () => {
    const dispatch = useDispatch();
    const [heading, setHeading] = useState('')
    const [QA, setQA] = useState([{ question: '', answer: '' }]);

    const { loading, getFaqEditData } = useSelector((state) => state.getFaqEdit)
    const { loading: updateLoading, faqUpdateData } = useSelector((state) => state.updateFaqEdit)

    useEffect(() => {
        if (faqUpdateData?.status === 1) {
            successNotify(faqUpdateData?.message)
            dispatch(EditFaqGet());
            dispatch({ type: "FAQ_EDIT_POST_RESET" })
        }
    }, [faqUpdateData])

    useEffect(() => {
        dispatch(EditFaqGet())
    }, [])

    useEffect(() => {
        if (getFaqEditData?.status === 1) {
            setHeading(getFaqEditData?.data?.heading)

            let arr = [];
            getFaqEditData?.data?.questionAns.map((q) => {
                arr.push({ question: q.question, answer: q.answer })
            })

            setQA(arr)
        }
    }, [getFaqEditData])

    const handleQuestionChange = (index, event) => {
        const newQA = [...QA];
        newQA[index].question = event.target.value;
        setQA(newQA);
    };

    const handleAnswerChange = (index, event) => {
        const newQA = [...QA];
        newQA[index].answer = event.target.value;
        setQA(newQA);
    };

    const faqHandler = () => {

        let data = {
            heading,
            questionAns: QA
        }

        dispatch(EditFaqPost(data))
    }

    return (
        <div className='main_content_edit'>
            <Container>
                <h1>Edit Faq Page</h1>

                {
                    loading ? <Loader /> :
                        <div className='main_home_content_edit'>
                            <div>
                                <label>Main Heading</label>
                                <input type='text' value={heading} onChange={(e) => setHeading(e.target.value)} />
                            </div>

                            <div className='ques_ans_div'>
                                <h6>Questions & Answers</h6>

                                <ul>
                                    {
                                        QA.map((qa, index) => {
                                            return (
                                                <li>
                                                    <div>
                                                        <label>Question</label>
                                                        <input type='text' value={qa.question} onChange={(e) => handleQuestionChange(index, e)} />
                                                    </div>
                                                    <div>
                                                        <label>Answer</label>
                                                        <textarea rows={3} value={qa.answer} onChange={(e) => handleAnswerChange(index, e)} />
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            {
                                updateLoading ? <SpinLoader /> :
                                    <BlackButton type="button" onClick={faqHandler}>
                                        Update <img src='/images/btn_arrow_img.png' alt='' />
                                    </BlackButton>
                            }
                        </div>
                }
            </Container>
        </div>
    )
}

export default FaqPage