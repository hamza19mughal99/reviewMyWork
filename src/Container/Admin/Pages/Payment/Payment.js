import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import MuiDataTable from '../../../../Component/MuiDataTables/MuiDataTables';
import { useDispatch, useSelector } from 'react-redux';
import { AllPaymentGetData } from '../../../../Redux/Action/admin';
import Loader from '../../../../Util/Loader';
import './Payment.css';
import moment from 'moment';

const Payment = () => {
  const dispatch = useDispatch();

  const { loading, getPaymentData } = useSelector((state) => state.getAllPaymentData)

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
    { name: 'fullName', label: "Full Name" },
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
      name: "createdAt", label: 'Date',
      options: {
        customBodyRender: (value) => {
          return (
            <div>{moment(value).format('L')}</div>
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
      fullName: p?.user?.fullName,
      paymentAmount: `$${p?.paymentAmount}`,
      amountType: p?.amountType,
      planType: p?.user?.planType?.planName,
      createdAt: p?.createdAt
    }
  })

  return (
    <div className='reviewer_work_page'>
      {
        loading ? <Loader /> :
          <Container>
            <h1>All Payments</h1>
            <div className='payment_box'>
              <div className='payment_given'>
                <h4>Earned:</h4>
                <h3>$ {getPaymentData?.allPayment?.earning}</h3>
              </div>
              <div className='payment_taken'>
                <h4>Spent:</h4>
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