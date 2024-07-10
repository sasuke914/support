import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.png'
import './AdminHeader.css'
import { Container } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { Button } from 'antd'
import auth from '../auth/authHelper'
import { read } from '../../api/api_user'
import { END_POINT } from '../../config'

const AdminHeader = () => {
    const [user, setUser] = useState()
    const jwt = auth.isAuthenticated();
    useEffect(() => {
        jwt && read({ id: jwt.id }, { t: jwt.token }).then((data) => {
            data && setUser(data)
        })
    })
    return (
        <Container className="header spaceBetween">
            <Link to='/'>
                <img style={{ width: '60px' }} src={logo} alt="Logo" />
            </Link>

            <div className='alignCenter'>
                <div className="top-nav-search">
                    <form>
                        <input type="text" className="form-control" placeholder="Search here" />
                        <Button className="searchBtn" type="submit"><FaSearch /></Button>
                    </form>
                </div>

                <div className='profileImage'>
                    <img src={`${END_POINT}/uploads/${user?.file ? user.file : 'avatar.png'}`} alt="" className="img-fluid" />
                </div>
            </div>

        </Container>
    )
}

export default AdminHeader