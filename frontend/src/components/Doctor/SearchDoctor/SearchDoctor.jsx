import React from 'react'
import AdminLayout from '../../Admin/AdminLayout/AdminLayout'
import VerifiedUsers from './VerifiedUsers'

const SearchDoctor = () => {

    return (
        <AdminLayout>
            <h4>User Management</h4>
            <VerifiedUsers />
        </AdminLayout>
    )
}

export default SearchDoctor
