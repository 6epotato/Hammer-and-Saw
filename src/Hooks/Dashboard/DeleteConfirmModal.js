import React from 'react';

const DeleteConfirmModal = ({ deletingItem, orders, setOrders, setDeletingItem }) => {
    const { _id, tool } = deletingItem;
    // delete orders
    const handleDelete = id => {
        const url = `http://localhost:5000/purchase/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
                setDeletingItem(null);
            })

    }
    return (
        <div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure You want to delete {tool}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} class="btn">Delete</button>
                        <label for="my-modal" class="btn btn-tiny">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;