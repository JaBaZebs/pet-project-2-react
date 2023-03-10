import ky from "ky";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, RouterProvider, Routes, useNavigate } from "react-router-dom";
import Types from "../redux/actionType.js";
import LoginPage from "./Pages/LoginPage.jsx";
import StartPage from "./Pages/StartPage.jsx";
import TodosPage from "./Pages/TodosPage.jsx";
import PrivateRouter from "./Routers/PrivateRouter.jsx";
import Loading from './components/Loading/Loading.jsx'
import RegisterPage from "./Pages/RegisterPage.jsx";

export default function App() {
  const reduxData = useSelector(state => state);
  const loading = reduxData.loading;
  const dispatch = useDispatch();
  function handle(data){
    dispatch({type: Types.SET_USER, payload: {...data, loading: false}});
    
  }
  useEffect(() => {
    ky.get('http://localhost:5000/verify', {credentials: 'include'}).json().then(data => {handle(data)});
  }, []);
  return (
    (loading ?
      <Loading/>
      :
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path='/login' element={<PrivateRouter condition={(!reduxData.auth)} component={<LoginPage/>}/>}/>
        <Route path='/register' element={<PrivateRouter condition={(!reduxData.auth)} component={<RegisterPage/>}/>}/>
        <Route path='/todos' element={<PrivateRouter condition={reduxData.auth} component={<TodosPage/>}/>}/>
      </Routes>
    </BrowserRouter>
    )
  )
}