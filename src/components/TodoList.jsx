import TodoCard from "./TodoCard"

export default function TodoList({ todos, handleDeleteTodo, handleEditTodo, handleToggleComplete }) {
  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <div className="empty-state">
          <p>No tasks yet. Add one above!</p>
        </div>
      ) : (
        todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
            handleToggleComplete={handleToggleComplete}
          />
        ))
      )}
    </ul>
  )
}

