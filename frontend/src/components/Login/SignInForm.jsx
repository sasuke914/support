import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { Toast } from 'react-bootstrap'
import { useResetPasswordMutation, useUserLoginMutation } from '../../redux/api/authApi'

import SignIn from './SignIn'
import SignUp from './SignUp'
import SocialSignUp from './SocialSignUp'
import { useMessageEffect } from '../../utils/messageSideEffect'


import log from '../../images/doc/info.svg'
import register from '../../images/doc/register.svg'
import './SignInForm.css'

const SignInForm = () => {

    const [isSignUp, setSignUp] = useState(false)
    const [show, setShow] = useState(true)

    setTimeout(() => {
        setShow(false)
    }, 10000)

    return (
        <div className={`${isSignUp ? "signin-signup-container sign-up-mode" : "signin-signup-container"}`}>
            <Link to="/">
                <span className="pageCloseBtn"><FaTimes /></span>
            </Link>
            <div className="forms-container">
                <div className="signIn-singUp">
                    <SignIn />
                    <SignUp setSignUp={setSignUp} />
                    <p className="social-text text-center">Or Sign in with social platforms</p>
                    <SocialSignUp handleResponse={setSignUp} />
                </div>
            </div>
            <Toast show={show} onClose={() => setShow(!show)} className="signInToast">
                <Toast.Header>
                    <strong className="mr-auto" style={{ width: '90%' }}>Demo credential</strong>
                </Toast.Header>
                <Toast.Body>Use this account to sign in as a support <br />
                    <hr />
                    <div className='bg-dark text-white p-2 px-3 rounded'>
                        email : support@whosupportswhat.com <br />
                    </div>
                    <hr />
                    <div className='bg-primary p-2 rounded text-white'>
                        Please do not abuse the facility
                    </div>
                </Toast.Body>
            </Toast>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h1 className='text-white'>Need an account ?</h1>
                        <button className="iBtn transparent" onClick={() => setSignUp(true)}>Sign Up</button>
                    </div>
                    <img src={`${log}`} alt="" className="pImg" />
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h1 className='text-white'>Already have an account ?</h1>
                        <button className="iBtn transparent" onClick={() => setSignUp(false)}>Sign In</button>
                    </div>
                    <img src={`${register}`} alt="" className="pImg" />
                </div>
            </div>
        </div>
    )
}

export default SignInForm