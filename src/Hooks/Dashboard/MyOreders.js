import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import DeleteConfirmModal from './DeleteConfirmModal';

const MyOreders = () => {

    const [orders, setOrders] = useState([]);
    const [deletingItem, setDeletingItem] = useState(null)
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?customer=${user.email}`, {

                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }

            })
                .then(res => {
                    // console.log(res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => setOrders(data))
        }
    }, [user])


    return (
        <div>


            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>

                            <th>Product Name</th>
                            <th>Quantiy</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Customer Name</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(o => <tr>
                                <td>{o.tool}</td>
                                <td>{o.quantity}</td>
                                <td>{o.customer}</td>
                                <td>{o.phone}</td>
                                <td>{o.customerName}</td>
                                <td>
                                    {(o.price && !o.paid) && <div className='flex'>
                                        <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>
                                        <div className='ml-2'>
                                            <label onClick={() => setDeletingItem(o)} for="my-modal" class="btn btn-xs">Cancel Order</label>

                                        </div>
                                    </div>
                                    }
                                    {(o.price && o.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deletingItem && <DeleteConfirmModal
                    deletingItem={deletingItem}
                    orders={orders}
                    setOrders={setOrders}
                    setDeletingItem={setDeletingItem}
                ></DeleteConfirmModal>
            }

        </div>
    );
};

export default MyOreders;