import Card from "./Card";
import styles from "./styles/CardList.module.css";

function CardList({ id, cards, nameLibrary }) {
    return (
        <div className={styles.CardList}>
            <h3>{nameLibrary}</h3>
            {
                cards.map((card, index) => (
                <Card key={id}
                      nameCard={card.nameCard}
                      requirement={card.requirement}
                      img={card.img}
                      id={card.id}
                      />
                ))
            }
        </div>
    );
}

export default CardList;
