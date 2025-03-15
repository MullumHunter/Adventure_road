import Way from "../Way";
import TextCharacterCard from "../TextCharacterCard";
import FooterCard from "../FooterCard";
import styles from "../styles/CardChallenge.module.css";

function CardAlly({way, img, footer, text}) {
    return(
        <div className={`${styles.Card} ${styles.Character}`} style={{backgroundImage: `url(${img})`}}>
            <Way title={way.nameWayUp} attributes={way.prize} />
            <div className={styles.Box} style={{backgroundImage: `url("/img/chain/paperBig.png"`}}>
                <TextCharacterCard text={text}/>
                <FooterCard attributes={footer}/>
            </div>
        </div>
    )
}
export default CardAlly;
