import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useDispatch, useSelector } from 'react-redux';
import { EditSubmissionGet, EditSubmissionPost } from '../../../../Redux/Action/EditPages';
import Loader from '../../../../Util/Loader';
import SpinLoader from '../../../../Util/SpinLoader';
import { successNotify } from '../../../../Util/Toast';

const SubmissionPage = () => {
    const dispatch = useDispatch();
    const [aboutValue, setAboutValue] = useState('');

    const { loading, getSubmissionEditData } = useSelector((state) => state.getSubmissionEdit)
    const { loading: updateLoading, SubmissionUpdateData } = useSelector((state) => state.updateSubmissionEdit)

    useEffect(() => {
        if (SubmissionUpdateData?.status === 1) {
            successNotify(SubmissionUpdateData?.message)
            dispatch(EditSubmissionGet());
            dispatch({ type: "SUBMISSION_EDIT_POST_RESET" })
        }
    }, [SubmissionUpdateData])

    useEffect(() => {
        dispatch(EditSubmissionGet())
    }, [])

    useEffect(() => {
        if (getSubmissionEditData?.status === 1) {
            setAboutValue(getSubmissionEditData?.data[0]?.submissionText)
        }
    }, [getSubmissionEditData])

    const updateAboutHandler = () => {

        let data = {
            submissionText: aboutValue
        }

        dispatch(EditSubmissionPost(data))
    }

    return (
        <div className='main_content_edit'>
            <Container>
                <h1>Edit Submission Page</h1>

                {
                    loading ? <Loader /> :
                        <div className='main_home_content_edit'>
                            <div className='mb-3'>
                                <ReactQuill theme="snow" value={aboutValue} onChange={(e) => setAboutValue(e)} />
                            </div>

                            {
                                updateLoading ? <SpinLoader /> :
                                    <BlackButton type="button" onClick={updateAboutHandler}>
                                        Update <img src='/images/btn_arrow_img.png' alt='' />
                                    </BlackButton>
                            }
                        </div>
                }
            </Container>
        </div>
    )
}

export default SubmissionPage