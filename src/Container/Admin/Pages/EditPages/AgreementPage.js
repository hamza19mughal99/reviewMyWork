import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useDispatch, useSelector } from 'react-redux';
import { EditAgreementGet, EditAgreementPost } from '../../../../Redux/Action/EditPages';
import Loader from '../../../../Util/Loader';
import SpinLoader from '../../../../Util/SpinLoader';
import { successNotify } from '../../../../Util/Toast';

const AgreementPage = () => {
    const dispatch = useDispatch();
    const [aboutValue, setAboutValue] = useState('');

    const { loading, getAgreementEditData } = useSelector((state) => state.getAgreementEdit)
    const { loading: updateLoading, agreementUpdateData } = useSelector((state) => state.updateAgreementEdit)

    useEffect(() => {
        if (agreementUpdateData?.status === 1) {
            successNotify(agreementUpdateData?.message)
            dispatch(EditAgreementGet());
            dispatch({ type: "AGREEMENT_EDIT_POST_RESET" })
        }
    }, [agreementUpdateData])

    useEffect(() => {
        dispatch(EditAgreementGet())
    }, [])

    useEffect(() => {
        if (getAgreementEditData?.status === 1) {
            setAboutValue(getAgreementEditData?.data[0]?.agreementText)
        }
    }, [getAgreementEditData])

    const updateAboutHandler = () => {

        let data = {
            agreementText: aboutValue
        }

        dispatch(EditAgreementPost(data))
    }

    return (
        <div className='main_content_edit'>
            <Container>
                <h1>Edit Agreement Page</h1>

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

export default AgreementPage