
const TodoBox1 = (props) => {
    const { myFunction } = props;
    // myFunction('Hieu');
    return (
        <div className="todo-box-1">
            <input type="text" placeholder="Import data" />
            <button>ADD</button>
        </div>
    )
}

export default TodoBox1;