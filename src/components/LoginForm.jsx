import React, { useState } from 'react';
import CustomInput from './customInput.jsx';
import ky from 'ky';

const LoginForm = (props) => {
    const[login, setLogin] = useState('');
    const[password, setPassword] = useState('');
    function httpRequest(Method, Headers, Body){
        let promiseRequest = new Promise((resolve, reject) => {
            const options = {
                method: Method,
                headers: Headers,
                body: JSON.stringify(
                Body
                )
            };
            resolve(ky('https://httpbin.org/post'));
        });
        return promiseRequest;
    }
    async function test(){
        const options = {
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: 'ky'
          })
        };
        const response = await ky.post('https://httpbin.org/post', options);
        console.log(response.type);
    }

    function submit(event){
        event.preventDefault();
        console.log(login, password);
        setPassword('');
        setLogin('')
        test();
    }
    return (
        <form className='login-form' onSubmit={(event) => submit(event)}>
            
            <div className='form-container'>
                <h1>Вход</h1>
                <CustomInput pole={login} setPole={setLogin} text='Логин'/>
                <CustomInput pole={password} setPole={setPassword} text='Пароль'/>
                <button>Войти</button>
            </div>
        </form>
    
    );
}

export default LoginForm;
