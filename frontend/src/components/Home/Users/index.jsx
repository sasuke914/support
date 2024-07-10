import React from "react"
import VerifiedUsers from "../../Doctor/SearchDoctor/VerifiedUsers"
import Header from "../../Shared/Header/Header"
import Footer from "../../Shared/Footer/Footer"



const Users = () => (
    <>
        <Header />
        <div style={{ marginTop: '180px' }}></div>
        <VerifiedUsers />
        <Footer />
    </>
)

export default Users