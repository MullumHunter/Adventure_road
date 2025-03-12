import styles from './styles/ItemCharacterCard.module.css'
function ItemCharacterCard({ type }) {
    switch (type) {
        case "experience":
            return <img className={styles.Item} src="/img/itemCharacterCard/experience.png" alt="experience" />;
        case "month":
            return <img className={styles.Item} src="/img/itemCharacterCard/moon.png" alt="month" />;
        case "intelligence":
            return <img className={styles.Item} src="/img/runes/intellect.png" alt="intelligence" />;
        case "sun":
            return <img className={styles.Item} src="/img/triumph_points/sun.png" alt="sun" />;
        case "card_hero":
            return <img className={styles.Item} src="/img/triumph_points/hero_card.png" alt="card_hero" />;
        default:
            return null;
    }
}
export default ItemCharacterCard;
