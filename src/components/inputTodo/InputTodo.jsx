export const InputTodo = ({ inputText, onChange, onClick, disabled }) => {
    return (
        <div className="input-area">
            <input
                type="text"
                placeholder="Todoを入力"
                value={inputText}
                disabled={disabled}
                onChange={onChange}
            />
            <button disabled={disabled} onClick={onClick}>
                追加
            </button>
        </div>
    );
};
