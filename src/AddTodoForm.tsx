import React, { useState } from 'react';

interface Props {
    addTodo: AddTodo;
}

const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('');

    return (
        <form>
            <input 
                type="text"
                value={text}
                onChange={e => {
                    setText(e.target.value);
                }}
            />
            <button 
                type="submit"
                onClick={e => {
                    e.preventDefault();
                    addTodo(text);
                    setText('');
                }}
            >
                Add Task
            </button>
        </form>
    );
};

export default AddTodoForm;