import { Container } from '@mui/material';
import React, { useEffect } from 'react'
import MuiDataTable from '../../../../Component/MuiDataTables/MuiDataTables';
import BlackButton from '../../../../Component/Button/BlackButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AllPaymentGetData } from '../../../../Redux/Action/admin';
import Loader from '../../../../Util/Loader';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, getPaymentData } = useSelector((state) => state.getAllPaymentData)

  console.log(getPaymentData)

  useEffect(() => {
    dispatch(AllPaymentGetData())
  }, [])

  const dashboardCols = [
    {
      name: "_id",
      options: {
        display: false,
      },
    },
    { name: 'userEmail', label: "Artist Email" },
    { name: "paymentAmount", label: "Amount" },
    {
      name: "planType", label: 'Plan Type',
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
      name: "amountType", label: 'Amount Type',
      options: {
        customBodyRender: (value) => {
          return (
            <>
              {
                value === 'taken' ?
                  <div className='yes_div'>{value}</div> :
                  <div className='no_div'>{value}</div>
              }
            </>
          );
        },
      },
    }
  ];

  const paymentDataArray = getPaymentData?.allPayment?.payment.map((p) => {
    return {
      userEmail: p?.user?.email,
      paymentAmount: p?.paymentAmount,
      amountType: p?.amountType,
      planType: p?.user?.planType?.planName
    }
  })

  return (
    <div className='reviewer_work_page'>
      {
        loading ? <Loader /> :
          <Container>
            <h1>All Payments</h1>
            <div className='d-flex align-items-center justify-content-end mb-3' style={{ gap: "10px" }}>
              <div className='payment_given'>
                <h4>Earning:</h4>
                <h3>$ {getPaymentData?.allPayment?.earning}</h3>
              </div>
              <div className='payment_taken'>
                <h4>Spend:</h4>
                <h3>$ {getPaymentData?.allPayment?.spend}</h3>
              </div>
            </div>
            {
              <MuiDataTable data={paymentDataArray} columns={dashboardCols} />
            }
          </Container>
      }
    </div>
  )
}
export default Payment