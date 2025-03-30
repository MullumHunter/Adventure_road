import { useState, useEffect } from "react";
import styles from "./styleTable/Button.module.css";

function Button({ text, onClick }) {
    // Восстановление состояния кнопки из localStorage или по умолчанию false
    const [isActive, setIsActive] = useState(() => {
        const savedState = localStorage.getItem("isButtonActive");
        return savedState ? JSON.parse(savedState) : false;
    });
    
    // Сохранение состояния кнопки в localStorage
    useEffect(() => {
        localStorage.setItem("isButtonActive", JSON.stringify(isActive));
    }, [isActive]);
    
    const handleClick = () => {
        setIsActive((prev) => !prev); // Переключение состояния кнопки
        if (onClick) onClick(); // Вызов callback для дальнейшей обработки
    };
    
    return (
        <button
            className={`${styles.Button} ${isActive ? styles.active : ""}`} // Добавление класса active
            onClick={handleClick}
        >
            {text}
        </button>
    );
}

export default Button;
