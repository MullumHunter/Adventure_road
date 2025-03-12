import ItemCharacterCard from "./ItemCharacterCard";
import styles from './styles/ItemCharacterCard.module.css';

function TextCharacterCard({ text }) {
    const parseText = (text) => {
        const parts = text.split(/(\(experience\)|\(intelligence\)|\(sun\)|\(card_hero\)|\(month\)|\n)/g);
        
        return parts.map((part, index) => {
            if (part === "(experience)") {
                return <ItemCharacterCard key={index} type="experience" />;
            }
            if (part === "(month)") {
                return <ItemCharacterCard key={index} type="month" />;
            }
            if (part === "(card_hero)") {
                return <ItemCharacterCard key={index} type="card_hero" />;
            }
            if (part === "(sun)") {
                return <ItemCharacterCard key={index} type="sun" />;
            }
            if (part === "(intelligence)") {
                return <ItemCharacterCard key={index} type="intelligence" />;
            }
            if (part === "\n") {
                return <br key={index} />;
            }
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
