import React from 'react'

function TodoList() {
    
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        
    }
    
    return (
        <div>
            
        </div>
    )
}

export default TodoList
