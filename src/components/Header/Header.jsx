import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Header.module.css';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {!darkMode && <MdDarkMode />}
        {darkMode && <MdOutlineLightMode />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                value === filter && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
