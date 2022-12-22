import React, { useEffect, useState } from 'react';

const useTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://hammer-and-saw-server.onrender.com/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return [tools, setTools]
};

export default useTools;