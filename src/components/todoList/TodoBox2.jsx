
const TodoBox2 = (props) => {
    const { club, information } = props;
    return (
        <div className="todo-box-2">
            <p>Data - 01 </p>
            <p>Data - 02</p>
            <p>CLB yeu thich {club}</p>
            <p>Toi ten la {information.name}</p>
        </div>
    )
}

export default TodoBox2;