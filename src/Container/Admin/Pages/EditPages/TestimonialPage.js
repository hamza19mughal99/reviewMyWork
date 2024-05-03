import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useDispatch, useSelector } from 'react-redux';
import { EditTestimonialGet, EditTestimonialPost } from '../../../../Redux/Action/EditPages';
import Loader from '../../../../Util/Loader';
import SpinLoader from '../../../../Util/SpinLoader';
import { successNotify } from '../../../../Util/Toast';

const TestimonialPage = () => {
    const dispatch = useDispatch();
    const [aboutValue, setAboutValue] = useState('');

    const { loading, getTestimonialEditData } = useSelector((state) => state.getTestimonialEdit)
    const { loading: updateLoading, TestimonialUpdateData } = useSelector((state) => state.updateTestimonialEdit)

    useEffect(() => {
        if (TestimonialUpdateData?.status === 1) {
            successNotify(TestimonialUpdateData?.message)
            dispatch(EditTestimonialGet());
            dispatch({ type: "TESTIMONIAL_EDIT_POST_RESET" })
        }
    }, [TestimonialUpdateData])

    useEffect(() => {
        dispatch(EditTestimonialGet())
    }, [])

    useEffect(() => {
        if (getTestimonialEditData?.status === 1) {
            setAboutValue(getTestimonialEditData?.data[0]?.testimonialText)
        }
    }, [getTestimonialEditData])

    const updateAboutHandler = () => {

        let data = {
            testimonialText: aboutValue
        }

        dispatch(EditTestimonialPost(data))
    }

    return (
        <div className='main_content_edit'>
            <Container>
                <h1>Edit Testimonial Page</h1>

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

export default TestimonialPage