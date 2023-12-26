import { Container } from '@mui/material';
import React, { useEffect } from 'react'
import MuiDataTable from '../../../../Component/MuiDataTables/MuiDataTables';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../../Util/Loader';
import { ReviewGetAllWork } from '../../../../Redux/Action/reviewer';
import axios from 'axios';

const ReviewedWork = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading, GetAllWorkData } = useSelector((state) => state.getAllWork)

    useEffect(() => {
        dispatch(ReviewGetAllWork())
    }, [])

    const workId = (id) => {
        const data = {
            workId: id
        }

        axios.put(`pay-reviewer`, data).then((res) => {
            // successNotify("Card Save Successfully!")
        }).catch(() => {
            // errorNotify("Error in saving")
        })
    }

    const dashboardCols = [
        {
            name: "_id",
            options: {
                display: false,
            },
        },
        { name: 'fileName', label: "File Name" },
        { name: "artistEmail", label: "Artist Email" },
        { name: "reviewEmail", label: "Reviewer Email" },
        {
            name: "isPaymentGiven", label: 'Payment Given',
            options: {
                customBodyRender: (value, tableMeta) => {
                    return (
                        <div className='text-center'>
                            {value ? 'Yes' : 'No'}
                        </div>
                    );
                },
            },
        },
        {
            name: "Action", label: 'Action',
            options: {
                customBodyRender: (_value, tableMeta) => {
                    return (
                        <div style={{ display: "flex", alignItems: "center", gap: '10px' }}>
                            <BlackButton style={{ fontSize: "15px" }} onClick={() => workId(tableMeta.rowData[0])}> Pay
                            </BlackButton>
                        </div>
                    );
                },
            },
        },
    ];

    const getAllWork = GetAllWorkData && GetAllWorkData?.data?.map((w) => {
        return {
            _id: w?._id,
            fileName: w?.fileName,
            artistEmail: w?.artist.email,
            reviewEmail: w?.reviewedData?.reviewer?.email,
            score: w?.score,
            isPaymentGiven: w?.isPaymentGiven
        }
    })

    return (
        <div className='reviewer_work_page'>
            <Container>
                <h1>Reviewed Work</h1>
                <p className='text-center'>List of Reviewer who reviewed the Artist work</p>
                {
                    loading ? <Loader /> :
                        <MuiDataTable data={getAllWork} columns={dashboardCols} />
                }
            </Container>
        </div>
    )
}
export default ReviewedWork