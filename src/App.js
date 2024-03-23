import React,{ useContext } from 'react'
import  {SidebarContext}  from './context/sidebar';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"
import Main from './components/Main.jsx'
function App() {
  const SidebarState = useContext(SidebarContext);
  const overlayClass= ' max-[1200px]:bg-black max-[1200px]:opacity-50 max-[1200px]:z-[100] max-[1200px]:fixed max-[1200px]:top-0 max-[1200px]:right-0 max-[1200px]:left-0 max-[1200px]:bottom-0 max-[1200px]:h-full max-[1200px]:w-full';
  return (
    < >

    
    <Navbar/>
    
    {/* Sidebar Open Overlay */}
    <div className= {` ${SidebarState.sidebar && overlayClass }`} >
    </div>

      {/* Sidebar for Over 1200px */}
        <div className={` ${!SidebarState.sidebar ? ' ml-[-322px]': 'ml-5' }  w-[265px]  hidden 
          cxl:flex  sidebar flex-col rounded-[10px] p-5 overflow-y-scroll bg-white sidebar_shadow
          fixed top-20 bottom-10`}>
          <Sidebar/>
        </div>

       {/* /* Sidebar for below 1200px */ }
        <div  className={` ${!SidebarState.sidebar && ' ml-[-322px]'}  w-[265px]   
          flex cxl:hidden sidebar flex-col  p-5 overflow-y-scroll bg-white sidebar_shadow
          fixed h-full z-[1000]`}>
          <Sidebar/>
        </div>

        {/* Main content */}
        <div className=" overflow-y-scroll h-[100vh] w-full flex">
          <Main />  
        </div>
      

    </>
  );
}

export default App;