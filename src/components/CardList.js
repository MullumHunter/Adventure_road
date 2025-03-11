import CardChallenge from "./typesCards/CardСhallenge";
import styles from "./styles/CardList.module.css";
import CardCharacter from "./typesCards/CardCharacter";

function CardList({ id, cards, nameLibrary }) {
    return (<>
        <h3>{nameLibrary}</h3>
        <div className={styles.CardList}>
            {
                cards.map((card, _) => {
                switch (card.type) {
                    case "challenge": return<CardChallenge key={id}
                                  nameCard={card.nameCard}
                                  requirement={card.requirement}
                                  img={card.img}
                                  id={card.id}
                                  hard={card.hard}
                                  ways={card.ways}
                                  footer={card.footer}/>
                    case "character": return<CardCharacter key={id}
                                                          nameCard={card.nameCard}
                                                          img={card.img}
                                                          // ways={card.ways}
                                                          footer={card.footer}/>
                    default:
                        return null;
                }
            })}
        </div>
    </>);
}

export default CardList;
