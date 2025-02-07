
import './components/todoList/todo.css';
import reactLogo from './assets/react.svg'
import TodoBox1 from './components/todoList/TodoBox1';
import TodoBox2 from './components/todoList/TodoBox2';
import { useState } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';

const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: 'Data - 03' },
    // { id: 2, name: 'Data - 04' },
  ])

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100),
      name: name
    }
    setTodoList([...todoList, newTodo]);
  }

  const randomIntFromInterval = (min, max) => { // min and max included  
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id)
    setTodoList(newTodo);
  }

  return (
    <>
      <Header />
      <div className="todo-container">
        <h1 className='todo-title'>TO DO LIST</h1>
        <TodoBox1
          addNewTodo={addNewTodo} />
        {
          todoList.length > 0 ?
            <TodoBox2
              todoList={todoList}
              deleteTodo={deleteTodo} />
            :
            <div className='todo-logo'>
              <img src={reactLogo} alt="" />
            </div>
        }
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
