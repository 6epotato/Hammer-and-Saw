import React from 'react';

const AllitemsDeleteModal = ({ allItemsdeletingItem, setAllitemsDeletingItem, tools, setTools }) => {
    const { _id, name } = allItemsdeletingItem;
    const handleDelete = id => {
        const url = `https://hammer-and-saw-server.onrender.com/tool/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const remaining = tools.filter(tool => tool._id !== id);
                setTools(remaining);
                setAllitemsDeletingItem(null);
            })

    }
    return (
        <div>



            <input type="checkbox" id="allitemsDeletemodal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You sure you want To delete {name}</h3>
                    <p class="py-4"></p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} class="btn btn-danger">Delete</button>
                        <label for="allitemsDeletemodal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AllitemsDeleteModal;