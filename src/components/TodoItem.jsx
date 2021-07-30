import React from "react";
import Checkbox from '@material-ui/core/Checkbox';

export function TodoItemFunction({ todo, toggleTodo }){
    const { id, task, completed } = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    };

    return( 
    <li>
        <Checkbox defaultChecked={completed} color="secondary" onChange={handleTodoClick}/>        
        <span className="msg">{task}</span>
    </li>
    );
}

