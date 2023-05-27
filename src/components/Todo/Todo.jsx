import React from 'react';
import styles from './Todo.module.css';
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const changeHandler = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const deleteHandler = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={id}
        checked={status === 'completed'}
        onChange={changeHandler}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={deleteHandler}>
          <BsFillTrash3Fill />
        </button>
      </span>
    </li>
  );
}
