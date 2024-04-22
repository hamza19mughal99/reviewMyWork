import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material';
import MuiDataTable from '../../../../Component/MuiDataTables/MuiDataTables';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getWorks } from '../../../../Redux/Action/admin';
import Loader from '../../../../Util/Loader';
import Select from 'react-select';
import { Form } from 'react-bootstrap';
import moment from 'moment';
import './AllWork.css';

const AllWorks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tab, setTab] = useState("all")

  const { loading, getAllWorksData } = useSelector((state) => state.getWorksData)

  useEffect(() => {
    dispatch(getWorks())
  }, [])

  const calculateDate = (plan, createdDate) => {
    let currentDate = new Date();
    let parsedCreatedDate = new Date(createdDate);

    if (plan === "Regular Express (72 hrs)" || plan === "Detailed Express (72 hrs)") {
      parsedCreatedDate.setDate(parsedCreatedDate.getDate() + 3);
    }
    else if (plan === "Regular (3 weeks)" || plan === "Detailed (3 weeks)") {
      parsedCreatedDate.setDate(parsedCreatedDate.getDate() + 21);
    }

    if (currentDate > parsedCreatedDate) {
      return { date: moment(parsedCreatedDate).format('L'), isDue: 'yes' };
    } else {
      return { date: moment(parsedCreatedDate).format('L'), isDue: 'no' };
    }
  }

  const detailHandler = (id, artistId) => {
    navigate(`/admin/all-works/work/${id}?getId=${artistId}`)
  }

  const dashboardCols = [
    {
      name: "_id",
      options: {
        display: false,
      },
    },
    {
      name: "artistId",
      options: {
        display: false,
      },
    },
    { name: 'fileName', label: "File Name" },
    {
      name: "planType", label: 'Plan',
      options: {
        customBodyRender: (value) => {
          return (
            <>
              {
                value ? <div>{value}</div> :
                  <div> - </div>
              }
            </>
          );
        },
      },
    },
    {
      name: "isReviewed", label: 'Reviewed',
      options: {
        customBodyRender: (value) => {
          return (
            <>
              {
                value ? <div className='yes_div'>Yes</div> :
                  <div className='no_div'> No </div>
              }
            </>
          );
        },
      },
    },
    {
      name: "createdAt", label: 'Created Date',
      options: {
        customBodyRender: (value) => {
          return (
            <div> {moment(value).format('L')} </div>
          );
        },
      },
    },
    {
      name: "planType", label: 'Due',
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <>
              {
                tableMeta.rowData[4] ?
                  <div>
                    -
                  </div> :
                  <div style={calculateDate(value, tableMeta.rowData[5]).isDue === "no" ? { color: "green" } : { color: "red" }}>
                    {calculateDate(value, tableMeta.rowData[5]).date}
                  </div>
              }
            </>
          );
        },
      },
    },
    { name: 'profession', label: "Profession" },
    {
      name: "paymentGiven", label: 'Payment Done',
      options: {
        customBodyRender: (value) => {
          return (
            <>
              {
                value === "approved" ? <div className='yes_div'>Yes</div> :
                  <div className='no_div'> No </div>
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
              <BlackButton style={{ fontSize: "15px", padding: "6px 25px", borderRadius: "100px" }} onClick={() => detailHandler(tableMeta.rowData[0], tableMeta.rowData[1])}> Detail
              </BlackButton>
            </div>
          );
        },
      },
    },
  ];

  let WorkAllData;
  if (tab === "all") {
    WorkAllData = getAllWorksData?.data?.map((w) => {
      return {
        _id: w._id,
        artistId: w?.artist?._id,
        fileName: w?.fileName,
        fileType: w?.fileType,
        isReviewed: w?.isReviewed,
        createdAt: w?.createdAt,
        planType: w?.artist?.planType?.planName,
        paymentGiven: w?.workStatus,
        profession: w?.profession
      }
    })
  }
  else if (tab === "reviewed") {
    WorkAllData = getAllWorksData?.data?.filter((d) => d.isReviewed === true).map((w) => {
      return {
        _id: w._id,
        artistId: w?.artist?._id,
        fileName: w?.fileName,
        fileType: w?.fileType,
        isReviewed: w?.isReviewed,
        createdAt: w?.createdAt,
        planType: w?.artist?.planType?.planName,
        paymentGiven: w?.workStatus,
        profession: w?.profession
      }
    })
  }
  else if (tab === "waiting") {
    WorkAllData = getAllWorksData?.data?.filter((d) => d.isReviewed === false).map((w) => {
      return {
        _id: w._id,
        artistId: w?.artist?._id,
        fileName: w?.fileName,
        fileType: w?.fileType,
        isReviewed: w?.isReviewed,
        createdAt: w?.createdAt,
        planType: w?.artist?.planType?.planName,
        paymentGiven: w?.workStatus,
        profession: w?.profession
      }
    })
  }

  return (
    <div className='reviewer_work_page'>
      <Container>
        <h1>All Works</h1>

        <div className='work_tabs'>
          <button className={tab === "all" && "active"} onClick={() => setTab("all")}>All</button>
          <button className={tab === "reviewed" && "active"} onClick={() => setTab("reviewed")}>Reviewed</button>
          <button className={tab === "waiting" && "active"} onClick={() => setTab("waiting")}>Waiting for Review</button>
        </div>

        {
          loading ? <Loader /> :
            <MuiDataTable data={WorkAllData} columns={dashboardCols} />
        }
      </Container>
    </div>
  )
}
export default AllWorks