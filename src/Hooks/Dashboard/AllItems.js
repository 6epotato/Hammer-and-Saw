import React from 'react';
import useTools from '../useTools';

const AllItems = () => {
    const [tools, setTools] = useTools();
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
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllItems;