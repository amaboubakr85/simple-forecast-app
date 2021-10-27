import React from 'react';
import '../styles/loader.css'

const Loader = () => {
    return (
        <div className="city-loader">
            <div className="cssload-loader">
                <div className="cssload-inner cssload-one"></div>
                <div className="cssload-inner cssload-two"></div>
                <div className="cssload-inner cssload-three"></div>

            </div>
            <h5 className='mt-4'>please wait while getting your data</h5>
        </div>
    );
};

export default Loader;