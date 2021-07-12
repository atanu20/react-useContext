import React , { createContext, useState } from "react";
import { Data } from "./Data";

export const FromContext = createContext();

export const DataProvider = (props) => {
  const [employee, setEmployee] = useState(Data);
  

  return (
    <>
      <FromContext.Provider value={[employee,setEmployee]}>
        {props.children}
      </FromContext.Provider>
    </>
  );
};
