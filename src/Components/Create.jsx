import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const hestory = useNavigate();

    const header = { "Access-Control-Allow-Origin": "*" }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked");
        axios.post("https://64043f4580d9c5c7bac3cfb3.mockapi.io/crud-react-app", {
            name: name,
            email: email,
            header,
        })
        .then(() => {
            if (name === "") {
                hestory('/')
            } else {
                hestory('/read');
            }
        })
      

    };
return (

    <>
    <div className='d-flex justify-content-between m-2'>
        <h2>Create</h2>
        <Link to="/read">
               <button class="btn btn-primary">Show Data</button>
        </Link>
 
    </div>
        
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                <input type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}>Submit</button>
        </form>
    </>

)
}
export default Create