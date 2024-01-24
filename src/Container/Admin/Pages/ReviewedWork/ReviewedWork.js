import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import MuiDataTable from '../../../../Component/MuiDataTables/MuiDataTables';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../../Util/Loader';
import { ReviewGetAllWork } from '../../../../Redux/Action/reviewer';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import Select from 'react-select';

const ReviewedWork = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isApprove, setIsApprove] = useState('');
    const [filter, setFilter] = useState([])

    const { loading, GetAllWorkData } = useSelector((state) => state.getAllWork)

    useEffect(() => {
        dispatch(ReviewGetAllWork())
    }, [])

    useEffect(() => {
        setFilter(GetAllWorkData?.data)
    }, [GetAllWorkData])

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
                        <>
                            {
                                value ?
                                    <div className='yes_div m-auto'>Yes</div> :
                                    <div className='no_div m-auto'>No</div>
                            }
                        </>

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

    const getAllWork = GetAllWorkData && filter?.map((w) => {
        return {
            _id: w?._id,
            fileName: w?.fileName,
            artistEmail: w?.artist.email,
            reviewEmail: w?.reviewedData?.reviewer?.email,
            score: w?.score,
            isPaymentGiven: w?.isPaymentGiven
        }
    })

    const handleFilter = () => {
        const filteredData = GetAllWorkData?.data?.filter((user) => {

            const isApproveMatch =
                !isApprove || user.isPaymentGiven === isApprove.value;

            return isApproveMatch;
        });

        setFilter(filteredData)

    };

    return (
        <div className='reviewer_work_page'>
            <Container>
                <h1>Reviewer Payment</h1>
                <p className='text-center'>List of Reviewer who reviewed the Artist work</p>

                <div className='filteration mt-4'>
                    <div>
                        <Form.Label>Payment</Form.Label>
                        <Select options={[{ value: true, label: "Yes" }, { value: false, label: "No" }]}
                            placeholder="select Payment"
                            className='profession_bg'
                            value={isApprove}
                            onChange={(selectedOption) => setIsApprove(selectedOption)}
                        />
                    </div>
                    <div>
                        <button onClick={handleFilter}>Filter</button>
                    </div>
                </div>
                {
                    loading ? <Loader /> :
                        <MuiDataTable data={getAllWork} columns={dashboardCols} />
                }
            </Container>
        </div>
    )
}
export default ReviewedWork