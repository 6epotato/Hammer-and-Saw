import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { toolID } = useParams()
    const [toolDetail, setToolDetail] = useState({})
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const url = `https://mighty-journey-66234.herokuapp.com/tool/${toolID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setToolDetail(data))
    }, [])
    const { _id, name, price, moq, quantity, description, img } = toolDetail;
    console.log(quantity, moq);

    const handleSubmit = event => {
        event.preventDefault();
        const phone = event.target.phone.value;

        const address = event.target.address.value;
        const newQuantity = event.target.newQuantity.value;

        // console.log(_id, name, phone, address, newQuantity);


        // {(newQuantity < moq && newQuantity > quantity) ?
        //     toast.error('Quantity must be greater than minimum quantity and smaller than Available Quntity')
        // :

        // if (newQuantity > moq && newQuantity < quantity) {
        //     const finalQuantity = newQuantity;
        // }
        // else {
        //     toast.error('Quantity must be greater than minimum quantity and smaller than Available Quntity')
        // }

        const purchase = {
            purchaseID: _id,
            tool: name,
            phone: phone,
            address: address,
            price: price,
            quantity: newQuantity,
            customer: user.email,
            customerName: user.displayName,
        }



        fetch('https://mighty-journey-66234.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('You have succesfully purchased the Product')
            })
    }

    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
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
                        </div>
                    </div>
                    <div>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <div class="card w-full shadow-xl">
                                    <div class="card-body items-center">
                                        <h2 class="card-title">You are purchasing: {name}</h2>
                                        <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-1'>
                                            <label className="label">
                                                <span className="label-text">Name</span>

                                            </label>
                                            <input type="text" name='name' disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                                            <label className="label">
                                                <span className="label-text">Email</span>

                                            </label>
                                            <input type="text" name='email' disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                                            <label className="label">
                                                <span className="label-text">Phone</span>

                                            </label>
                                            <input type="text" name='phone' placeholder="Enter your phone numbre" class="input input-bordered w-full max-w-xs" />
                                            <label className="label">
                                                <span className="label-text">Address</span>

                                            </label>
                                            <input type="text" name='address' placeholder="Enter Your address" class="input input-bordered w-full max-w-xs" />
                                            <label className="label">
                                                <span className="label-text">Enter Quantity</span>

                                            </label>
                                            <input type="number" name='newQuantity' placeholder="Enter quantity" class="input input-bordered w-full max-w-xs" />
                                            <input type="submit" value={'submit'} class="btn  w-full max-w-xs my-5" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;


