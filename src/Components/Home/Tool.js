import React from 'react';

const Tool = ({ tool }) => {
    const { name, img, moq, quantity, description, price } = tool;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Minimum Order Quantity: {moq}</small></p>
                    <p><small>Available Quantity: {quantity}</small></p>
                    <p><small>Description:{description}</small></p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;