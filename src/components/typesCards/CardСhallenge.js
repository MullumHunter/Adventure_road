import styles from "../styles/CardСhallenge.module.css";
import Way from "../Way";
import Requirements from "../Requirements";
import FooterCard from "../FooterCard";

function CardHallenge({id, nameCard, hard, img, ways, requirement, footer}) {
    return (
        <div className={styles.Card} style={{ backgroundImage: `url(${img})`}}>
            <img className={styles.Fabric} src='/img/chain/fabricMax5.png' alt="fabric"/>
            
            <Way title={ways[0].nameWayUp} attributes={ways[0].prize} additional={ways[0].additional}/>
            <Requirements title={nameCard} runes={requirement} hard={hard}/>
            <Way title={ways[1].nameWayDown} attributes={ways[1].prize} additional={ways[1].additional}/>
            <FooterCard attributes={footer}/>
        </div>
    );
}

export default CardHallenge;
