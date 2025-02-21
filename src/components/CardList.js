import Card from "./Card";
import styles from './/styles/CardList.module.css'

function CardList({cards}) {
    return (
        <div className={styles.CardList}>
            {
                cards.map((card) => (
                    <Card />
                ))
            }
        </div>
    )
}
export default CardList;
