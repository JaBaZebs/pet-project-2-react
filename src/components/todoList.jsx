import React, { useMemo, useState } from 'react';
import Todo from './TodoItem.jsx'

const TodoList = ({array, doneFunction, removeTodos,...props}) => {
    if(array.length > 0){
        return (
            <ul>
                    {
                    array.map((todo, index) => {return <Todo key={index} 
                                                                keyProp={index} 
                                                                text={todo.text} 
                                                                done={todo.done}
                                                                setDone={doneFunction}
                                                                remTodo={removeTodos}
                                                                textDecor={todo.done ? "line-through" : "none"}/>})
                    }
            </ul>
        )
    }
    else{
        return <h2 style={{textAlign: "center"}}>Нету дел на сегодня</h2>
    }
}

export default TodoList;
