import Way from "../Way";
import TextCharacterCard from "../TextCharacterCard";
import FooterCard from "../FooterCard";
import styles from "../styles/CardChallenge.module.css";
import PaperAllay from "../PaperAllay";

function CardAlly({way, img, footer, text}) {
    return(
        <div className={`${styles.Card} ${styles.Character}`} style={{backgroundImage: `url(${img})`}}>
            <Way title={way.nameWayUp} attributes={way.prize} additional={true} typePaper="ally"/>
            <PaperAllay/>
            
            <div className={styles.Box} style={{backgroundImage: `url("/img/chain/paperBig.png"`}}>
                <div></div>
                <TextCharacterCard text={text}/>
                <FooterCard attributes={footer}/>
            </div>
        </div>
    )
}
export default CardAlly;
