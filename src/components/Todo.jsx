import ky from 'ky';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Types from '../../redux/actionType';
import img from '../img/delete_icon.svg'

const Todo = ({todo, id,...props}) => {
    const dispatch = useDispatch();
    const User = useSelector(state => state);
    function clickInput(){
        const newTodos = User.user.todos.map((todo, index) => index === id ? {...todo, done: !todo.done} : todo);
        dispatch({type: Types.SET_USER, payload: {user: {...User.user, todos: newTodos}}});
        ky.post('http://localhost:5000/update', {json: {todos: newTodos}, credentials:'include'});
    }
    function clickButton(){
        const newTodos = User.user.todos.filter((todo, index) => index !== id);
        dispatch({type: Types.SET_USER, payload: {user: {...User.user, todos: newTodos}}});
        ky.delete('http://localhost:5000/deltodo', {json: {todos: newTodos}, credentials:'include'});
    }
    return (
        <li key={todo.id} className='todo'>
                        <input type='checkbox' checked={todo.done} onChange={() => clickInput()}></input>
                        <h2 style={todo.done ? {textDecoration: "line-through"} : {}}>{todo.text}</h2>
                        <button onClick={() => clickButton()}>
                            <img src={img}/>
                        </button>
        </li>
    );
}

export default Todo;
