import React,{ useContext } from 'react'
import  {SidebarContext}  from '../context/sidebar';
import {  Routes, Route } from "react-router-dom";
import { Area, Bar, Calendar, ColorMapping, ColorPicker, Customers, Ecommerce,Analytical, Editor, Employees,
         Financial, Kanban, Line, Orders, Pie, Pyramid, Stacked } from "../pages";

const Main = () => {

  const SidebarState = useContext(SidebarContext)

  return (
    <div className={`${SidebarState.sidebar &&  'cxl:pl-[265px]' } w-full  lg:pt-[65px]`}>
    {/* <BrowserRouter> */}
      <Routes>
          {/* Dashboard */}
          <Route path="/" element={<Analytical/>} />
          <Route path="/analytical" element={<Analytical/>} />
          <Route path="/ecommerce" element={<Ecommerce/>} />
          {/* Pages */}
          <Route path="/orders" element={<Orders/>} />
          <Route path="/employees" element={<Employees/>} />
          <Route path="/customers" element={<Customers/>} />
          {/* Apps */}
          <Route path="/calendar" element={<Calendar/>} />
          <Route path="/kanban" element={<Kanban/>} />
          <Route path="/editor" element={<Editor/>} />
          <Route path="/color-picker" element={<ColorPicker/>} />
          {/* Charts */}
          <Route path="/line" element={<Line/>} />
          <Route path="/area" element={<Area/>} />
          <Route path="/bar" element={<Bar/>} />
          <Route path="/financial" element={<Financial/>} />
          <Route path="/pie" element={<Pie/>} />
          <Route path="/color-mapping" element={<ColorMapping/>} />
          <Route path="/pyramid" element={<Pyramid/>} />
          <Route path="/stacked" element={<Stacked/>} />
      </Routes>
    {/* </BrowserRouter> */}
    </div>
  )
}

export default Main