import ky from 'ky';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Types from '../../redux/actionType.js';
import './styles/TodosPage.less'
import TodoList from '../components/TodoList.jsx';
import User from '../components/User.jsx';
import { outloginRequest } from '../hooks/useAPI.js';
import CreateTodo from '../components/CreateTodo.jsx';

const TodosPage = () => {
    const user = useSelector(state => state);
    const todos = user.user.todos;
    return (
        <div className='TodosPage'>
            <header>
                <User user={user}/>
                <CreateTodo/>
            </header>
            <TodoList todos={todos}/>
        </div>
    );
}

export default TodosPage;
