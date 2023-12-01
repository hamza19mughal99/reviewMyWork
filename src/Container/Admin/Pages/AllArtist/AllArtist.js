import { Container } from '@mui/material';
import React, { useEffect } from 'react'
import MuiDataTable from '../../../../Component/MuiDataTables/MuiDataTables';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArtistGet } from '../../../../Redux/Action/admin';
import Loader from '../../../../Util/Loader';

const AllArtist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, getArtistData } = useSelector((state) => state.artistGetData)

  useEffect(() => {
    dispatch(ArtistGet())
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
    { name: "profession", label: "Profession" },
    {
      name: "paymentType", label: 'Payment Type',
      options: {
        customBodyRender: (value) => {
          return (
            <>
              {
                value ?
                  <div className='yes_div'>{value}</div> :
                  <div className='no_div'>Not Yet</div>
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
              <BlackButton style={{ fontSize: "15px", padding: "6px 25px", borderRadius: "100px" }} onClick={() => navigate(`/admin/artist/${tableMeta.rowData[0]}`)}> Detail
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
        <h1>All Artist</h1>
        {
          loading ? <Loader /> :
            <MuiDataTable data={getArtistData?.users} columns={dashboardCols} />
        }
      </Container>
    </div>
  )
}
export default AllArtist