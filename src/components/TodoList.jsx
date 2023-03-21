import React from 'react';
import Todo from './Todo.jsx';

const TodoList = ({todos, props}) => {
    return (
        todos.length > 0 ?
            <ul className='todos'>
                    {todos.map((todo, index) => (
                        <Todo todo={todo} key={index} id={index}/>
                    ))}
            </ul>
            :
            <h2 style={{textAlign: 'center'}}>Задания не найдены</h2>
        
    );
}

export default TodoList;
