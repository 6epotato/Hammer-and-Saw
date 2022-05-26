import React from 'react';

const ReviewCard = ({ review }) => {
    const { customerName, rating, description } = review
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">

                <div class="card-body items-center text-center">
                    <h2 class="card-title">{customerName}</h2>
                    <p><small>gives us</small></p>
                    <p><small><b>{rating}</b> rating </small></p>
                    <p><small><b>His Thought is: </b>{description}</small></p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;