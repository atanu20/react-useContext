import React ,{useContext} from 'react'
import { FromContext } from "./FromContext";
const Navbar = () => {
    const [employee,setEmployee] = useContext(FromContext);
    
    return (
        <>
        <nav>
        <div className="container">
          <h2>Logo</h2>
          <h4>Total Data :{employee.length} </h4>
        </div>
      </nav>
            
        </>
    )
}

export default Navbar;
