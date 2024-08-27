export const IncompleteTodos = ({ todos, onClickComplete, onClickDelete }) => {
    return (
        <div className="incomplete-area">
            <p className="title">未完了のTODOです</p>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo}>
                        <div className="list-row">
                            <p>{todo}</p>
                            <div>
                                <button onClick={() => onClickComplete(index)}>
                                    完了
                                </button>
                                <button onClick={() => onClickDelete(index)}>
                                    削除
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
