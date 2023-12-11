import React from 'react';
import { RotatingLines } from "react-loader-spinner";

const SpinLoader = () => {
    return (
        <div className='mt-4 mx-5'>
            <RotatingLines
                strokeColor="#000"
                strokeWidth="5"
                animationDuration="0.75"
                width="50"
                visible={true}
            />
        </div>
    )
}

export default SpinLoader