export default function TodoInput({ handleAddTodo, todoText, setTodoText }) {
    const handleSubmit = (e) => {
      e.preventDefault()
      if (todoText.trim()) {
        handleAddTodo({
          id: Math.floor(Math.random() * 10000),
          text: todoText,
          isCompleted: false,
        })
        setTodoText("")
      }
    }
  
    return (
      <form className="todo-input" onSubmit={handleSubmit}>
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="What needs to be done?"
          aria-label="Enter a todo"
        />
        <button type="submit">Add Task</button>
      </form>
    )
  }
  
  