import React, { useState } from 'react';
import {motion} from 'motion/react';

function Navigation() {
  return (
    <ul className='nav-ul'>
      <li className='nav-li'><a href="#Home" className='nav-link'>Home</a></li>
      <li className='nav-li'><a href="#About" className='nav-link'>About</a></li>
      <li className='nav-li'><a href="#Work" className='nav-link'>Work</a></li>
      <li className='nav-li'><a href="#Contact" className='nav-link'>Contact</a></li>
    </ul>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed inset-0 bg-primary/40 z-20 w-full'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-2 sm:py-0'>
          <a href="/" className='text-xl transition-colors cursor-pointer text-neutral-500 font-bold hover:text-white/80 hover:text-[1.35rem]'>
            Saran
          </a>

          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='flex cursor-pointer text-neutral-500 hover:text-shadow-white focus:outline-none sm:hidden'
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className='w-8 h-8'
              alt="menu"
            />
          </button>

          
          <nav className='sm:flex hidden'>
            <Navigation />
          </nav>
        </div>

        
        {isOpen && (
          <motion.div className='text-center backdrop-blur-lg sm:hidden overflow-hidden pb-5'
            initial={{ opacity: 0,x:-10 }}
            animate={{ opacity: 1,x:0 }}
            style={{maxHeight: "100vh"}}
            transition={{ duration: 1 }}>
            <nav>
              <Navigation />
            </nav>
          </motion.div>
        )}
      </div>
    </div>
  );
}