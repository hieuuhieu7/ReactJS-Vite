
import './todo.css';
import reactLogo from '../../assets/react.svg'
import TodoBox1 from './TodoBox1';
import TodoBox2 from './TodoBox2';
import { useState } from 'react';

const ToDoApp = () => {
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
    );
}

export default ToDoApp;