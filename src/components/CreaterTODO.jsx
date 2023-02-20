import React, { useState } from 'react'


export default function CreaterTODO({creater, ...props}) { 
  const [inputValue, setInputValue] = React.useState('');

  function addTodo(name){
    if(inputValue){
      setInputValue('');
      creater(inputValue);
    }
  }
  function onkeyPressed(event){
    if(event.key === "Enter"){
      if(inputValue){
        setInputValue('');
        creater(inputValue);
      }
    }
  }
  
  return (
    <div className="createrTODO">
        <input value={inputValue} 
               onChange={el => setInputValue(el.target.value)}
               onKeyDown={onkeyPressed}
               placeholder="Введите название"
        />
        <button onClick={() => addTodo(inputValue)}>Добавить</button>
    </div>
  )
}
