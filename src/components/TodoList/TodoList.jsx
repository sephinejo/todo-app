import React, { useEffect, useState } from 'react';
import styles from './TodoList.module.css';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readTodosFromLocalStorage);

  const addHandler = (todo) => setTodos([...todos, todo]);

  const updateHandler = (updated) =>
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));

  const deleteHandler = (deleted) =>
    setTodos(todos.filter((todo) => todo.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={updateHandler}
            onDelete={deleteHandler}
          />
        ))}
      </ul>
      <AddTodo onAdd={addHandler} />
    </section>
  );
}

function readTodosFromLocalStorage() {
  console.log('readTodosFromLocalStorage');
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
