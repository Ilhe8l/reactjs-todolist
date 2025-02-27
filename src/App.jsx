"use client"

import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])

  const [todoText, setTodoText] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  function saveToLocalStorage(newList) {
    localStorage.setItem("todos", JSON.stringify(newList))
  }

  function handleAddTodo(newTodo) {
    const newTodos = [...todos, newTodo]
    saveToLocalStorage(newTodos)
    setTodos(newTodos)
  }

  function handleDeleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id)
    saveToLocalStorage(newTodos)
    setTodos(newTodos)
  }

  function handleEditTodo(id) {
    const TextToBeEdited = todos.find((todo) => todo.id === id).text
    setTodoText(TextToBeEdited)
    handleDeleteTodo(id)
  }

  function handleToggleComplete(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted }
      }
      return todo
    })
    saveToLocalStorage(newTodos)
    setTodos(newTodos)
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }

  useEffect(() => {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(savedDarkMode)
    if (savedDarkMode) {
      document.body.classList.add("dark")
    }

    // Load todos from localStorage
    const localTodos = localStorage.getItem("todos")

    if (localTodos) {
      try {
        const parsedTodos = JSON.parse(localTodos)

        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos)
        } else {
          console.error("localStorage todos is not an array:", parsedTodos)
        }
      } catch (error) {
        console.error("Error parsing todos from localStorage:", error)
      }
    }
  }, [])

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode)
  }, [darkMode])

  return (
    <div className="app-container">
      <div className="app-header">
        <button className="theme-toggle" onClick={toggleDarkMode}>
          <i className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
        </button>
        <h1 className="app-title">Task Manager</h1>
      </div>
      <TodoInput todoText={todoText} setTodoText={setTodoText} handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        handleToggleComplete={handleToggleComplete}
      />
    </div>
  )
}

export default App

