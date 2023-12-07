import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/users", {
                name,
                email,
                gender,
            })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="colums mt-5">
            <div className="column is-half is-offset-one-quarter">
                <form onSubmit={saveUser}>
                    <div className='field'>
                        <label className='label'>Email</label>
                        <div className="control">
                            <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Input your name" />
                        </div>
                        <div className="field">
                            <label className='label'>Email</label>
                            <div className="control">
                                <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Input your email" />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Gender</label>
                            <div className="control">
                                <div className="select">
                                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='field'>
                            <button type="submit" className='button is-success'>Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser;