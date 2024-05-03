import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useDispatch, useSelector } from 'react-redux';
import { EditCopyRightGet, EditCopyRightPost } from '../../../../Redux/Action/EditPages';
import Loader from '../../../../Util/Loader';
import SpinLoader from '../../../../Util/SpinLoader';
import { successNotify } from '../../../../Util/Toast';

const CopyRightPage = () => {
    const dispatch = useDispatch();
    const [aboutValue, setAboutValue] = useState('');

    const { loading, getCopyRightEditData } = useSelector((state) => state.getCopyRightEdit)
    const { loading: updateLoading, copyRightUpdateData } = useSelector((state) => state.updateCopyRightEdit)

    useEffect(() => {
        if (copyRightUpdateData?.status === 1) {
            successNotify(copyRightUpdateData?.message)
            dispatch(EditCopyRightGet());
            dispatch({ type: "COPYRIGHT_EDIT_POST_RESET" })
        }
    }, [copyRightUpdateData])

    useEffect(() => {
        dispatch(EditCopyRightGet())
    }, [])

    useEffect(() => {
        if (getCopyRightEditData?.status === 1) {
            setAboutValue(getCopyRightEditData?.data[0]?.copyRightText)
        }
    }, [getCopyRightEditData])

    const updateAboutHandler = () => {

        let data = {
            copyRightText: aboutValue
        }

        dispatch(EditCopyRightPost(data))
    }

    return (
        <div className='main_content_edit'>
            <Container>
                <h1>Edit CopyRight Page</h1>

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

export default CopyRightPage