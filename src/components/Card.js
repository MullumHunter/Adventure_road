import styles from "./styles/Card.module.css";
import Way from "./Way";
import Requirements from "./Requirements";

function Card({id, nameCard, hard, img, ways, requirement,act,author,addition,cardNumber,year }) {
    return (
        <div className={styles.Card} style={{ backgroundImage: `url(${img})`}}>
            <img className={styles.Fabric} src='/img/chain/fabricMax5.png' alt="fabric"/>
            
            <Way title={ways[0].nameWayUp} attributes={ways[0].prize}/>
            <Requirements title={nameCard} runes={requirement} hard={hard}/>
            <Way title={ways[1].nameWayDown} attributes={ways[1].prize}/>
        </div>
    );
}

export default Card;
