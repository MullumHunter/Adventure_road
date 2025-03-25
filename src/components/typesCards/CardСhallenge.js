import styles from "../styles/CardChallenge.module.css";
import Way from "../Way";
import Requirements from "../Requirements";
import FooterCard from "../FooterCard";
import PaperNPC from "../PaperNPC";

function CardChallenge({id, nameCard, hard, img, ways, requirement, footer}) {
    return (
        <div className={styles.Card} style={{ backgroundImage: `url(${img})`}}>
            <img className={styles.Fabric} src='/img/chain/fabricMax5.png' alt="fabric"/>
            
            <Way title={ways[0].nameWayUp} attributes={ways[0].prize} additional={ways[0].additional}/>
            <Requirements id={id} title={nameCard} runes={requirement} hard={hard} style={{paddingLeft:"4px"}}/>
            <Way title={ways[1].nameWayDown} attributes={ways[1].prize} additional={ways[1].additional}/>
            <div className={styles.BoxFooter}>
                <FooterCard attributes={footer}/>
            </div>
        </div>
    );
}

export default CardChallenge;
