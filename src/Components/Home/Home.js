import React from 'react';
import Banner from './Banner';
import BussinesSummery from './BussinesSummery';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-bold text-3xl text-center my-12'>Available Products</h1>
            <Tools></Tools>
            <h1 className='text-bold text-3xl text-center my-12'>Our Bussiness Summery</h1>
            <div className='my-12'>
                <BussinesSummery></BussinesSummery>
            </div>
            <h1 className='text-bold text-3xl text-center my-12'>Reviews of Our customers</h1>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;