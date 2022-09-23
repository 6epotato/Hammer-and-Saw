import React from 'react';
import { motion, useAnimation } from "framer-motion"

const ReviewCard = ({ review }) => {
    const { customerName, rating, description } = review
    return (
        <div>
            <motion.div class="card w-96 bg-base-100 shadow-xl" whileHover={{ scale: 1.1 }}>

                <div class="card-body items-center text-center">
                    <h2 class="card-title">{customerName}</h2>
                    <p><small>gives us</small></p>
                    <p><small><b>{rating}</b> rating </small></p>
                    <p><small><b>His Thought is: </b>{description}</small></p>
                </div>
            </motion.div>
        </div>
    );
};

export default ReviewCard;