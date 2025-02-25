import styles from "./styles/Card.module.css";
import Way from "./Way";
import Challenge from "./Challenge";

function Card({id, nameCard, hard, img, ways, requirement,act,author,addition,cardNumber,year }) {
    console.log(ways[0].nameWayUp)
    console.log(ways[0].nameWayDown)
    return (
        <div className={styles.Card} style={{ backgroundImage: `url(${img})`}}>
            
            <Way title={ways[0].nameWayUp}/>
            <Challenge title={nameCard}/>
            <Way title={ways[1].nameWayDown}/>
            
        </div>
    );
}

export default Card;
