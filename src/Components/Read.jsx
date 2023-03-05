import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Read = () => {
    const [data, setData] = useState([]);
    const [tabledark, setTableDark] = useState('')

    function getData() {
        axios.get("https://64043f4580d9c5c7bac3cfb3.mockapi.io/crud-react-app")
            .then((res) => {
                console.log(res);
                setData(res.data);
            })
    }

    const handleDelete = (id) => {
        axios.delete(`https://64043f4580d9c5c7bac3cfb3.mockapi.io/crud-react-app/${id}`)
            .then(() => {
                getData();
            });
    }
    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="form-check form-switch">
                <input className="form-check-input"
                    type="checkbox"
                    onClick={() => setTableDark(!tabledark)}

                />

            </div>
            <div className='d-flex justify-content-between m-2'>
                <h2>Read Operation</h2>
                <Link to="/">
                    <button className="btn btn-primary">Create Data</button>
                </Link>

            </div>

            <table className={tabledark ? " table table-dark" : "table "}>

                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {data.map((eachData) => {
                    return (
                        <>
                            <tbody >
                                <tr >
                                    <th scope="row">{eachData.id}</th>
                                    <td >{eachData.name}</td>
                                    <td >{eachData.email}</td>
                                    <td>
                                        <Link to="/update">
                                            <button type="button"
                                                className="btn btn-success"
                                                onClick={() => setToLocalStorage(eachData.id, eachData.name, eachData.email
                                                )}>Edit</button>
                                        </Link></td>
                                    <td><button type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(eachData.id)}>
                                        Danger</button>
                                    </td>

                                </tr>

                            </tbody>
                        </>
                    )
                })}

            </table></>
    )
}

export default Read