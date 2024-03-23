import React,{ useContext } from 'react'
import  {SidebarContext}  from '../context/sidebar';


import { SiShopee } from "react-icons/si";

import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

import { links } from "../data/dummy";


const Sidebar = () => {
  
  const SidebarState = useContext(SidebarContext)

    
  function sidebarHandler(){
    console.log('click');
      SidebarState.setSidebar(!SidebarState.sidebar);
      console.log(SidebarState.sidebar);
  }

  // const SidebarState = useContext(SidebarContext)
  return (
    <div className='relative'>
      
      <div className=' w-full ml-3 items-center tracking-wide text-3xl  font-bold  flex cxl:hidden justify-between'>
        <div className='flex'>
          <SiShopee />
          <span>Shopit</span>
        </div>
        <button onClick={sidebarHandler} className='  p-2 text-2xl  rounded-full hover:bg-slate-400/10 text-slate-500 '>
          <IoMdCloseCircleOutline />
        </button>
        </div>
        



      {links.map((link)=>(
        <div className='' key={link.title}>
          <h6 className='text-sm uppercase font-medium opacity-40 mb-4 mt-4'>{link.title}</h6>
          {link.links.map((link)=>(
            <Link key={link.name} className='flex flex-row w-full text-base font-normal  hover:bg-slate-400/10 rounded-[9px] items-center mb-2 px-[8px] py-[16px] capitalize' to={link.name}>
              <span className=' basis-1/6 sidebar_icons text-xl'>{link.icon}</span>
              <span className=' basis-auto '>{link.name}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Sidebar