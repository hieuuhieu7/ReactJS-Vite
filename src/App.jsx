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

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="todo-container">
        <h1 className='todo-title'>TO DO LIST</h1>

        <TodoBox1 />
        <TodoBox2 />

        <div className='todo-logo'>
          <img src={reactLogo} alt="" />
        </div>
      </div>

      <img src="" alt="" />
    </>
  )
}

export default App
