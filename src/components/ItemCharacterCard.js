import styles from './styles/ItemCharacterCard.module.css'
function ItemCharacterCard({ type }) {
    switch (type) {
        case "experience":
            return <img className={styles.Item} src="/img/itemCharacterCard/experience.png" alt="experience" />;
        case "month":
            return <img className={styles.Item} src="/img/itemCharacterCard/moon.png" alt="month" />;
        case "card_hero":
            return <img className={styles.Item} src="/img/triumph_points/hero_card.png" alt="card_hero" />;
        default:
            return null;
    }
}
// card_hero
export default ItemCharacterCard;
