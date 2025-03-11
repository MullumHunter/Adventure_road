import ItemCharacterCard from "./ItemCharacterCard";
import styles from './styles/ItemCharacterCard.module.css';
import style from "./styles/Way.module.css";

function TextCharacterCard({ text }) {
    // Функция для обработки текста
    const parseText = (text) => {
        const parts = text.split(/(\(experience\)|\(month\)|\n)/g); // Разделяем текст по (experience), (month) и \n
        
        return parts.map((part, index) => {
            if (part === "(experience)") {
                return <ItemCharacterCard key={index} type="experience" />;
            }
            if (part === "(month)") {
                return <ItemCharacterCard key={index} type="month" />;
            }
            if (part === "\n") {
                return <br key={index} />; // Если это символ новой строки, добавляем <br />
            }
            return part; // Остальной текст возвращаем как есть
        });
    };
    
    return (
        <div className={styles.Box}>
            {parseText(text)}
        </div>
    );
}

export default TextCharacterCard;
