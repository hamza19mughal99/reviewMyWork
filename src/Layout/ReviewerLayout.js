import React from 'react'
import { Outlet } from 'react-router-dom'
import NotFound from '../Container/Pages/NotFound/NotFound'

const ArtistLayout = () => {

    const userFound = JSON.parse(localStorage.getItem('user'))

    return (
        <React.Fragment>
            {
                userFound?.user?.role === 'reviewer' ?
                    <Outlet /> : <NotFound />
            }
        </React.Fragment>
    )
}
export default ArtistLayout