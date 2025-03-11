import ItemCharacterCard from "./ItemCharacterCard";
import styles from './styles/ItemCharacterCard.module.css'

function TextCharacterCard({ text }) {
    const parseText = (text) => {
        const parts = text.split(/(\(heart\)|\(month\))/g);
        
        return parts.map((part, index) => {
            
            if (part === "(heart)") return <ItemCharacterCard key={index} type="heart" />;
            if (part === "(month)") return <ItemCharacterCard key={index} type="month" />;
            
            return part;
        });
    };
    
    return (
        <div className={styles.Box}>
            {parseText(text)}
        </div>
    );
}

export default TextCharacterCard;
