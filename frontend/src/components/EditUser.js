import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate ,useParams} from 'react-router-dom';

function EditUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getUserById();
    },[]);

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
                name,
                email,
                gender,
            })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
    }

    return (
        <div className="colums mt-5">
            <div className="column is-half is-offset-one-quarter">
                <form onSubmit={updateUser}>
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
                            <button type="submit" className='button is-success'>Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditUser;