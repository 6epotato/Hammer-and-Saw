import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

const Tool = ({ tool}) => {
    const { _id, name, img, moq, quantity, description, price } = tool;
    const navigate = useNavigate()
    const navigateToPurchase = _id => {
        navigate(`/purchase/${_id}`)
    }
    return (
        <div>
            <motion.div class="card w-96 bg-base-100 shadow-xl" whileHover={{ scale: 1.1 }}
               >
                <figure class="px-10 pt-10">
                    <img style={{ height: "15vh" }} src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Minimum Order Quantity: {moq}</small></p>
                    <p><small>Available Quantity: {quantity}</small></p>
                    <p><small>Description:{description}</small></p>
                    <div class="card-actions">
                        <button onClick={() => navigateToPurchase(_id)} class="btn">Buy Now</button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Tool;