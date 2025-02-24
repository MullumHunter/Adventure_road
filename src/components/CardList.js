import Card from "./Card";
import styles from './/styles/CardList.module.css'

function CardList({cards, name, imgCard}) {
    return (
        <div className={styles.CardList}>
            {
                Array.from({length: cards}).map((_, index) => (
                    <Card imgCard={imgCard} nameCard="Мастер меча"/>
                ))
            }
        </div>
    )
}

export default CardList;
