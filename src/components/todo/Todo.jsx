import { useState } from "react";
import { InputTodo } from "../inputTodo/InputTodo";

import "./Todo.scss";
import { IncompleteTodos } from "../inCompleteTodos/InCompleteTodos";
import { CompleteTodos } from "../completeTodos/CompleteTodos";

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

    const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

    return (
        <div className="container">
            <InputTodo
                inputText={inputText}
                onChange={onChangeTodoText}
                onClick={onClickAdd}
                disabled={isMaxLimitIncompleteTodos}
            />
            {isMaxLimitIncompleteTodos ? (
                <p style={{ color: "red" }}>TODOが5個登録されています。</p>
            ) : (
                <p style={{ color: "white" }}>登録できるTODOは5個までです。</p>
            )}

            <IncompleteTodos
                todos={incompleteTodos}
                onClickComplete={onClickComplete}
                onClickDelete={onClickDelete}
            />
            <CompleteTodos todos={completeTodos} onClick={onClickReturn} />
        </div>
    );
};
