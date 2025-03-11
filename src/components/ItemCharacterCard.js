import styles from './styles/ItemCharacterCard.module.css'
function ItemCharacterCard({ type }) {
    switch (type) {
        case "heart":
            return <img className={styles.Item} src="/img/itemCharacterCard/experience.png" alt="heart" />;
        case "month":
            return <img className={styles.Item} src="/img/itemCharacterCard/moon.png" alt="month" />;
        default:
            return null;
    }
}
export default ItemCharacterCard;
