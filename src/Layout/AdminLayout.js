import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Container/Admin/Routes/Header'
import { adminSideBarItems } from '../Container/Admin/Routes/Routes'
import NotFound from '../Container/Pages/NotFound/NotFound'

const AdminLayout = () => {
    const userFound = JSON.parse(localStorage.getItem('user'))

    return (
        <React.Fragment>
            {
                userFound?.user?.role === 'admin' ?
                    <Header sideBarItems={adminSideBarItems}>
                        <Outlet />
                    </Header> : <NotFound />
            }
        </React.Fragment>
    )
}
export default AdminLayout