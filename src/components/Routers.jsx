import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import verify from '../hooks/useVerify.js';
import LoginPage from '../Pages/LoginPage.jsx';
import RegisterPage from '../Pages/RegisterPage.jsx';
import TodosPage from '../Pages/TodosPage.jsx';
import PrivateRouter from '../Routers/PrivateRouter.jsx';
import Loading from './Loading/Loading.jsx';

const Routers = () => {
    const reduxData = useSelector(state => state);
    const loading = reduxData.loading;

    useEffect(() => {
      verify();
    }, []);

    return (
        (loading ?
          <Loading/>
          :
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PrivateRouter condition={reduxData.auth} component={<TodosPage/>} navigateTO='/login'/>} />
            <Route path='/login' element={<PrivateRouter condition={(!reduxData.auth)} component={<LoginPage/>} navigateTO='/'/>} />
            <Route path='/register' element={<PrivateRouter condition={(!reduxData.auth)} component={<RegisterPage/>} navigateTO='/'/>} />
          </Routes>
        </BrowserRouter>
        )
      )
}

export default Routers;
