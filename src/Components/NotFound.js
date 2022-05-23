import React from 'react';
import error from '../Assets/Notfound/error.png'

const NotFound = () => {
    return (
        <div className='grid items-center justify-center'>
            <img src={error} alt="" />
        </div>
    );
};

export default NotFound;