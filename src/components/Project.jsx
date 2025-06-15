import React from 'react'

export default function Project({title , description , subDescription , href , image , tags} ) {
return (
  <>
    <div className="flex-wrap items-center py-10 justify-baseline space-y-14 sm:flex sm:space-y-0">
    <div>
    <p className="text-2xl ">{title}</p>
    <div className="flex gap-5 mt-2 text-sand">
    {tags.map((tag)=>(
        <span key={tag.id}>{tag.name}</span>
    ))}
    </div>
    </div>
    <button className="flex items-center gap-1 cursor-pointer hover-animation">Read More 
        <img src="/assets/arrow-right.svg" className="w-5 " />
    </button>
    </div>
    <div className="bg-gradient-to-r from-transparent via-neutral-700 mt-12 h-[1px] w-full"/>
  </>
);
}
