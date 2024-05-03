import React, { useEffect, useState } from 'react';
import './EditPages.css';
import { Col, Container, Row } from 'react-bootstrap';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useDispatch, useSelector } from 'react-redux';
import { EditHomeGet, EditHomePost } from '../../../../Redux/Action/EditPages';
import Loader from '../../../../Util/Loader';
import SpinLoader from '../../../../Util/SpinLoader';
import { successNotify } from '../../../../Util/Toast';
import { cloudUrl } from '../../../../Util/Helper';

const HomePage = () => {
    const dispatch = useDispatch();
    const [bannerText, setBannerText] = useState('');
    const [serviceBox, setServiceBox] = useState([]);
    const [serviceIndex, setServiceIndex] = useState([])
    const [allImages, setAllImages] = useState({
        image0: null,
        image1: null,
        image2: null
    });

    const { loading, getHomeEditData } = useSelector((state) => state.getEditHome)
    const { loading: updateLoading, getHomeUpdateData } = useSelector((state) => state.updateEditHome)

    useEffect(() => {
        if (getHomeUpdateData?.success === 1) {
            successNotify("Updated Successfully!");
            dispatch({ type: "HOME_EDIT_POST_RESET" })
            dispatch(EditHomeGet())
            setServiceIndex([])
            setServiceBox([])
        }
    }, [getHomeUpdateData])

    useEffect(() => {
        dispatch(EditHomeGet())
    }, [])

    useEffect(() => {
        if (getHomeEditData?.status === 1) {
            setBannerText(getHomeEditData?.data[0]?.bannerText)
            setServiceBox(getHomeEditData?.data[0]?.services?.map((s) => {
                return {
                    mainImg: { filename: s.mainImg.filename },
                    mainHeading: s.mainHeading
                }
            }))
        }
    }, [getHomeEditData])

    const handleServiceText = (index, value, name, imageName) => {
        const newData = [...serviceBox];
        if (name === 'mainHeading') {
            newData[index].mainHeading = value
        }
        else if (name === 'image') {
            setServiceIndex(prevState => [...prevState, index])
            setAllImages(prevState => ({
                ...prevState,
                [imageName]: value
            }));
            if (value) {
                newData[index].mainImg.filename = URL.createObjectURL(value)
                newData[index].mainImg.fileChange = true
            }
        }
        setServiceBox(newData);
    };

    const updateHomeHandler = () => {
        const heading = serviceBox?.map((s) => {
            return {
                mainHeading: s.mainHeading
            }
        })

        const editFormData = new FormData();
        editFormData.append("bannerText", bannerText)
        editFormData.append("id", getHomeEditData?.data[0]?._id)
        editFormData.append("image0", allImages.image0);
        editFormData.append("image1", allImages.image1);
        editFormData.append("image2", allImages.image2);
        editFormData.append("mainHeadings", JSON.stringify(heading));
        editFormData.append("serviceIndex", JSON.stringify(serviceIndex));

        dispatch(EditHomePost(editFormData))
    }

    return (
        <div className='main_content_edit'>
            <Container>
                <h1>Edit Home Page</h1>

                {
                    loading ? <Loader /> :
                        <div className='main_home_content_edit'>
                            <div>
                                <label>Banner Text</label>
                                <textarea rows={3} value={bannerText} onChange={(e) => setBannerText(e.target.value)}></textarea>
                            </div>
                            <Row>
                                {
                                    serviceBox?.map((s, i) => {
                                        return (
                                            <Col md={4}>
                                                <div>
                                                    <label>Bottom Box{i + 1}</label>
                                                    <input type='file' onChange={(e) => handleServiceText(i, e.target.files[0], 'image', `image${i}`)} />
                                                    {
                                                        s?.mainImg?.filename.length === 0 ?
                                                            <img src='/images/dummy_img.png' alt='' /> :
                                                            s?.mainImg?.fileChange ?
                                                                <img src={s.mainImg.filename} alt='' /> :
                                                                <img src={`${cloudUrl}${s.mainImg.filename}`} alt='' />
                                                    }
                                                    <textarea rows={5} value={s.mainHeading}
                                                        onChange={(e) => handleServiceText(i, e.target.value, 'mainHeading')}></textarea>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>

                            {
                                updateLoading ? <SpinLoader /> :
                                    <BlackButton type="button" onClick={updateHomeHandler}>
                                        Update <img src='/images/btn_arrow_img.png' alt='' />
                                    </BlackButton>
                            }
                        </div>
                }
            </Container>
        </div>
    )
}

export default HomePage