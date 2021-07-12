import React from 'react'

import Home from './component/Home';
import Navbar from './component/Navbar';
import './App.css'
import { DataProvider } from "./component/FromContext";

const App = () => {
  return (
    <>
    <DataProvider>
        <Navbar />
        <Home />
      </DataProvider>

    

      
    </>
  )
}

export default App
