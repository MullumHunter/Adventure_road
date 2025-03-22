import styles from './styles/ItemCharacterCard.module.css';

const images = {
    belief:"/img/history_icons/belief.png",
    justice:"/img/history_icons/justice.png",
    magic:"/img/history_icons/magic.png",
    malefactor:"/img/history_icons/malefactor.png",
    nature:"/img/history_icons/nature.png",
    noble:"/img/history_icons/noble.png",
    music:"/img/history_icons/music.png",
    
    dexterity:"/img/runes/dexterity.png",
    wisdom:"/img/runes/wisdom.png",
    constitution:"/img/runes/constitution.png",
    charisma:"/img/runes/charisma.png",
    strength:"/img/runes/strength.png",
    intelligence:"/img/runes/intellect.png",
    
    antihero_card:"",
    hero_card:"",
    card_hero:"/img/triumph_points/hero_card.png",
    dark_way:"/img/triumph_points/dark_way.png",
    light_way:"",
    experience:"/img/triumph_points/experience.png",
    month:"/img/triumph_points/moon.png",
    sun:"/img/triumph_points/sun.png",
};

function ItemCharacterCard({ type }) {
    return images[type] ? <img className={styles.Item} src={images[type]} alt={type} /> : null;
}

export default ItemCharacterCard;
