import React, { useEffect, useState } from 'react';
import useTools from '../../Hooks/useTools';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useTools([])
    const slicedTools = tools.slice(0, 6);
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4'>
            {
                slicedTools.map(tool => <Tool
                    key={tool.id}
                    tool={tool}
                ></Tool>)
            }
        </div>
    );
};

export default Tools;