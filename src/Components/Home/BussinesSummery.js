import React from 'react';
import company from '../../Assets/BussinesSummeryIcon/company.png'
import coronavirus from '../../Assets/BussinesSummeryIcon/coronavirus.png'
import money from '../../Assets/BussinesSummeryIcon/money-bag.png'
import rating from '../../Assets/BussinesSummeryIcon/rating.png'
import tool from '../../Assets/BussinesSummeryIcon/tool-box.png'

const BussinesSummery = () => {
    return (
        <div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-5 gap-4'>
                <div class="card shadow-xl">
                    <figure><img style={{ width: "45px" }} src={company} alt="Movie" /></figure>
                    <div class="card-body items-center">
                        <h2 class="card-title">20+ Companies</h2>

                    </div>
                </div>
                <div class="card shadow-xl">
                    <figure><img style={{ width: "45px" }} src={coronavirus} alt="Movie" /></figure>
                    <div class="card-body items-center">
                        <h2 class="card-title">5+ Countries</h2>

                    </div>
                </div>
                <div class="card shadow-xl">
                    <figure><img style={{ width: "45px" }} src={money} alt="Movie" /></figure>
                    <div class="card-body items-center">
                        <h2 class="card-title">1M+ Revenew</h2>

                    </div>
                </div>
                <div class="card shadow-xl">
                    <figure><img style={{ width: "45px" }} src={tool} alt="Movie" /></figure>
                    <div class="card-body items-center">
                        <h2 class="card-title">1k+ Tools</h2>

                    </div>
                </div>
                <div class="card shadow-xl">
                    <figure><img style={{ width: "45px" }} src={rating} alt="Movie" /></figure>
                    <div class="card-body items-center">
                        <h2 class="card-title">5M+ Happy Client</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BussinesSummery;