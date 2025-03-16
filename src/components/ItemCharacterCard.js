import styles from './styles/ItemCharacterCard.module.css';

const images = {
    dark_way: "/img/triumph_points/dark_way.png",
    experience: "/img/triumph_points/experience.png",
    card_hero: "/img/triumph_points/hero_card.png",
    month: "/img/triumph_points/moon.png",
    sun: "/img/triumph_points/sun.png",
    intelligence: "/img/runes/intellect.png",
    wisdom: "/img/runes/wisdom.png",
    strength: "/img/runes/strength.png",
    constitution: "/img/runes/constitution.png",
    charisma: "/img/runes/charisma.png",
};

function ItemCharacterCard({ type }) {
    return images[type] ? <img className={styles.Item} src={images[type]} alt={type} /> : null;
}

export default ItemCharacterCard;
