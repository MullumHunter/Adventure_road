import CardHallenge from "./typesCards/CardСhallenge";
import styles from "./styles/CardList.module.css";

function CardList({ id, cards, nameLibrary }) {
    return (<>
            <h3>{nameLibrary}</h3>
            <div className={styles.CardList}>
                {
                    cards.map((card, index) => (
                    <CardHallenge key={id}
                                  nameCard={card.nameCard}
                                  requirement={card.requirement}
                                  img={card.img}
                                  id={card.id}
                                  hard={card.hard}
                                  ways={card.ways}
                                  footer={card.footer}
                          />
                    ))
                }
            </div>
    </>
    );
}

export default CardList;
