import ky from 'ky';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Types from '../../redux/actionType.js';
import Form from '../components/Form/Form.jsx'
import Loading from '../components/Loading/Loading.jsx';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state);
    const [error, setError] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const inputOneData = {name: 'Логин',
                          state: login,
                          setState: setLogin}
    const inputTwoData = {name: 'Пароль',
                          state: password,
                          setState: setPassword};

    const [loading, setLoading] = useState(false);
    



    function onSubmit(event){
        event.preventDefault();
        setLoading(true);
        ky.post('http://localhost:5000/login', {json:{login: login, password: password}, credentials: 'include'})
                .then((response) => response.json())
                .then(data => submitHandling(data));
    }

    function submitHandling(data){
        setLoading(false);
        data.auth ? auth(data) : setError(true);
    }
    function auth(data){
        dispatch({type: Types.SET_USER, payload: data});
        setLogin('');
        setPassword('');
        setError(false);
    }


    return (
        (loading ?
            <Loading/>
            :
            <div className='LoginPage'>
                <Form inputOne={inputOneData}
                    inputTwo={inputTwoData}
                    constHandle={error}
                    errorText='Неверный логин или пароль'
                    title='Вход' 
                    subtitle='Зарегистрироваться'
                    buttonName='Войти'
                    link='/register'
                    submitFunction={onSubmit}
                />
            </div>
        )
    );
}

export default LoginPage;
