// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import MyComponent from './components/learn/MyComponent'
// import { SecondComponent, ThirdComponent } from './components/learn/SecondComponent'

import './components/todoList/todo.css';
import reactLogo from './assets/react.svg'
import TodoBox1 from './components/todoList/TodoBox1';
import TodoBox2 from './components/todoList/TodoBox2';
import { useState } from 'react';

const App = () => {
  // const [count, setCount] = useState(0)

  const [todoList, setTodoList] = useState([
    // { id: 1, name: 'Data - 03' },
    // { id: 2, name: 'Data - 04' },
  ])

  // const clb = 'Chelsea';
  // const info = {
  //   name: 'Hieu',
  //   age: 22
  // }

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

  return (
    <>
      <div className="todo-container">
        <h1 className='todo-title'>TO DO LIST</h1>

        <TodoBox1
          addNewTodo={addNewTodo}
        />
        <TodoBox2
          // club={clb}
          // information={info}
          todoList={todoList}
        />

        <div className='todo-logo'>
          <img src={reactLogo} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
