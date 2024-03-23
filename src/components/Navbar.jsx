import React,{ useContext } from 'react'
import  {SidebarContext}  from '../context/sidebar';


// import Avatar from './Avatar';
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoChatboxOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { SiShopee } from "react-icons/si";

const Navbar = () => {
    const SidebarState = useContext(SidebarContext)

    
    function sidebarHandler(){
        SidebarState.setSidebar(!SidebarState.sidebar);
    }

  return (
  <div className=' w-full fixed top-0 z-50'>
    <div className='bg-white shadow p-3 h-[64px] items-center  flex '>

        <div className='  ml-3   tracking-wide text-3xl  h-full font-bold w-72  hidden clg:flex'>
        <SiShopee />
        <span>Shopit</span>
       
        </div>
        <button onClick={sidebarHandler} className=' p-2 text-2xl  justify-start rounded-full hover:bg-slate-400/10 text-slate-500'>
        <IoIosMenu />
        </button>
        <button className='text-2xl p-2 ml-2 rounded-full  hover:bg-slate-400/10 text-slate-500'>
            <CiSearch />
        </button>
        
        <div className=' pr-5 flex  flex-row-reverse w-full h-full' >
           
        {/* <Avatar/> */}
        <span className='h-full ml-2 mr-2 bg-slate-300 w-[0.7px]'></span>
        <button className='text-2xl p-2 ml-2  rounded-full  hover:bg-slate-400/10 text-slate-500'>
            <FiBell />
        </button>
        <button className='text-2xl p-2 ml-2 rounded-full  hover:bg-slate-400/10 text-slate-500'>
            <IoChatboxOutline />
        </button>
        <button className='text-2xl p-2 ml-2 rounded-full  hover:bg-slate-400/10 text-slate-500'>
            <FiShoppingCart />
        </button>
        </div>

    </div>
    </div>
  )
}

export default Navbar