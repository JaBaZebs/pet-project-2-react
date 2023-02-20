import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import CustomInput from './customInput.jsx';
import fetchingData from '../hooks/fetch.js';
import WrongPasswordComp from './wrongPasswordComp.jsx';
import Types from '../../redux/actionType.js';
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = (props) => {
    
    const dispatch = useDispatch();

    let navigate = useNavigate();
    const[loginInput, setLogin] = useState('');
    const[passwordInput, setPassword] = useState('');
    const[wrongPassword, setWrongPassword] = useState(false);
    const[fetching, setFetching] = useState(false);

    async function httpRequest(){
        setFetching(true);
        setTimeout(() => {
            const fetchinData = fetchingData("http://localhost:5000/login", 
                                            {login: loginInput, password: passwordInput})
            
            
            fetchinData.then((response) => response.json()).then((data) => setWronPass(data))
        },300);
        
    }
    function setWronPass(data){
        if(data){
            dispatch({type: Types.SET_USER, payload:{login: loginInput, password: passwordInput}})
            dispatch({type: Types.SET_AUTH_TRUE})
            navigate('/todos');
            resetInputs();
        }
        else{
            setWrongPassword(true);
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
    
    return (
        (!fetching ? 
            <form className='login-form' onSubmit={(event) => submit(event)}>
                
                <div className='form-container'>
                    <h1>Вход</h1>
                    <WrongPasswordComp wrong={wrongPassword} text='Неверный логин или пароль'/>
                    <CustomInput pole={loginInput} typeInput='login' setPole={setLogin} text='Логин'/>
                    <CustomInput pole={passwordInput} typeInput='password' setPole={setPassword} text='Пароль'/>
                    <div className='link-container'>
                        <Link style={{textAlign: 'left', 
                                        fontSize: '1.4vw',
                                        textDecoration: 'none'}} to='/register'>Зарегистрировать</Link>
                    </div>
                    <button>Войти</button>
                </div>
            </form>
            :
            <h1 style={{textAlign: 'center', marginTop:'50vh'}}>Выполняем вход...</h1>
        )
    );
}

export default LoginForm;
