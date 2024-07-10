import React from 'react'
import Header from '../../Shared/Header/Header'
import Blog from '../Blog/Blog'
import RecentDelete from '../recentDelete/RecentDelete'
// import ClinicAndSpecialities from '../ClinicAndSpecialities/ClinicAndSpecialities'
import HeroSection from '../HeroSection/HeroSection'
import InfoPage from '../InfoPage/InfoPage'
import Service from '../Services/Service'
import Footer from '../../Shared/Footer/Footer'
import Availabe from '../AvailableFeatures/Available'

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <InfoPage />
            <Availabe />
            <Blog />
            <RecentDelete />
            <Service />
            {/* <ClinicAndSpecialities /> */}
            <Footer />
        </>
    )
}

export default Home 