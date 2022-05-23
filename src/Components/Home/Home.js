import React from 'react';
import Banner from './Banner';
import BussinesSummery from './BussinesSummery';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-bold text-3xl text-center my-12'>Available Products</h1>
            <Tools></Tools>
            <div className='my-12'>
                <BussinesSummery></BussinesSummery>
            </div>
        </div>
    );
};

export default Home;