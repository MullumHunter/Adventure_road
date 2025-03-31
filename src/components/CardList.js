import CardChallenge from "./typesCards/CardСhallenge";
import styles from "./styles/CardList.module.css";
import CardCharacter from "./typesCards/CardCharacter";
import CardAlly from "./typesCards/CardAlly";
import CardVillain from "./typesCards/CardVillain";

function CardList({ id, cards, nameLibrary }) {
    return (
        <div className={styles.CardList}>
            {
                cards.map((card, _) => {
                switch (card.type) {
                    case "challenge": return<CardChallenge key={card.id}
                                  nameCard={card.nameCard}
                                  requirement={card.requirement}
                                  img={card.img}
                                  id={card.id}
                                  hard={card.hard}
                                  ways={card.ways}
                                  footer={card.footer}/>
                    case "character": return <CardCharacter key={card.id}
                                                            text={card.text}
                                                            nameCard={card.nameCard}
                                                            img={card.img}
                                                            way={card.way}
                                                            footer={card.footer}/>
                    case "ally": return <CardAlly key={card.id}
                                                            text={card.text}
                                                            nameCard={card.nameCard}
                                                            img={card.img}
                                                            way={card.way}
                                                            footer={card.footer}/>
                    case "challenge": return<CardChallenge key={card.id}
                                                           nameCard={card.nameCard}
                                                           requirement={card.requirement}
                                                           img={card.img}
                                                           id={card.id}
                                                           hard={card.hard}
                                                           ways={card.ways}
                                                           footer={card.footer}/>
                    case "villian": return<CardVillain key={card.id}
                                                       text={card.text}
                                                       requirement={card.requirement}
                                                       img={card.img}
                                                       id={card.id}
                                                       hard={card.hard}
                                                       way={card.way}
                                                       footer={card.footer}/>
                    default: return null;
                }
            })}
        </div>
    );
}

export default CardList;
