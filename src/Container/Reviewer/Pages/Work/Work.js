import { Container } from '@mui/material';
import React, { useEffect } from 'react'
import MuiDataTable from '../../../../Component/MuiDataTables/MuiDataTables';
import './Work.css';
import WhiteButton from '../../../../Component/Button/WhiteButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReviewGetWork, ReviewerGetAllWork } from '../../../../Redux/Action/reviewer';
import { errorNotify } from '../../../../Util/Toast';
import Loader from '../../../../Util/Loader';
import moment from 'moment';
import { LoggedInUser } from '../../../../Redux/Action/auth';
import BlackButton from '../../../../Component/Button/BlackButton';

const Work = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, reviewerGetAllWorkData } = useSelector((state) => state.getNotReviewWork)
  const { loading: getLoading, reviewerGetWorkData } = useSelector((state) => state.reviewGetData)
  const { getCurrentUser } = useSelector((state) => state.getCurrentUserData)

  const userFound = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    dispatch(ReviewerGetAllWork(userFound?.user?.profession?.professionName))
    dispatch(ReviewGetWork(userFound?.user?._id))
    dispatch(LoggedInUser(userFound?.user?.email))
  }, [])

  const downloadPdf = (getId) => {
    navigate(`/reviewer/work/${getId}?getId=${getCurrentUser?.user?._id}`);
  }

  const dashboardCols = [
    {
      name: "_id",
      options: {
        display: false,
      },
    },
    { name: 'fileName', label: "Work Name" },
    { name: "createdAt", label: "Submission Date" },
    { name: "score", label: "Submission Score" },
    {
      name: "isReviewed", label: 'Review',
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <p style={{ marginBottom: '0px', color: "green", fontWeight: "600" }}>
              {
                value && 'Review Submitted!'
              }
            </p>
          );
        },
      },
    },
    {
      name: "View", label: 'View',
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <div style={{ display: "flex", alignItems: "center", gap: '10px' }}>
              <BlackButton onClick={() => downloadPdf(tableMeta?.rowData[0])}>
                <img src='/images/btn_arrow_img.png' alt='' /> </BlackButton>
            </div>
          );
        },
      },
    }
  ];

  const data = reviewerGetWorkData?.data?.map((a) => {
    return {
      _id: a?._id,
      fileName: a?.fileName,
      createdAt: moment(a?.createdAt).format('LL'),
      score: a?.score,
      isReviewed: a?.isReviewed
    }
  })

  const reviewWorkHandler = () => {
    if (getCurrentUser?.user.reviewByDay === 0) {
      errorNotify("Your daily review limit is over!");
      return;
    }
    navigate(`/reviewer/review/${reviewerGetAllWorkData[0]?._id}`)
  }

  return (
    <div className='reviewer_work_page'>
      <Container>
        <h1>Reviewer Work Page</h1>

        <div className='review_left'>
          <h3>Review Left in a Day : <span>{getCurrentUser?.user?.reviewByDay ? getCurrentUser?.user?.reviewByDay : '-'}</span></h3>
        </div>

        {
          reviewerGetAllWorkData?.length > 0 ?
            <div className='d-flex justify-content-center my-3'>
              <WhiteButton disable={loading} onClick={reviewWorkHandler}> Review A Work
                <img src='/images/btn_arrow_img.png' alt='' /></WhiteButton>
            </div> :
            <div className='d-flex justify-content-center my-3'>
              <WhiteButton disable={loading} onClick={() => errorNotify("No Work Found")}> Review A Work
                <img src='/images/btn_arrow_img.png' alt='' /></WhiteButton>
            </div>
        }

        {
          getLoading ? <Loader /> :
            <MuiDataTable data={data} columns={dashboardCols} />
        }
      </Container>
    </div>
  )
}

export default Work