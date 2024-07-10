import React from 'react'
import { FaUserAlt, FaUser, FaUpload, FaBlog, FaTrashRestore } from 'react-icons/fa'
import auth from '../../auth/authHelper'
import { Link } from 'react-router-dom'

const AvailableServiceContent = () => {

    const jwt = auth.isAuthenticated()

    const availabeServiceArray = [
        {
            title: 'User Registration and Login',
            icon: <FaUserAlt className="icon" />,
            text: 'Register using your email or social media account (Facebook, Google). Verify your email to ensure authenticity.',
            button: 'Register Now',
            link: jwt?.id ? '/' : '/login',
        },
        {
            title: 'Verified Profiles',
            icon: <FaUser className="icon" />,
            text: 'Each profile must include a full name, verified email, and at least one active social media link.',
            button: 'View Profiles',
            link: '/users',
        },
        {
            title: 'Upload and Manage Interactions',
            icon: <FaUpload className="icon" />,
            text: 'Upload screenshots or photos of social media conversations. Provide detailed public information about individuals, including their social media platform, full name, and public profile links.',
            button: 'Upload Interaction',
            link: jwt?.id ? '/blogs/create' : '/login',
        },
        {
            title: 'Categorized Content',
            icon: <FaBlog className="icon" />,
            text: 'Classify content into categories like Far-right movements, Racism, LGBTQ+ phobia, Xenophobia, Ukraine, Russia, Palestine-Israel, and General comments.',
            button: 'Select Category',
            link: '/blog',
        },
        {
            title: 'Request Information Removal',
            icon: <FaTrashRestore className="icon" />,
            text: 'Submit a request to remove your information if needed.',
            button: 'Submit Request',
            link: jwt?.id ? '/blog' : '/login',
        },
    ]
    return (
        <div className="row">
            {availabeServiceArray.map((item, index) => (
                <div key={index} className="col-xl-6 d-flex align-items-stretch my-2">
                    <div className="icon-box mt-4 mt-xl-0">
                        <div className='itemCenter'>
                            {item.icon}
                            <h4>{item.title}</h4>
                        </div>
                        <p>{item.text}</p>
                        <Link to={item.link}>{item.button}</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AvailableServiceContent