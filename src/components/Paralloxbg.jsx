import React from 'react';
import Space from '../../public/assets/logos/space1.jpg'; 
import { motion,useScroll, useSpring, useTransform } from 'motion/react';

export default function Paralloxbg() {
    const { scrollYProgress } = useScroll();
  const x=useSpring(scrollYProgress, {damping:50});
    const mountain1=useTransform(x, [0, 0.5], ["0%", "10%"]);
    const mountain2=useTransform(x, [0, 0.5], ["0%", "30%"]);
    const planet=useTransform(x, [0, 0.1], ["0%", "50%"]);
    const mountain3=useTransform(x, [0, 0.5], ["0%", "70%"]);
    
  return (

    <section className="absolute inset-0 bg-black/40 " >
    <div className="relative h-screen overflow-y-hidden">
      
        <div
        className="absolute inset-0 w-full h-screen -z-50"
        style={{
          backgroundImage: "url(/assets/logos/space.jpg)",backgroundSize: "cover" , backgroundPosition : "bottom",
        }}
      />
        
        <motion.div className='absolute  inset-0 -z-40'
        style={{backgroundImage:"url(/assets/mountain-3.png)", backgroundSize: "cover",backgroundPosition:"bottom" , y: mountain3}}
        />

        
        <motion.div className='absolute  inset-0 -z-30'
        style={{backgroundImage:"url(/assets/planets.png)", backgroundSize: "cover",backgroundPosition:"bottom", x: planet}}
        />

        
        <motion.div className='absolute  inset-0 -z-20'
        style={{backgroundImage:"url(/assets/mountain-2.png)", backgroundSize: "cover",backgroundPosition:"bottom", y: mountain2}}
        >

        </motion.div>
        <motion.div className='absolute  inset-0 -z-10'
        style={{backgroundImage:"url(/assets/mountain-1.png)", backgroundSize: "cover",backgroundPosition:"bottom", y: mountain1}}
>
    

        </motion.div>
        

     </div>
     </section>
    
  );
};
