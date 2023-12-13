import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Components/Shared/Loading';

const useTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://hammer-and-saw-server.vercel.app/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return [tools, setTools]

};

export default useTools;