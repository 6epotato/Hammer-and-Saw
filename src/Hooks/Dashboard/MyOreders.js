import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOreders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?customer=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])

    return (
        <div>
            <h1>This is my orders {orders.length}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>

                            <th>Product Name</th>
                            <th>Quantiy</th>
                            <th>Email</th>
                            <th>Email</th>
                            <th>Customer Name</th>
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
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOreders;