import ky from 'ky';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Types from '../../redux/actionType';

const CreateTodo = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state);
    const [inputCreate, setInputCreate] = useState('');

    function addTodo(event){
        event.preventDefault();
        const newTodos = [...user.user.todos, {done: false, text: inputCreate}];
        dispatch({type: Types.SET_USER, payload: {user: {...user.user, todos: newTodos}}});
        setInputCreate('');
        ky.put('http://localhost:5000/puttodo', {json: {todos: newTodos}, credentials:'include'});
    }
    return (
        <form onSubmit={(event) => addTodo(event)} className='createTodo'>
                    <div className='form-container'>
                        <input value={inputCreate} onChange={(event) => setInputCreate(event.target.value)} required={true}/>
                        <button type='submit'>Добавить</button>
                    </div>
        </form>
    );
}

export default CreateTodo;
