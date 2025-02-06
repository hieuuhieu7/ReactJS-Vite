import { useState } from "react";

const TodoBox1 = (props) => {
    const { addNewTodo } = props;
    // myFunction('Hieu');

    const [valueInput, setValueInput] = useState('Hieu');

    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput('');
        console.log('Check value input: ', valueInput);
    }

    const inputChange = (name) => {
        setValueInput(name);
    }

    return (
        <div className="todo-box-1">
            <input onChange={(event) => { inputChange(event.target.value) }}
                value={valueInput}
                type="text"
                placeholder="Import data"
            />

            <button onClick={handleClick} >ADD</button>

            <div>
                <p>input {valueInput} </p>
            </div>
        </div>
    )
}

export default TodoBox1;