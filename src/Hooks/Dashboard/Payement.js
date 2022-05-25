import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Shared/Loading';
import CheckoutFrom from './CheckoutFrom';

const stripePromise = loadStripe('pk_test_51L1nI2BXw0qb4AsJ7CqfrQ67sjE43rkQtiJGlt2mEEashPnyGG4FrONGWeTF4CDSwfhJZ3jc2HDnRBNveYf2bVkj00tLtmzooJ');

const Payement = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/purchase/${id}`;

    const { data: purchase, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">You are paying for <span className='text-cyan-500'>{purchase.tool}</span></h2>
                            <p><small>Your quantity is <b>{purchase.quantity}</b> </small></p>
                            <p><small>Price is <b>${purchase.price}</b></small></p>
                        </div>
                    </div>
                    <div>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <Elements stripe={stripePromise}>
                                    <CheckoutFrom />
                                </Elements>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payement;