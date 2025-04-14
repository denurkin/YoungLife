import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} ${styles.whiteNavbar}`}>
      <button 
        className={styles.burgerButton} 
        onClick={toggleMenu}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={isOpen}
      >
        <div className={`${styles.burgerLine} ${isOpen ? styles.line1Open : ""}`}></div>
        <div className={`${styles.burgerLine} ${isOpen ? styles.line2Open : ""}`}></div>
        <div className={`${styles.burgerLine} ${isOpen ? styles.line3Open : ""}`}></div>
      </button>

      <div className={`${styles.navMenu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <a href="/" onClick={() => setIsOpen(false)}>Главная</a>
          </li>
          <li>
            <a href="/about" onClick={() => setIsOpen(false)}>Книги</a>
          </li>
          <li>
            <a href="/about" onClick={() => setIsOpen(false)}>Рабочая тетрадь</a>
          </li>
          <li>
            <a href="/services" onClick={() => setIsOpen(false)}>Наставничество и учениство</a>
          </li>
          <li>
            <a href="/contact" onClick={() => setIsOpen(false)}>Оценка команды</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;