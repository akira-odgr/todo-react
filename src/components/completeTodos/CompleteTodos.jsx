export const CompleteTodos = ({ todos, onClick }) => {
    return (
        <div className="complete-area">
            <p className="title">完了のTODO</p>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <div className="list-row">
                            <p>{todo}</p>
                            <button onClick={() => onClick(index)}>戻る</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
