import { Container } from '@mui/material';
import React, { useEffect } from 'react'
import MuiDataTable from '../../../../Component/MuiDataTables/MuiDataTables';
import './Work.css';
import BlackButton from '../../../../Component/Button/BlackButton';
import WhiteButton from '../../../../Component/Button/WhiteButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArtistGetWork } from '../../../../Redux/Action/artist';
import Loader from '../../../../Util/Loader';
import moment from 'moment/moment';

const Work = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userFound = JSON.parse(localStorage.getItem('user'))
  const { loading, artistGetWorkData } = useSelector((state) => state.getArtistWork)

  useEffect(() => {
    dispatch(ArtistGetWork(userFound.user._id))
  }, [])

  const downloadPdf = (id) => {
    navigate(`/artist/review/detail/${id}`)
  }

  const dashboardCols = [
    {
      name: "_id",
      options: {
        display: false,
      },
    },
    { name: 'fileName', label: "File Name" },
    { name: "createdAt", label: "Submitted Date" },
    {
      name: "score", label: 'Submission Score',
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <div>
              {
                tableMeta?.rowData[5] ? value : 0
              }
            </div>
          );
        },
      }
    },
    {
      name: "status", label: 'status',
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <div>
              {value === 'approved' ? <span style={{ color: "green" }}> {value} </span> : <span style={{ color: "rgb(176 176 56)" }}>{value}</span>}
            </div>
          );
        },
      }
    },
    {
      name: "isReviewed", label: 'Reviewed',
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <div style={{ display: "flex", alignItems: "center", gap: '10px' }}>
              {value ?
                <p style={{ color: "green", marginBottom: "0" }}>Yes</p>
                :
                <p style={{ color: "red", marginBottom: "0" }}>No</p>
              }
            </div>
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

  const data = artistGetWorkData?.data?.map((a) => {
    return {
      _id: a?._id,
      fileName: a?.fileName,
      createdAt: moment(a?.createdAt).format('LL'),
      score: a?.score,
      isReviewed: a?.isReviewed,
      status: a.workStatus
    }
  })

  return (
    <div className='reviewer_work_page'>
      <Container>
        <h1>Artist Work Page</h1>

        <div className='d-flex justify-content-center my-3'>
          <WhiteButton onClick={() => navigate('/artist/form-submit')}> Review My Work
            <img src='/images/btn_arrow_img.png' alt='' /></WhiteButton>
        </div>
        {
          loading ? <div style={{ margin: "70px 0" }}> <Loader /> </div> :
            <MuiDataTable data={data} columns={dashboardCols} />
        }
      </Container>
    </div>
  )
}
export default Work