import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import { heroBg } from '../../../images'
import './index.css'
import auth from '../../auth/authHelper'
import HeroCarousel from './HeroCarousel'

const HeroSection = () => {
    return (
        <section id="hero" className='alignCenter'>
            <HeroCarousel />
            <div className="container">
                <div className='heroCard'>
                    <small style={{ color: '#1977cc' }}>Bringing Transparency to Online Interactions</small>
                    <h1 className='my-3'>Who Supports What</h1>
                    <p style={{ color: '#2c3e50' }}>
                        Delivers messages faster than any other application. <br />
                        Lets you access your chats from multiple devices. <br />
                        No limits on the size of your media and chats. <br />
                        Groups can hold up to 200,000 members.
                    </p> <br />
                    {!auth.isAuthenticated() && <>
                        <p style={{ color: '#2c3e50' }}>Register now to upload the content you disagreed with.</p><br />
                        <Link to='/login'><Button variant="outline-primary">Register Now</Button></Link>
                        <Link to='/login' className='m-3'><Button variant="outline-primary">Login</Button></Link>
                    </>}
                </div>
            </div>
        </section>
    )
}
export default HeroSection 