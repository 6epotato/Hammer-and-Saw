import React, { useState } from 'react';
import useTools from '../useTools';
import AllitemsDeleteModal from './AllitemsDeleteModal';

const AllItems = () => {
    const [tools, setTools] = useTools();
    const [allItemsdeletingItem, setAllitemsDeletingItem] = useState(null)

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>

                            <th>Product Name</th>
                            <th>Minimum Quantity</th>
                            <th>Available Quantiy</th>
                            <th>Price per unit</th>
                            <th>Product Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map(tool => <tr>
                                <td>{tool.name}</td>
                                <td>{tool.moq}</td>
                                <td>{tool.quantity}</td>
                                <td>{tool.price}</td>
                                <td>{tool.description}</td>
                                <td><label onClick={() => setAllitemsDeletingItem(tool)} for="allitemsDeletemodal" class="btn modal-button">Delete</label></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {
                allItemsdeletingItem && <AllitemsDeleteModal
                    allItemsdeletingItem={allItemsdeletingItem}
                    setAllitemsDeletingItem={setAllitemsDeletingItem}
                    tools={tools}
                    setTools={setTools}
                ></AllitemsDeleteModal>
            }
        </div>
    );
};

export default AllItems;