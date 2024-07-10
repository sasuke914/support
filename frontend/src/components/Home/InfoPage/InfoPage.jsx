import React from 'react'
import { FaClock, FaHeadset, FaHouseUser, FaUserAlt } from "react-icons/fa"
import { Link } from 'react-router-dom'
import './InfoPage.css'

const InfoPage = () => {
    return (
        <section className="why-us">
            <div className="row">
                <div className="content text-center">
                    <h3>About</h3>
                    <p>
                        Who Supports What is a platform dedicated to promoting transparency in online interactions. <br />
                        Users can upload and comment on social media interactions, publicly sharing their opinions about individuals. <br />
                    </p>
                    <div className="text-center">
                        <Link to="/about" className="more-btn">More Detail <i className="bx bx-chevron-right"></i></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoPage