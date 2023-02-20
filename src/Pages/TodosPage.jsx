import React, {useState, useEffect, useRef} from 'react'
import Header from '../components/Header.jsx'
import { useNavigate } from "react-router-dom";
import CreaterTODO from '../components/CreaterTODO.jsx'
import './styles/TodosPage.less'
import userLogo from '../images/user.svg'
import exitLogo from '../images/exit.svg'
import TodoList from '../components/todoList.jsx';
import {useSelector} from 'react-redux';
import Types from '../../redux/actionType.js';
import Profile from '../components/profile.jsx';


export default function TodosPage() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  const isAuth = useSelector(state => state.auth.auth);
  const user = useSelector(state => state.user.user.login);
  const navigate = useNavigate();

  
  useEffect(() => {
    document.body.style.background = "white";
    console.log(isAuth);
    console.log(user)
    if(!isAuth){
      navigate('/')
    }
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
    <div>
      <Profile username={user} LogoForUser={userLogo} LogoForExit={exitLogo}/>
      <Header name="Ваш список дел"/>
      <CreaterTODO creater={addTodo}/>
      <TodoList array={todos} doneFunction={setDone} removeTodos={removeTodo}/> 
    </div>
  )
}