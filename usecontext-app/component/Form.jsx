
import React ,{useState,useContext} from 'react'
import { FromContext } from "./FromContext";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [employee,setEmployee] = useContext(FromContext);
  const subValue = (e) => {
    e.preventDefault();
    setEmployee((prev)=>[...prev,{name:name,email:email}])
    setName("");
    setEmail("");
  };
  return (
    <>
      <form onSubmit={subValue}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
