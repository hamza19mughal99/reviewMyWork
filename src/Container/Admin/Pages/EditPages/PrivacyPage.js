import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useDispatch, useSelector } from 'react-redux';
import { EditPrivacyGet, EditPrivacyPost } from '../../../../Redux/Action/EditPages';
import Loader from '../../../../Util/Loader';
import SpinLoader from '../../../../Util/SpinLoader';
import { successNotify } from '../../../../Util/Toast';

const PrivacyPage = () => {
    const dispatch = useDispatch();
    const [aboutValue, setAboutValue] = useState('');

    const { loading, getPrivacyEditData } = useSelector((state) => state.getPrivacyEdit)
    const { loading: updateLoading, PrivacyUpdateData } = useSelector((state) => state.updatePrivacyEdit)

    useEffect(() => {
        if (PrivacyUpdateData?.status === 1) {
            successNotify(PrivacyUpdateData?.message)
            dispatch(EditPrivacyGet());
            dispatch({ type: "PRIVACY_EDIT_POST_RESET" })
        }
    }, [PrivacyUpdateData])

    useEffect(() => {
        dispatch(EditPrivacyGet())
    }, [])

    useEffect(() => {
        if (getPrivacyEditData?.status === 1) {
            setAboutValue(getPrivacyEditData?.data[0]?.privacyText)
        }
    }, [getPrivacyEditData])

    const updateAboutHandler = () => {

        let data = {
            privacyText: aboutValue
        }

        dispatch(EditPrivacyPost(data))
    }

    return (
        <div className='main_content_edit'>
            <Container>
                <h1>Edit Privacy Page</h1>

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

export default PrivacyPage