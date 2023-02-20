import React, { useState } from 'react';
import CustomInput from '../components/customInput.jsx';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import fetchingData from '../hooks/fetch.js';
import {useSelector, useDispatch} from 'react-redux';
import Types from '../../redux/actionType.js';
import './styles/RegisterPage.less'
import WrongPasswordComp from '../components/wrongPasswordComp.jsx';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const[loginInput, setLogin] = useState('');
    const[passwordInput, setPassword] = useState('');
    const[fetching, setFetching] = useState(false);
    const[isUserRegistred, setIsUserRegistred] = useState(false);
    let navigate = useNavigate();
   
    async function httpRequest(){
        setFetching(true);
        setTimeout(() => {
            const fetchinData = fetchingData("http://localhost:5000/register", 
                                            {login: loginInput, password: passwordInput})
            fetchinData.then((response) => response.json()).then((data) => setWrong(data))
        },300);
        
    }
    function setWrong(data){
        console.log(data, 'test');
        if(data){
            dispatch({type: Types.SET_AUTH_TRUE});
            dispatch({type: Types.SET_USER, payload: {login: loginInput, password: passwordInput}});
            navigate('/todos');
            resetInputs();
        }
        else{
            setIsUserRegistred(true);
            console.log(isUserRegistred);
        }
        setFetching(false);
    }
    function resetInputs() {
        setPassword('');
            setLogin('');
    }
    function submit(event){
        if(!fetching){
            event.preventDefault();
            const test = httpRequest();                                       
        }
    }
    useEffect(() => {
        document.body.style.background = "#e3e8e6"; 
    }, []);
    return (
        (!fetching ?
        <div className='registerPage'>
            <form onSubmit={(event) => submit(event)}>
                <h1>Регистрация</h1>
                <WrongPasswordComp wrong={isUserRegistred} styles={{fontSize:'100%', marginTop: '10%', marginBottom: '0px'}}  text='Пользователь с таким логином уже зарегистрирован'/>
                <div className='register-form-container'>
                    
                    <div className='register-container'>
                        <CustomInput pole={loginInput} typeInput='login' setPole={setLogin} text='Логин'/>
                        <CustomInput pole={passwordInput} typeInput='password' setPole={setPassword} text='Пароль'/>
                    </div>
                    <div className='link-container'>
                        <Link style={{textAlign: 'left', 
                                        fontSize: '1.8vw',
                                        textDecoration: 'none',
                                        }} to='/'>Войти</Link>
                    </div>
                    <button>Зарегистрироваться</button>
                </div>
            </form>
        
        </div>
        :
        <h1 style={{textAlign: 'center', marginTop:'50vh'}}>Регистрация...</h1>
        )
    );
}

export default RegisterPage;
