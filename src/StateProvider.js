import  {createContext, useContext  ,useReducer} from "react";

// Data layer 
export const StateContext = createContext();

// Provider

export const StateProvider =({reducer ,initialState ,children})=>(
 
 <StateContext.Provider value={useReducer(reducer , initialState )}>
  {children}
 </StateContext.Provider>
 
 );


 // to give the acces to every componentin app
 
 export const useStateValue = () =>useContext(StateContext);