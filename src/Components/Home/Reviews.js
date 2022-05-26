import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://mighty-journey-66234.herokuapp.com/review'
    ).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4'>
            {
                reviews.map(review => <ReviewCard
                    key={review._id}
                    review={review}
                ></ReviewCard>)
            }
        </div>
    );
};

export default Reviews;