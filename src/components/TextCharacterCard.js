import ItemCharacterCard from "./ItemCharacterCard";
import styles from "./styles/ItemCharacterCard.module.css";

function TextCharacterCard({ text }) {
    const emojiMap = {
        "(experience)": "experience",
        "(month)": "month",
        "(dark_way)": "dark_way",
        "(card_hero)": "card_hero",
        "(sun)": "sun",
        "(wisdom)": "wisdom",
        "(constitution)": "constitution",
        "(strength)": "strength",
        "(intelligence)": "intelligence",
    };
    
    const parseText = (text) => {
        return text.split(/(\(experience\)|\(strength\)|\(dark_way\)|\(constitution\)|\(intelligence\)|\(wisdom\)|\(sun\)|\(card_hero\)|\(month\)|\n)/g)
            .map((part, index) => {
                if (emojiMap[part]) {
                    return <ItemCharacterCard key={index} type={emojiMap[part]} />;
                }
                return part === "\n" ? <br key={index} /> : part;
            });
    };
    
    return <div className={styles.Box}>{parseText(text)}</div>;
}

export default TextCharacterCard;
