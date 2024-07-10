import React, { useState, useEffect } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { useForm } from "react-hook-form"
import Spinner from 'react-bootstrap/Spinner'
import { useNavigate } from 'react-router-dom'

import { message } from 'antd'

import Hcaptcha from './HCaptcha'
import { signIn } from '../../api/api_user'
import auth from '../auth/authHelper'
import { sendRepassword } from '../../api/api_email'

const SignIn = ({ handleResponse }) => {

  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [infoError, setInfoError] = useState('')

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const navigate = useNavigate()
  // const [userLogin, { isError, isLoading, isSuccess, error }] = useUserLoginMutation()
  const [forgotEmail, setForgotEmail] = useState('')
  // const [resetPassword, { isError: resetIsError, isSuccess: resetIsSuccess, error: resetError, isLoading: resetIsLoading }] = useResetPasswordMutation()
  const [token, setToken] = useState(null)

  const onSubmit = async (event) => {
    signIn({ ...event }).then((data) => {
      if (data.token) {
        auth.authenticate('jwt', data)
        message.success('Successfully Logged in')
        navigate('/')
      }
      else {
        message.error(data.error)
      }
    })
  }

  const onHandleForgotPassword = async (e) => {
    e.preventDefault()
    // resetPassword({ email: forgotEmail })
    // setForgotEmail("")
    // setShowForgotPassword(false)
    setLoading(true)
    sendRepassword({ email: forgotEmail }).then((data) => {
      if (data.message) {
        setUserEmail(data.email)
        message.success(data.message)
        setLoading(false)
      }
      else if (data.error) {
        // setUserEmail(data.email)
        message.success(data.error)
        setLoading(false)
        // setIsModalOpen(true)
      }
      else {
        message.error('Error')
        setLoading(false)
      }
    })
  }
  // useMessageEffect(resetIsLoading, resetIsSuccess, resetIsError, resetError, "Successfully Reset Password, Please check your Email!!")
  // useEffect(() => {
  //   if (isError) {
  //     message.error(error?.data?.message)
  //     setInfoError(error?.data?.message)
  //   }
  //   if (isSuccess) {
  //     message.success('Successfully Logged in')
  //     navigate('/')
  //   }
  // }, [isError, error, isSuccess, navigate])

  const handleShowForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword)
  }

  return (
    <>
      {showForgotPassword
        ?
        <form className="sign-in-form" onSubmit={onHandleForgotPassword}>
          <h2 className="title">Forgot Password</h2>
          <div>To Forgot Your Password Please Enter your email</div>
          <div className="input-field">
            <span className="fIcon"><FaEnvelope /></span>
            <input value={forgotEmail !== undefined && forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} placeholder="Enter Your Email" type="email" required />
          </div>
          <div onClick={handleShowForgotPassword} className='text-bold' style={{ cursor: "pointer", color: '#4C25F5' }}>Stil Remember Password ?</div>
          <button className="iBtn" type="submit" value="sign In" >
            {loading ? <Spinner animation="border" variant="info" /> : "Submit"}
          </button>
        </form>
        :
        <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <span className="fIcon"><FaEnvelope /></span>
            <input {...register("email", { required: true })} placeholder="Enter Your Email" type="email" />
          </div>
          {errors.email && <span className="text-danger">This field is required</span>}
          <div className="input-field">
            <span className="fIcon"><FaLock /></span>
            <input {...register("password", { required: true })} type="password" placeholder="Enter Your Password" />
          </div>
          {errors.password && <span className="text-danger">This field is required</span>}
          {infoError && <p className="text-danger">{infoError}</p>}
          {/* <div onClick={handleShowForgotPassword} className='text-bold' style={{ cursor: "pointer", color: '#4C25F5' }}>Forgot Password ?</div> */}
          <Hcaptcha setToken={(hcaptcha) => setToken(hcaptcha)} />
          <button className="iBtn" type="submit" value="sign In" disabled={token ? false : true}>
            {loading ? <Spinner animation="border" variant="info" /> : "Sign In"}
          </button>
        </form>
      }
    </>
  )
}

export default SignIn 