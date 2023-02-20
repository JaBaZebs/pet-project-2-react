import React from 'react';
import './styles/HomePage.less'
import { useEffect } from "react";
import LoginForm from '../components/LoginForm.jsx';
import {useSelector } from 'react-redux';

const HomePage = () => {
    useEffect(() => {
        document.body.style.background = "#e3e8e6"; 
    }, []);
    return (
        <LoginForm/>
    );
}

export default HomePage;
