// creat a ConnectorContext
// Provider
// Consumer
import logo from '/home/pawarsachin/Desktop/ReactApps/Epsillon/public/images/E.png'
import reducer from './reducer';
import React,{useReducer} from "react";

const AppContext = React.createContext();

const initialstate ={
    title:'',
    image:''
}


const updateHomePage=()=>{
    return dispatch({key:"HOME_PAGE",payload:{title:"Epsillon",image:logo}})
}

export const updateAboutPage=()=>{
    return dispatch({key:"ABOUT_PAGE",payload:{title:"About Us",image:logo}})
}

export const AppProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialstate);


    return <AppContext.Provider value={{...state,updateAboutPage, updateHomePage}}>{children}</AppContext.Provider>
};

export const useGlobalContext=()=>{
    return React.useContext(AppContext);
}

 export default {AppContext,AppProvider, useGlobalContext}