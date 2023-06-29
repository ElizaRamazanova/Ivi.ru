import React, { useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


interface FormDataType {
    email: string,
    password: string
}

interface LoginResponseType {
    user: {
        id: number;
        username: string;
        email: string;
        password: string;
    }
}

const Login = () => {

    const [formData, setFormData] = useState<FormDataType>({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [isError, setIsError] = useState('')
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post<LoginResponseType>('http://localhost:3001/login', formData, {
                headers: { 'Content-Type': 'application/json' }
            });
            console.log(response)
            const data = response.data;
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/');
        } catch (error) {
            setIsError("Неправильный пароль или логин");
        }

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
                {isError}
                <button
                    className='inputs_button'
                    type='submit'
                    onClick={handleSubmit}
                > Войти
                </button>
                <Link to='/registration' className='link'>Зарегистрироваться</Link>
            </form>
        </div>
    );
};

export default Login;