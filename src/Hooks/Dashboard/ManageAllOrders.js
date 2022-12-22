import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteConfirmationAllorders from '../Dashboard/DeleteConfirmationAllorders'

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch('https://hammer-and-saw-server.onrender.com/purchase', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllOrders(data))


    }, [])
    const [deletingItem, setDeletingItem] = useState(null)
    const [buttonText, setButtonText] = useState("Pending");
    const changeText = (text) => setButtonText(text);
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
                            allOrders.map(o => <tr>
                                <td>{o.tool}</td>
                                <td>{o.quantity}</td>
                                <td>{o.customer}</td>
                                <td>{o.phone}</td>
                                <td>{o.customerName}</td>
                                <td>
                                    {(o.price && !o.paid) && <div className='flex'>
                                        <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>
                                        <div className='ml-2'>
                                            <label onClick={() => setDeletingItem(o)} for="DelteConfirmAll" class="btn btn-xs">Cancel Order</label>

                                        </div>
                                    </div>
                                    }
                                    {(o.price && o.paid) && <div>
                                        <button onClick={() => { this.changeText("newtext") }} className='btn btn-xs btn-success'>{buttonText}</button>
                                    </div>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

            {
                deletingItem &&
                <DeleteConfirmationAllorders
                    deletingItem={deletingItem}
                    allOrders={allOrders}
                    setAllOrders={setAllOrders}
                    setDeletingItem={setDeletingItem}>
                </DeleteConfirmationAllorders>


            }

        </div>

    );
};

export default ManageAllOrders;