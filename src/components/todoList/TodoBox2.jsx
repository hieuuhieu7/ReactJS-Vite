
const TodoBox2 = (props) => {
    const { club, information, todoList } = props;
    console.log(props);
    return (
        <div className="todo-box-2">
            <p>Data - 01 </p>
            <p>Data - 02</p>
            <p>CLB yeu thich {club}</p>
            <p>Toi ten la {information.name}</p>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoBox2;