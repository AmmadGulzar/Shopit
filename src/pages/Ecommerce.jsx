import React from 'react'


const Ecommerce = () => {
  const flexCont = `basis-[100%]  flex flex-row flex-wrap`;
  
  return (
    <div className=' w-full  flex flex-row flex-wrap px-7 pt-20 min-[1024px]:pt-4 '>
      <div className={`${flexCont} `}>
        <div className='basis-[100%] cxl:basis-1/3 h-56 p-3'>
          <div className=' light_container'></div>
        </div>

        <div className='basis-[100%] cxl:basis-2/3  h-56 p-3' >
         <div className=' light_container'></div>
        </div>
      </div>

{/*  */}

      <div className={`${flexCont} cxl:basis-2/3`}>
        <div className='basis-[100%]  h-[28rem] p-3'>
          <div className=' light_container'>
            
          </div>
        </div>
      </div>

      <div className={`${flexCont} cxl:basis-1/3`}>
        <div className='basis-[100%]  h-56 p-3'>
          <div className=' light_container'></div>
        </div>
        <div className='basis-[100%]   h-56 p-3' >
          <div className=' light_container'></div>
        </div>
      </div>

{/*  */}

      <div className={`${flexCont} cxl:basis-1/3`}>
        <div className='w-full h-[28rem]  basis-[100%] p-3'>
          <div className=' light_container'>

          </div>
        </div>
      </div>
      <div className={`${flexCont} cxl:basis-2/3`}>
        <div className='w-full h-[28rem]  basis-[100%] p-3'>
          <div className=' light_container'>

          </div>
        </div>
      </div>
{/*  */}

<div className={`${flexCont} cxl:basis-1/3`}>
        <div className='w-full h-[28rem]  basis-[100%] p-3'>
          <div className=' light_container'>

          </div>
        </div>
      </div>
      <div className={`${flexCont} cxl:basis-1/3`}>
        <div className='w-full h-[28rem]  basis-[100%] p-3'>
          <div className=' light_container'>

          </div>
        </div>
      </div>
      <div className={`${flexCont} cxl:basis-1/3`}>
        <div className='w-full h-[28rem]  basis-[100%] p-3'>
          <div className=' light_container'>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Ecommerce