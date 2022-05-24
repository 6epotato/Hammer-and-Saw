import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { toolID } = useParams()
    const [toolDetail, setToolDetail] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/tool/${toolID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setToolDetail(data))
    }, [])

    return (
        <div className='grid items-center justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{toolDetail.name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;