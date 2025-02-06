
const TodoBox2 = (props) => {
    const { todoList, deleteTodo } = props;

    const handleClick = (id) => {
        deleteTodo(id)
    }

    return (
        <div className="todo-box-2">
            {todoList.map((item, index) => {
                console.log('Check: ', item, index);
                return (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }} key={item.id} >
                        <div>{item.name}</div>
                        <button
                            onClick={() => { handleClick(item.id) }}
                            style={{ cursor: "pointer" }}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoBox2;