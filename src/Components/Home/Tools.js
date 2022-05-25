import React, { useEffect, useState } from 'react';
import useTools from '../../Hooks/useTools';
import Purchase from '../Purchase/Purchase';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useTools([])
    const [purchase, setPurchase] = useState(null)
    const reversed = tools.slice(0).reverse();

    // const slicedTools = reverse.slice(0, 6);
    return (
        <div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    reversed.slice(0, 6).map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                        setPurchase={setPurchase}
                    ></Tool>)
                }
            </div>
            {/* {
                <Purchase purchase={purchase}></Purchase>
            } */}
        </div>
    );
};

export default Tools;