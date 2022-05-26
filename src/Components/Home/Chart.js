import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";
import useTools from '../../Hooks/useTools';



export default function App() {
    const [tools, setTools] = useTools()
    return (
        <>
            <AreaChart className="chart"
                width={400}
                height={300}
                data={tools}
            // margin={{
            //     top: 10,
            //     right: 30,
            //     left: 0,
            //     bottom: 0
            // }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </>
    );
}