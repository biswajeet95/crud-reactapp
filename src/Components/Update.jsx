import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, []);
    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put(`https://64043f4580d9c5c7bac3cfb3.mockapi.io/crud-react-app/${id}`, {
            name: name,
            email: email,
        }).then(() => {
            navigate('/read')
        });
    }
    return (
        <div>
            <h2>Update</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit"
                    className="btn btn-primary mx-2"
                    onClick={handleUpdate}>Upadate</button>
                <Link to="/read">
                    <button
                        className="btn btn-primary mx-2"
                    >Back</button>
                </Link>

            </form>
        </div>
    )
}

export default Update