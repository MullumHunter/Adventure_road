import Card from "./Card";
import styles from './/styles/CardList.module.css'

function CardList({cards, name}) {
    return (
        <div className={styles.CardList}>
            {
                Array.from({ length: cards }).map((_, index) => (
                    <Card name={name} />
                ))
            }
        </div>
    )
}
export default CardList;
