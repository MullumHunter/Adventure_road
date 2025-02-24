import Card from "./Card";
import styles from "./styles/CardList.module.css";

function CardList({ id, cards, nameLibrary }) {
    return (
        <div className={styles.CardList}>
            <h3>{nameLibrary}</h3>
            {
                cards.map((card, index) => (
                <Card key={index}
                      nameCard={card.nameCard}
                      skills={card.skills}
                      img={card.img}
                      id={card.id}
                      title={card.title}/>
                ))
            }
        </div>
    );
}

export default CardList;
