import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './RegistrForm.scss';

function RegistrForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: ''
    });

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:3001/users', {
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

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div className='wrapperr'>
            <form className='form' onSubmit={handleSubmit}>
                <h2>Регистрация</h2>
                <div>
                    <label>Имя:</label>
                    <input
                        className='inputs'
                        type='text'
                        placeholder='Username'
                        value={formData.username}
                        name='username'
                        onChange={handleChange} >

                    </input>
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        className='inputs'
                        type='text'
                        placeholder='Email'
                        value={formData.email}
                        name='email'
                        onChange={handleChange} >

                    </input>
                </div>

                <div>
                    <label>Пароль:</label>
                    <input
                        className='inputs'
                        type='text'
                        placeholder='Password'
                        value={formData.password}
                        name='password'
                        onChange={handleChange} >

                    </input>
                </div>
                <button
                    className='inputs_button'
                    type="button"
                    onClick={handleSubmit}
                >Зарегистрироваться
                </button>
                <Link to='/' className='link'>Назад</Link>
                <button className='inputs_button'>
                    <Link to='/login' className='link'>Войти</Link>
                </button>
            </form>
        </div>
    );
}

export default RegistrForm;
