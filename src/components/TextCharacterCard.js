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
        "(charisma)": "charisma",
    };
    
    const parseText = (text) => {
        return text.split(/(\(experience\)|\(strength\)|\(dark_way\)|\(constitution\)|\(charisma\)|\(intelligence\)|\(wisdom\)|\(sun\)|\(card_hero\)|\(month\)|\n)/g)
            .map((part, index) => {
                if (emojiMap[part]) {
                    return <ItemCharacterCard key={index} type={emojiMap[part]} />;
                }
                return part === "\n" ? <br key={index} /> : part;
            });
    };
    
    return <div className={styles.Box}>
        <div>
            {parseText(text)}
        </div>
    </div>;
}

export default TextCharacterCard;
