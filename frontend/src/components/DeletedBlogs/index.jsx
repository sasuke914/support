import React from 'react'
import DeleteTable from '../Admin/Dashboard/DeleteTable'
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'
import { Container } from 'react-bootstrap'
import SubHeader from '../Shared/SubHeader'


const DeletedBlogs = () => (
  <>
    <Header />
    <div style={{ height: '100vh' }}>
      <SubHeader title='Deleted Blogs' />
      <Container>
        <div className='p-5'>
          <DeleteTable />
        </div>
      </Container>
    </div>
    <Footer />
  </>
)

export default DeletedBlogs