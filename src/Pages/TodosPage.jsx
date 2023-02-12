import React, {useState, useEffect, useRef} from 'react'
import Header from '../components/Header.jsx'
import CreaterTODO from '../components/CreaterTODO.jsx'
import './styles/TodosPage.less'
import TodoList from '../components/todoList.jsx';

export default function TodosPage() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  useEffect(() => {
    document.body.style.background = "white";
  }, []);
  useEffect(() => {
    saveTodos();
  }, [todos]);
  function addTodo(text){
    setTodos([...todos, {text: text, done: false, id: todos.length}]);
    saveTodos();
  }
  function setDone(id){
    const newTodos = todos.map((todo, index) => index === id ? {...todo, done: !todo.done} : todo);
    setTodos(newTodos);
  }
  function removeTodo(id){
    const newTodos = todos.filter((todo, index) => index !== id);
    setTodos(newTodos);
  }
  function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  return (
    <div >
      <Header name="Ваш список дел"/>
      <CreaterTODO creater={addTodo}/>
      <TodoList array={todos} doneFunction={setDone} removeTodos={removeTodo}/> 
    </div>
  )
}