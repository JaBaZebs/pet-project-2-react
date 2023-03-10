import ky from 'ky';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Types from '../../redux/actionType.js';
import Todo from '../components/Todo.jsx';
import user_icon from '../img/user_icon.svg';
import exit_img from '../img/exit_ico.svg'
import './styles/TodosPage.less'

const TodosPage = () => {
    const user = useSelector(state => state);
    const dispatch = useDispatch();
    const todos = user.user.todos;
    const [inputCreate, setInputCreate] = useState('');
    const navigate = useNavigate();
    function addTodo(event){
        event.preventDefault();
        const newTodos = [...user.user.todos, {done: false, text: inputCreate}];
        dispatch({type: Types.SET_USER, payload: {user: {...user.user, todos: newTodos}}});
        setInputCreate('');
        ky.put('http://localhost:5000/puttodo', {json: {todos: newTodos}, credentials:'include'});
    }
    function exit(){
        ky.post('http://localhost:5000/outlogin', {credentials:'include'}).json().then(data =>{
            dispatch({type: Types.SET_USER, payload: {user: {...user.user}, auth: false,}});
        })
    };
    return (
        <div className='TodosPage'>
            <header>
                <div className='user'>
                    <img src={user_icon}/>
                    <h1>{user.user.name}</h1>
                    <button className='exit' onClick={() => exit()}>
                        <img src={exit_img}/>
                    </button>
                </div>
                <form onSubmit={(event) => addTodo(event)} className='createTodo'>
                    <div className='form-container'>
                        <input value={inputCreate} onChange={(event) => setInputCreate(event.target.value)}/>
                        <button type='submit'>Добавить</button>
                    </div>
                </form>
            </header>
            {todos.length > 0 ?
                <ul className='todos'>
                        {todos.map((todo, index) => (
                            <Todo todo={todo} key={index} id={index}/>
                        ))}
                </ul>
                :
                <h2 style={{textAlign: 'center'}}>Задания не найдены</h2>
            }
        </div>
    );
}

export default TodosPage;
