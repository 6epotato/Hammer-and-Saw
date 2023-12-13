import React from 'react';

const DeleteConfirmationAllorders = ({ deletingItem, allOrders, setAllOrders, setDeletingItem }) => {
    const { _id, tool } = deletingItem;
    // delete orders
    const handleDelete = id => {
        const url = `https://hammer-and-saw-server.vercel.app/purchase/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const remaining = allOrders.filter(allOrder => allOrder._id !== id);
                setAllOrders(remaining);
                setDeletingItem(null);
            })

    }
    return (
        <div>
            <input type="checkbox" id="DelteConfirmAll" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure You want to delete {tool}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} class="btn">Delete</button>
                        <label for="DelteConfirmAll" class="btn btn-tiny">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationAllorders;