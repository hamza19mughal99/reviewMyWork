import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import BlackButton from '../../../../Component/Button/BlackButton';
import Input from '../../../../Component/Input/Input';
import { errorNotify, successNotify } from '../../../../Util/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { EditPassword, EditProfile } from '../../../../Redux/Action/auth';
import SpinLoader from '../../../../Util/SpinLoader';

const Profile = () => {

  const dispatch = useDispatch();
  const userFound = JSON.parse(localStorage.getItem('user'))

  const [register, setRegister] = useState({
    fullName: userFound?.user?.fullName,
    email: userFound?.user?.email,
  })
  const [changePassword, setChangePassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const { loading, getEditData, error } = useSelector((state) => state.getEditProfile)
  const { loading: passwordLoading, getEditPasswordData, error: passwordError } = useSelector((state) => state.getEditPassword)

  useEffect(() => {
    if (getEditData) {
      successNotify("Update Successfully!")
      dispatch({ type: "EDIT_PROFILE_RESET" })
    }
    if (error) {
      errorNotify(error)
      dispatch({ type: "EDIT_PROFILE_RESET" })
    }
  }, [error, getEditData])

  useEffect(() => {
    if (getEditPasswordData) {
      successNotify("Password Updated Successfully!")
      dispatch({ type: "EDIT_PASSWORD_RESET" })

      setChangePassword({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      })
    }
    if (passwordError) {
      errorNotify(passwordError)
      dispatch({ type: "EDIT_PASSWORD_RESET" })
    }
  }, [passwordError, getEditPasswordData])

  const inputHandler = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    })
  }

  const passwordHandler = (e) => {
    setChangePassword({
      ...changePassword,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (register.fullName.length === 0) {
      errorNotify("Please filled up FullName")
      return
    }

    let data = { ...register }

    dispatch(EditProfile(data))
  }

  const passwordChangeHandler = (e) => {
    e.preventDefault();

    if (changePassword.oldPassword.length === 0 || changePassword.newPassword.length === 0 ||
      changePassword.confirmPassword.length === 0) {
      errorNotify("Please filled up all field")
      return
    }

    else if (changePassword.newPassword !== changePassword.confirmPassword) {
      errorNotify("Password are not same")
      return
    }

    let data = {
      oldPassword: changePassword.oldPassword,
      newPassword: changePassword.newPassword,
      id: userFound?.user?._id
    }

    dispatch(EditPassword(data))
  }

  return (
    <div style={{ backgroundColor: "#eff0f0a1" }}>
      <Container fluid>
        <Row className='justify-content-center'>
          <Col md={8} className='p-0'>
            <div className='signup_form'>
              <h1 className='text-center'>Edit Profile</h1>

              <Form onSubmit={submitHandler}>
                <Row>
                  <Col md={6}>
                    <Input type="text" label="Full Name" name='fullName' value={register.fullName} onChange={inputHandler} />
                  </Col>
                  <Col md={6}>
                    <Input disable={true} type="email" label="Email Address" name='email' value={register.email} onChange={inputHandler} />
                  </Col>
                </Row>

                <div className='d-flex justify-content-end'>
                  {
                    loading ? <SpinLoader /> :
                      <BlackButton>
                        Save Changes
                        <img src='/images/btn_arrow_img.png' alt='' />
                      </BlackButton>
                  }
                </div>
              </Form>
            </div>
          </Col>

          <Col md={8} className='p-0'>
            <div className='signup_form' style={{ paddingTop: "0px" }}>
              <h1 className='text-center'>Edit Password</h1>

              <Form onSubmit={passwordChangeHandler}>
                <Row>
                  <Col md={12}>
                    <Input type="password" label="Old Password" name="oldPassword" value={changePassword.oldPassword} onChange={passwordHandler} />
                  </Col>
                  <Col md={6}>
                    <Input type="password" label="New Password" name="newPassword" value={changePassword.newPassword} onChange={passwordHandler} />
                  </Col>
                  <Col md={6}>
                    <Input type="password" label="Confirm Password" name="confirmPassword" value={changePassword.confirmPassword} onChange={passwordHandler} />
                  </Col>
                </Row>

                <div className='d-flex justify-content-end'>
                  {
                    passwordLoading ? <SpinLoader /> :
                      <BlackButton>
                        Change Password
                        <img src='/images/btn_arrow_img.png' alt='' />
                      </BlackButton>
                  }
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Profile