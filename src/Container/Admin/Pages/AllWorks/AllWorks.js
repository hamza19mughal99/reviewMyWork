import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material';
import MuiDataTable from '../../../../Component/MuiDataTables/MuiDataTables';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReviewerGet } from '../../../../Redux/Action/admin';
import Loader from '../../../../Util/Loader';
import Select from 'react-select';
import { Form } from 'react-bootstrap';

const AllWorks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('');
  const [filter, setFilter] = useState([])

  const { loading, getReviewerData } = useSelector((state) => state.reviewerData)

  useEffect(() => {
    setFilter(getReviewerData?.users)
  }, [getReviewerData])

  const resetHandler = () => {
    dispatch(ReviewerGet())
  }

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
              <BlackButton style={{ fontSize: "15px", padding: "6px 25px", borderRadius: "100px" }} onClick={() => navigate(`/admin/all-reviewers/reviewer/${tableMeta.rowData[0]}`)}> Detail
              </BlackButton>
            </div>
          );
        },
      },
    },
  ];

  const options = [{ value: "Artist", label: "Artist" },
  { value: "Writer", label: "Writer" },
  { value: "Composer", label: "Composer" }]

  const handleFilter = () => {
    const filteredData = getReviewerData?.users.filter((user) => {
      const userCreatedAt = new Date(user.createdAt).getTime();

      const isDateInRange =
        (!startDate || userCreatedAt >= new Date(startDate).getTime()) &&
        (!endDate || userCreatedAt <= new Date(endDate).getTime());

      const isProfessionMatch =
        !selectedProfession || user.profession.professionName === selectedProfession.value;

      return isDateInRange && isProfessionMatch;
    });

    setFilter(filteredData)

  };

  return (
    <div className='reviewer_work_page'>
      <Container>
        <h1>All Works</h1>

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
export default AllWorks