import styles from "../styles/CardСhallenge.module.css";
import FooterCard from "../FooterCard";
import Way from "../Way";

function CardCharacter({ways, img, footer}) {
    return (
        <div className={styles.Card} style={{backgroundImage: `url(${img})`}}>
            <Way title={ways[0].nameWayUp} attributes={ways[0].prize}/>
            
            <FooterCard attributes={footer}/>
        </div>
    )
}

export default CardCharacter;
