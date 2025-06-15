import React from 'react';
import Herotext from '../components/Herotext';
import Paralloxbg from '../components/Paralloxbg';


export default function Hero() {
  return (
     <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <Herotext />
      <Paralloxbg />
      
      
    </section>
  );
}
