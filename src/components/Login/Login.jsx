import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate('/');
            });
    }


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div className='wrapperr'>
            <form
                className='form'
                onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        className='inputs'
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        className='inputs'
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <button
                    className='inputs_button'
                    type='submit'
                    onClick={handleSubmit}
                > Войти
                </button>
            </form>
        </div>
    );
};

export default Login;





