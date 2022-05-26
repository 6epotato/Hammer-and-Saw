import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool, setPurchase }) => {
    const { _id, name, img, moq, quantity, description, price } = tool;
    const navigate = useNavigate()
    const navigateToPurchase = _id => {
        navigate(`/purchase/${_id}`)
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img style={{ width: "200px" }} src={img} alt="Shoes" class="rounded-xl" />
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
            </div>
        </div>
    );
};

export default Tool;