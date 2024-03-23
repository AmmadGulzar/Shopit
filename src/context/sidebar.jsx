import { createContext,useState } from "react";

export const SidebarContext = createContext(null);

export const CounterProvider = (props)=>{
    const [sidebar,setSidebar]=useState(false);
return(
    <SidebarContext.Provider value={{sidebar,setSidebar}}>
        {props.children}
    </SidebarContext.Provider>
);
}