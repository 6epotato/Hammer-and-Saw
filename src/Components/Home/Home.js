import React from 'react';
import Banner from './Banner';
import BussinesSummery from './BussinesSummery';
import Chart from './Chart';
import HappyCustomers from './HappyCustomers';
import Reviews from './Reviews';
import Tools from './Tools';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Home = () => {
    const { ref, inView } = useInView({
        threshold:0.2
    })
  
    const animation =useAnimation()
   
    useEffect(() => {
       
        if(inView){
            animation.start({
                x:0,
                transition:{ type: "spring", duration: 1, bounce: 0.3 }
            })

        }
        if(!inView){
            animation.start({
                x:"-100vw"
            })
        }
    }, [inView,animation])
   
    
    return (
        <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <Banner></Banner>
            
                <div ref={ref}>
                <h1 className='text-bold text-3xl text-center my-12'>Available Products</h1>
                <motion.div className='flex justify-center'  animate={animation}  
                >
                    <Tools></Tools>
                </motion.div>
                </div>
          
            <h1 className='text-bold text-3xl text-center my-12'>Our Bussiness Summery</h1>
            <div className='my-12'>
                <BussinesSummery></BussinesSummery>
            </div>
            <div>
            <h1 className='text-bold text-3xl text-center my-12'>Reviews of Our customers</h1>
            <div className='flex justify-center' whileHover={{ scale: 1.1 }}>
                <Reviews></Reviews>
            </div>
            </div>
            <h1 className='text-bold text-3xl text-center my-12'>Our monthely updates </h1>
            <div className='flex justify-center items-center'>
                <Chart></Chart>
            </div>
          
          
           <HappyCustomers></HappyCustomers>
           
        </motion.div>
    );
};

export default Home;