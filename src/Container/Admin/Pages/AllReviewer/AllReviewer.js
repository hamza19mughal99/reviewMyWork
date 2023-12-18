import { Container } from '@mui/material';
import React, { useEffect } from 'react'
import MuiDataTable from '../../../../Component/MuiDataTables/MuiDataTables';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReviewerGet } from '../../../../Redux/Action/admin';
import Loader from '../../../../Util/Loader';

const AllReviewer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, getReviewerData } = useSelector((state) => state.reviewerData)

  useEffect(() => {
    dispatch(ReviewerGet())
  }, [])

  const dashboardCols = [
    {
      name: "_id",
      options: {
        display: false,
      },
    },
    { name: 'fullName', label: "Full Name" },
    { name: "email", label: "Email" },
    {
      name: "profession", label: 'Profession',
      options: {
        customBodyRender: (value) => {
          return (
            <>
              {
                value && <div className='yes_div'>{value?.professionName}</div>
              }
            </>
          );
        },
      },
    },
    {
      name: "isActive", label: 'is Approve',
      options: {
        customBodyRender: (value) => {
          return (
            <>
              {
                value ?
                  <div className='yes_div'>Yes</div> :
                  <div className='no_div'>No</div>
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
              <BlackButton style={{ fontSize: "15px", padding: "6px 25px", borderRadius: "100px" }} onClick={() => navigate(`/admin/reviewer/${tableMeta.rowData[0]}`)}> Detail
              </BlackButton>
            </div>
          );
        },
      },
    },
  ];

  return (
    <div className='reviewer_work_page'>
      <Container>
        <h1>All Reviewers</h1>
        {
          loading ? <Loader /> :
            <MuiDataTable data={getReviewerData?.users} columns={dashboardCols} />
        }
      </Container>
    </div>
  )
}
export default AllReviewer