import { useState } from "react";
import styles from "./styleTable/Button.module.css";

function Button({ text, onClick }) {
    const [isActive, setIsActive] = useState(false);
    
    const handleClick = () => {
        setIsActive((prev) => !prev); // Переключение состояния активной кнопки
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
