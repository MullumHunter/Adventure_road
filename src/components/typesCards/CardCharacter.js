import styles from "../styles/CardChallenge.module.css";
import FooterCard from "../FooterCard";
import Way from "../Way";

function CardCharacter({way, img, footer}) {
    return (
        <div className={styles.Card} style={{backgroundImage: `url(${img})`}}>
            <Way title={way.nameWayUp} attributes={way.prize} />
            
            <FooterCard attributes={footer}/>
        </div>
    )
}

export default CardCharacter;
