import React from 'react';
import Happycustomer from '../../Assets/BussinesSummeryIcon/Happycustomer.jpg'

const HappyCustomers = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={Happycustomer} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Why Everyone Loves Us?</h1>
                        <p class="py-6">In our inventory we have 100% geneuen and real product and it have the 100% gurrenty
                            we served 5M+ customers with  1M+ Annual revenue, Our we have 1k+ tools and our inventory have 20+ big coompanys product.When people get there product in time and which is 100% authentic then  why dont they love us?</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyCustomers;