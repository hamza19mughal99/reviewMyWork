import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useDispatch, useSelector } from 'react-redux';
import { EditTermsGet, EditTermsPost } from '../../../../Redux/Action/EditPages';
import Loader from '../../../../Util/Loader';
import SpinLoader from '../../../../Util/SpinLoader';
import { successNotify } from '../../../../Util/Toast';

const TermsPage = () => {
    const dispatch = useDispatch();
    const [aboutValue, setAboutValue] = useState('');

    const { loading, getTermsEditData } = useSelector((state) => state.getTermsEdit)
    const { loading: updateLoading, TermsUpdateData } = useSelector((state) => state.updateTermsEdit)

    useEffect(() => {
        if (TermsUpdateData?.status === 1) {
            successNotify(TermsUpdateData?.message)
            dispatch(EditTermsGet());
            dispatch({ type: "TERM_EDIT_POST_RESET" })
        }
    }, [TermsUpdateData])

    useEffect(() => {
        dispatch(EditTermsGet())
    }, [])

    useEffect(() => {
        if (getTermsEditData?.status === 1) {
            setAboutValue(getTermsEditData?.data[0]?.termText)
        }
    }, [getTermsEditData])

    const updateAboutHandler = () => {

        let data = {
            termText: aboutValue
        }

        dispatch(EditTermsPost(data))
    }

    return (
        <div className='main_content_edit'>
            <Container>
                <h1>Edit Terms Page</h1>

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

export default TermsPage