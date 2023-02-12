import React, { useEffect, useMemo, useState } from 'react';
import logo from '../images/delete_icon.svg'

const Todo = ({text, 
                done,
                keyProp,
                setDone,
                textDecor,
                remTodo,
                ...props}) => {  
    return (
        <li className='todo'>
            <input type="checkbox"
                    checked={done}
                    key={keyProp}
                    onChange={() => setDone(keyProp)}/>
            <h2 style={{textDecoration: textDecor}}>{text}</h2>
            <button onClick={() => remTodo(keyProp)}>
                <img src={logo}/>
            </button>
        </li>
    );
}

export default Todo;
