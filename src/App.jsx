import React from "react";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import TodosPage from "./Pages/TodosPage.jsx";
import RegisterPage from './Pages/RegisterPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>Your lox
        <Route exact path="/" element={<HomePage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path="/todos" element={<TodosPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}