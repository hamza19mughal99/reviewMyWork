import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useDispatch, useSelector } from 'react-redux';
import { EditAboutGet, EditAboutPost } from '../../../../Redux/Action/EditPages';
import Loader from '../../../../Util/Loader';
import SpinLoader from '../../../../Util/SpinLoader';
import { successNotify } from '../../../../Util/Toast';

const AboutPage = () => {
    const dispatch = useDispatch();
    const [aboutValue, setAboutValue] = useState('');

    const { loading, getAboutEditData } = useSelector((state) => state.getEditAbout)
    const { loading: updateLoading, aboutUpdateData } = useSelector((state) => state.updateEditAbout)

    useEffect(() => {
        if (aboutUpdateData?.status === 1) {
            successNotify(aboutUpdateData?.message)
            dispatch(EditAboutGet());
            dispatch({ type: "ABOUT_EDIT_POST_RESET" })
        }
    }, [aboutUpdateData])

    useEffect(() => {
        dispatch(EditAboutGet())
    }, [])

    useEffect(() => {
        if (getAboutEditData?.status === 1) {
            setAboutValue(getAboutEditData?.data[0]?.aboutText)
        }
    }, [getAboutEditData])

    const updateAboutHandler = () => {

        let data = {
            aboutText: aboutValue
        }

        dispatch(EditAboutPost(data))
    }

    return (
        <div className='main_content_edit'>
            <Container>
                <h1>Edit About Page</h1>

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

export default AboutPage