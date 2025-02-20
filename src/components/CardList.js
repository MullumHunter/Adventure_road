import Card from "./Card";
import styles from './/styles/CardList.module.css'

function CardList() {
    return (
        <div className={styles.CardList}>
            <Card />
            <Card />
            <Card />
        </div>
    )
}
export default CardList;
