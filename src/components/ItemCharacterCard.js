import styles from './styles/ItemCharacterCard.module.css';

const images = {
    dark_way: "/img/triumph_points/dark_way.png",
    experience: "/img/itemCharacterCard/experience.png",
    month: "/img/itemCharacterCard/moon.png",
    intelligence: "/img/runes/intellect.png",
    sun: "/img/runes/wisdom.png",
    wisdom: "/img/triumph_points/sun.png",
    strength: "/img/runes/strength.png",
    constitution: "/img/runes/constitution.png",
    card_hero: "/img/triumph_points/hero_card.png",
};

function ItemCharacterCard({ type }) {
    return images[type] ? <img className={styles.Item} src={images[type]} alt={type} /> : null;
}

export default ItemCharacterCard;
