
import Cards from '../components/Cards.jsx'
import React, { useRef } from 'react';
import Metorids from '../components/Metorids.jsx';
import  Globe  from '../components/Globe.jsx';
import Div from '../components/Div.jsx';
import Grid5 from '../components/Grid5.jsx';
export default function About() {
    const grid2Container = useRef();
  return (
    
    <div className='relative c-space section-spacing'>
        <Metorids />
      <h2 className='text-heading'>About Me</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 auto-rows-auto mt-14'>
            
            <div className='flex items-end grid-default-color grid-1 z-20'>
               <img 
                src="/assets/projects/image1.png" 
                alt="Profile"
                className='absolute top-0 right-0 opacity-20 md:opacity-40 scale-[1.5] md:scale-[1] lg:scale-[1.25] z-0 sm:scale-[0.1]'
                />
               <div className="flex flex-col justify-end h-full">
  <div className="z-10 ">
    <p className="headtext">
      <b>HEY I’m K Saran Kumar</b>,</p>
      <p className="subtext">A final-year B.Tech student at GVP College, Visakhapatnam, passionate about technology and innovation. My journey in tech is a mission to build meaningful solutions. Every line of code takes me closer to launching my own startup. I believe in purposeful design and impactful development.


    </p>
  </div>
  
</div>
 
            </div>
            <div className=' grid-default-color grid-2 z-25'> 
                
                <div ref={grid2Container} className="flex items-center justify-center h-full">
                    <p className="flex items-end text-5xl text-grey-500">WHAT I DO</p>
                    <Cards style={{rotate:"55deg",top:"10%",left:"0%"}} text="HTML" containerRef={grid2Container}/>
                    <Cards style={{rotate:"-20deg",top:"10%",left:"33%"}} text="CSS" containerRef={grid2Container}/>
                    <Cards style={{rotate:"-20deg",top:"60%",left:"0%"}} text="JS" containerRef={grid2Container}/>
                    <Cards style={{rotate:"0deg",top:"5%",left:"60%"}} text="Machine Learning" containerRef={grid2Container}/>
                    <Cards style={{rotate:"-20deg",top:"50%",left:"50%"}} text="AI" containerRef={grid2Container}/>
                    <Cards style={{rotate:"-40deg",top:"60%",left:"70%"}} image = "public\assets\logos\reacticon.png" containerRef={grid2Container}/>
                </div>
            </div>
            
            
            
            
            <div className=' grid-black-color grid-3 z-30'> 
                
                <div className="z-10 w-[50%]">
                    <p className="headtext">From Address:</p>
                    <p className="subtext">26-32-1\1,<br />Rama Krishna street,<br />Town Kotha Road,<br />Visakhapatnam(VIZAG),<br />Andhra Praesh(AP),<br/>INDIA.</p>
                    <Metorids />
                    
                </div>
                <figure className="absolute left-[43%] top-[20%]">
                    <Globe />
                </figure>

            </div>
            
            
            
            <div className=' grid-special-color grid-4 z-30'>
                   
                   <div className="flex flex-col items-center justify-center gap-4 size-full" >
                          <p className="headtext">To Know Me More:</p>
                            <button className="cursor-pointer px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
                            onClick={() =>
                            window.open('https://www.linkedin.com/in/saran-kumar-a33344268/', '_blank', 'noopener,noreferrer')
                            }>My LinkedIn</button>
                            <button className="cursor-pointer px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
                            onClick={() =>
                            window.open('https://github.com/Saran0602A', '_blank', 'noopener,noreferrer')
                            }>My GitHub</button>
                            <button
                            className="cursor-pointer px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"

                            onClick={() => {
                                const a = document.createElement('a');
                                a.href = '/resume.pdf';
                                a.download = 'Saran_Kumar_Resume.pdf';
                                document.body.appendChild(a);
                                a.click();
                                document.body.removeChild(a);
                            }}
                            >
                            My Resume
                            </button>

                   </div>

            </div>




            <div className="grid-default-color grid-5 z-30 p-4 md:col-span-3 col-span-1 hidden md:flex items-center justify-center">
            <Div />
            </div>
                         
      </div>
      <Grid5 />
    </div>
  )
}