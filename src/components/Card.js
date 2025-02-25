import styles from "./styles/Card.module.css";
import cardCharacteristics from './styles/CardCharacteristics.module.css'
import Way from "./Way";

function Card({id, nameCard, hard, img, ways, requirement,act,author,addition,cardNumber,year }) {
    console.log(ways[0].nameWayUp)
    console.log(ways[0].nameWayDown)
    return (
        <div className={styles.Card} style={{ backgroundImage: `url(${img})`}}>
            {/*<div className={cardCharacteristics.Way}>*/}
                
                    <Way title={ways[0].nameWayUp}/>
                    <Way title={ways[1].nameWayDown}/>
                
            {/*</div>*/}
        </div>
    );
}

export default Card;
