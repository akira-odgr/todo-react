import { useState } from "react";
import "./Todo.scss";

export const Todo = () => {
    const [inputText, setInputText] = useState("");
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);

    const onChangeTodoText = (e) => {
        setInputText(e.target.value);
    };

    const onClickAdd = () => {
        if (!inputText) return;
        const newTodos = [...incompleteTodos, inputText];
        setIncompleteTodos(newTodos);
        setInputText("");
    };

    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);
        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    };

    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    };

    const onClickReturn = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    };

    return (
        <div className="container">
            <div className="input-area">
                <input
                    type="text"
                    placeholder="Todoを入力"
                    value={inputText}
                    onChange={onChangeTodoText}
                />
                <button onClick={onClickAdd}>追加</button>
            </div>
            <div className="incomplete-area">
                <p className="title">未完了のTODOです</p>
                <ul>
                    {incompleteTodos.map((todo, index) => (
                        <li key={todo}>
                            <div className="list-row">
                                <p>{todo}</p>
                                <div>
                                    <button
                                        onClick={() => onClickComplete(index)}
                                    >
                                        完了
                                    </button>
                                    <button
                                        onClick={() => onClickDelete(index)}
                                    >
                                        削除
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="complete-area">
                <p className="title">完了のTODO</p>
                <ul>
                    {completeTodos.map((todo, index) => (
                        <li key={todo}>
                            <div className="list-row">
                                <p>{todo}</p>
                                <button onClick={() => onClickReturn(index)}>
                                    戻る
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
