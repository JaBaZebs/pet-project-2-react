import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './styles/ErrorPage.less'

const ErrorPage = () => {
    const navigate = useNavigate();
    function redirect() {
        setTimeout(()=>{
            navigate('/');
        }, 2000);
    }
    useEffect(() => {
        redirect();
    }, []);
    return (
        <div className='error-page'>
           <h1>Ошибка</h1> 
           <h2>Страница не найдена</h2>
        </div>
    );
}

export default ErrorPage;
