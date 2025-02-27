export default function TodoCard({ todo, handleDeleteTodo, handleEditTodo, handleToggleComplete }) {
    return (
      <li className="todo-item">
        <div
          className={`todo-checkbox ${todo.isCompleted ? "completed" : ""}`}
          onClick={() => handleToggleComplete(todo.id)}
          role="checkbox"
          aria-checked={todo.isCompleted}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleToggleComplete(todo.id)
            }
          }}
        >
          <i className="fa-solid fa-check"></i>
        </div>
  
        <p className={`todo-text ${todo.isCompleted ? "completed" : ""}`}>{todo.text}</p>
  
        <div className="todo-actions">
          <button className="todo-action-btn" onClick={() => handleEditTodo(todo.id)} aria-label="Edit task">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button className="todo-action-btn delete" onClick={() => handleDeleteTodo(todo.id)} aria-label="Delete task">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </li>
    )
  }
  
  