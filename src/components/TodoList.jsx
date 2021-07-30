import React from "react"
import { TodoItemFunction } from "./TodoItem"

export function TodoListFunction({todos, toggleTodo}){
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItemFunction key={todo.id} todo={todo} toggleTodo={toggleTodo} />
			))}
		</ul>
		);
}