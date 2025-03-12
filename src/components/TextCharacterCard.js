import ItemCharacterCard from "./ItemCharacterCard";
import styles from './styles/ItemCharacterCard.module.css';

function TextCharacterCard({ text }) {
    const parseText = (text) => {
        const parts = text.split(/(\(experience\)|\(month\)|\n)/g);
        
        return parts.map((part, index) => {
            if (part === "(experience)") {
                return <ItemCharacterCard key={index} type="experience" />;
            }
            if (part === "(month)") {
                return <ItemCharacterCard key={index} type="month" />;
            }
            if (part === "\n") {
                return <br key={index} />;
            }
            return part;
        });
    };
    
    return (
        <div className={styles.Box} style={{backgroundImage: `url("/img/chain/paperBig.png"`}}>
            {parseText(text)}
        </div>
    );
}

export default TextCharacterCard;
