import ky from 'ky';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import Types from '../../redux/actionType.js';
import Form from '../components/Form/Form.jsx';
import Loading from '../components/Loading/Loading.jsx';

const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state);
    const [login, setLogin] = useState('');
    const [error, setError] = useState(false);
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
        ky.post('http://localhost:5000/register', {json:{login: login, password: password}, credentials: 'include'})
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
                    errorText='Данный пользователь уже зарегистрирован'
                    title='Регистрация' 
                    subtitle='Войти'
                    buttonName='зарегистрироваться'
                    link='/login'
                    submitFunction={onSubmit}
                />
            </div>
        )
    );
}

export default RegisterPage;
