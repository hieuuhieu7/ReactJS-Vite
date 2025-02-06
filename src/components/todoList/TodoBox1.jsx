
const TodoBox1 = (props) => {
    const { myFunction } = props;
    // myFunction('Hieu');

    const handleClick = () => {
        alert('Click');
    }

    const inputChange = (name) => {
        console.log(name);
    }

    return (
        <div className="todo-box-1">
            <input onChange={(event) => { inputChange(event.target.value) }} type="text" placeholder="Import data" />
            <button onClick={handleClick} >ADD</button>
        </div>
    )
}

export default TodoBox1;