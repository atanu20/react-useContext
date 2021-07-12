import Form from "./Form";

import React ,{useContext} from 'react'
import { FromContext } from "./FromContext";

export default function Home() {
    const [employee,setEmployee] = useContext(FromContext);
  return (
    <>
      <div className="container pt-5">
        <table className="table mb-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
              {
                  employee.map((val,ind)=>{
                      return(
                          <>
                           <tr key={ind}>
                            <th scope="row">{ind+1}</th>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            </tr>
                          </>
                      )
                  })
              }
           
          </tbody>
        </table>
        <br />
      </div>
      <div className="container">
        <Form />
      </div>
    </>
  );
}
