import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import MuiDataTable from '../../../../Component/MuiDataTables/MuiDataTables';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArtistGet } from '../../../../Redux/Action/admin';
import Loader from '../../../../Util/Loader';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import './AllArtist.css';

const AllArtist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('');
  const [filter, setFilter] = useState([])

  const { loading, getArtistData } = useSelector((state) => state.artistGetData)

  useEffect(() => {
    dispatch(ArtistGet())
  }, [])

  useEffect(() => {    
    let getOnlyUser = getArtistData?.users?.map((u) => {
      return {
        ...u.user
      }
    })
    setFilter(getOnlyUser)
  }, [getArtistData])

  const resetHandler = () => {
    dispatch(ArtistGet())
  }

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
      name: "profession", label: 'profession',
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
      name: "planType", label: 'Plan Type',
      options: {
        customBodyRender: (value) => {
          return (
            <>
              {
                value ?
                  <div className='yes_div'>{value?.planName}</div> :
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
              <BlackButton style={{ fontSize: "15px", padding: "6px 25px", borderRadius: "100px" }} onClick={() => navigate(`/admin/all-artist/artist/${tableMeta.rowData[0]}`)}> Detail
              </BlackButton>
            </div>
          );
        },
      },
    },
  ];

  const handleFilter = () => {
    const filteredData = getArtistData.users.filter((user) => {
      const userCreatedAt = new Date(user?.user?.createdAt).getTime();

      const isDateInRange =
        (!startDate || userCreatedAt >= new Date(startDate).getTime()) &&
        (!endDate || userCreatedAt <= new Date(endDate).getTime());

      const isProfessionMatch =
        !selectedProfession || user?.user?.profession?.professionName === selectedProfession.value;

      return isDateInRange && isProfessionMatch;
    });

    let getOnlyUser = filteredData?.map((u) => {
      return {
        ...u.user
      }
    })
    setFilter(getOnlyUser)

  };

  const options = [{ value: "Composer", label: "Composer" }]

  return (
    <div className='reviewer_work_page'>
      <Container>
        <h1>All Artist</h1>

        <div className='filteration mt-4'>
          <div>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div>
            <Form.Label>Profession</Form.Label>
            <Select
              options={options}
              placeholder="Select profession"
              className='profession_bg'
              value={selectedProfession}
              onChange={(selectedOption) => setSelectedProfession(selectedOption)}
            />
          </div>
          <div>
            <button onClick={handleFilter}>Filter</button>
            <button onClick={resetHandler} className='mx-2'>Reset</button>
          </div>
        </div>
        {
          loading ? <Loader /> :
            <MuiDataTable data={filter} columns={dashboardCols} />
        }
      </Container>
    </div>
  )
}
export default AllArtist