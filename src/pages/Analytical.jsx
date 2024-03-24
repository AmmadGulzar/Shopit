import React from 'react'
import SparkLine from '../components/charts/Sparkline'
import Bar from '../components/charts/Bar';
import Button from '../components/button'


import { FiDollarSign } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";






const Analytical = () => {
  const flexCont = `basis-[100%]  flex flex-row flex-wrap`;
  return (
    <div className=' w-full  flex flex-row flex-wrap px-2 cxl:pl-7 pt-20 min-[1024px]:pt-4 '>
      <div className={`${flexCont} cxl:basis-1/2`}>
        <div className='basis-[100%]  h-56 p-3'>
          <div className=' light_container p-5 relative '>
          <div className="pie after:right-[2px] after:cmd:right-[-10px]"></div>
            <div className="sitting after:cmd:w-[500px]"></div>
            <div className='flex flex-wrap h-full p-4'>
              <h3 className=' basis-full font-medium text-lg cmd:text-xl pb-2 '> Hey Sir, <br/>Download  <br className='cmd:hidden'/>  Latest Report  </h3>
               <Button/> 
            </div>
          </div>
        </div>

        <div className='basis-[100%] cmd:basis-1/2  h-56 p-3' >
         <div className=' light_container bg-[#f1c3d2] flex flex-col'>
            <div className='   basis-1/2 flex flex-row' >
              <div className='   basis-2/3 flex h-full pl-7 leading-6 tracking-wide items-center' >
                  <h3 className='text-xl font-medium text-white text-opacity-80'>Earnings</h3>
              </div>

                <div className='  basis-1/3 flex h-full justify-center items-center' >
                <button className=' h-[55px] w-[55px] text-2xl rounded-full bg-[#ddd9d5] text-center'>
                  <FiDollarSign className=' w-full text-center' />
                </button>
                </div>

              </div>
              <div className=' basis-1/2 '>
                <h1 className='text-3xl leading-6 mt-4 ml-7 font-medium text-white'>$93,438.78</h1>
                <p className='text-sm leading-6 mt-1 ml-7 font-normal text-opacity-60 text-white'>Monthly Revenue</p>
            </div>
         </div>
        </div>
        
        <div className='basis-[100%] cmd:basis-1/2  h-56 p-3 spc1' >
         
         
         <div className=' light_container flex flex-col  spc2'>
         
            <div className= ' h-full basis-1/2 flex flex-row spno' >
              <div className='basis-2/3  h-full pl-7 leading-6 tracking-wide items-center ' >
              <h1 className='text-md font-normal text-black text-opacity-60 mt-7 '>Monthly Sales</h1>
                <p className='text-2xl leading-6  font-medium text-opacity-90 text-black'>3,246</p>
              </div>

              <div className='basis-1/3 flex h-full justify-center items-center' >
                <button className=' h-[55px] w-[55px] text-2xl rounded-full bg-[#f7d08b] text-center'>
                  <FiShoppingBag className=' w-full text-center text-white' />
                </button>
              </div>

            </div>

            <div className= ' h-full basis-1/2 flex flex-row' >
            <div className='h-full w-full relative'>
            <SparkLine/>
            </div>
            </div>

        
              
               
      
           
         </div>
        </div>

      </div>


      <div className={`${flexCont} cxl:basis-1/2`}>
        <div className='basis-[100%]  h-[28rem] p-3'>
          <div className=' light_container flex flex-col '>
              <div className='basis-1/5  flex flex-row '>
                <div className='basis-1/2 flex items-center pl-7 mt-3' >
                <h3 className=' basis-full font-normal text-lg cmd:text-xl pb-2 '> Sales Overview </h3>
                </div>
               
              </div>
              <div className=' basis-4/5 flex justify-center'>
              <div className='w-[90%]'>
                <Bar/> 
              </div>
              </div>
            </div>
        </div>
      </div>

      <div className={`${flexCont} cxl:basis-1/3`}>
        <div className='w-full h-[32rem]  basis-[100%] p-3'>
          <div className=' light_container flex flex-col '>
            <div className='basis-1/5 bg-slate-500 flex flex-row '>
              <div className='basis-1/2 border-amber-100 border-1'></div>
              <div className='basis-1/2 border-amber-100 border-1'></div>
            </div>
            <div className=' basis-4/5 bg-slate-700 '></div>
          </div>
        </div>
      </div>
      <div className={`${flexCont} cxl:basis-2/3`}>
        <div className='w-full h-[32rem]  basis-[100%] p-3'>
          <div className=' light_container flex flex-col'>
            <div className='basis-1/5 bg-slate-500 flex flex-row '>
              <div className='basis-1/2 border-amber-100 border-1'></div>
              <div className='basis-1/2 border-amber-100 border-1'></div>
            </div>
            <div className='basis-4/5 bg-slate-700 '></div>
          </div>
        </div>
      </div>

      <div className={`${flexCont} cxl:basis-1/3`}>
        <div className='w-full h-[30rem]  basis-[100%] p-3'>
        <div className=' light_container flex flex-col'>
          <div className=' basis-5/12 bg-slate-500  '>
              
            </div>
            <div className='basis-7/12 bg-slate-700 flex flex-col'>

              <div className='basis-8/12 bg-slate-200 flex flex-row '></div>
              <div className='basis-4/12 bg-slate-700 '></div>

            </div>
          </div>
        </div>
      </div>

      <div className={`${flexCont} cxl:basis-1/3`}>
        <div className='w-full h-[30rem]  basis-[100%] p-3'>
        <div className=' light_container flex flex-col'>
            <div className='basis-8/12 bg-slate-500 '>
              
            </div>
            <div className='basis-4/12 bg-slate-700 '></div>
          </div>
        </div>
      </div>
      <div className={`${flexCont} cxl:basis-1/3`}>
      <div className='w-full h-[30rem]  basis-[100%] p-3'>
        <div className=' light_container flex flex-col '>
              <div className='basis-1/5 bg-slate-500 '>
              
              </div>
              <div className=' basis-4/5 bg-slate-700 '></div>
        </div>
      </div>
      </div>
      
   
    </div>
  )
}

export default Analytical