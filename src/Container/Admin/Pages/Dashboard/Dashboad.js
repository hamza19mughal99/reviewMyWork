import axios from 'axios'
import React from 'react'

const Dashboad = () => {

    const addfundshandler = () => {
        axios.put('auth/add-funds').then((res) => {
            console.log(res.data)
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <div>
            <button onClick={addfundshandler}>Add Funds</button>
        </div>
    )
}

export default Dashboad