import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useDispatch, useSelector } from 'react-redux';
import { EditContactGet, EditContactPost } from '../../../../Redux/Action/EditPages';
import Loader from '../../../../Util/Loader';
import SpinLoader from '../../../../Util/SpinLoader';
import { successNotify } from '../../../../Util/Toast';

const ContactPage = () => {
    const dispatch = useDispatch();
    const [aboutValue, setAboutValue] = useState('');

    const { loading, getContactEditData } = useSelector((state) => state.getContactEdit)
    const { loading: updateLoading, contactUpdateData } = useSelector((state) => state.updateContactEdit)

    useEffect(() => {
        if (contactUpdateData?.status === 1) {
            successNotify(contactUpdateData?.message)
            dispatch(EditContactGet());
            dispatch({ type: "CONTACT_EDIT_POST_RESET" })
        }
    }, [contactUpdateData])

    useEffect(() => {
        dispatch(EditContactGet())
    }, [])

    useEffect(() => {
        if (getContactEditData?.status === 1) {
            setAboutValue(getContactEditData?.data[0]?.contactText)
        }
    }, [getContactEditData])

    const updateAboutHandler = () => {

        let data = {
            contactText: aboutValue
        }

        dispatch(EditContactPost(data))
    }

    return (
        <div className='main_content_edit'>
            <Container>
                <h1>Edit Contact Page</h1>

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

export default ContactPage