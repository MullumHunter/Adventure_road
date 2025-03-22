import ItemCharacterCard from "./ItemCharacterCard";
import styles from "./styles/ItemCharacterCard.module.css";

function TextCharacterCard({ text }) {
    const emojiMap = {
        "(belief)": "belief",
        "(justice)": "justice",
        "(magic)": "magic",
        "(malefactor)": "malefactor",
        "(nature)": "nature",
        "(noble)": "noble",
        "(music)": "music",
        
        "(dexterity)": "dexterity",
        "(wisdom)": "wisdom",
        "(constitution)": "constitution",
        "(charisma)": "charisma",
        "(strength)": "strength",
        "(intelligence)": "intelligence",
        
        "(antihero_card)": "antihero_card",
        "(hero_card)": "hero_card",
        "(card_hero)": "card_hero",
        "(dark_way)": "dark_way",
        "(light_way)": "light_way",
        "(experience)": "experience",
        "(month)": "month",
        "(sun)": "sun",
    };
    const parseText = (text) => {
        return text.split(/(\((?:belief|justice|magic|malefactor|nature|noble|music|dexterity|wisdom|constitution|charisma|strength|intelligence|antihero_card|hero_card|card_hero|dark_way|light_way|experience|month|sun)\)|\n)/g
            )
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
