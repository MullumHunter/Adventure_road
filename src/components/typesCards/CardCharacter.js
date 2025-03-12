import styles from "../styles/CardChallenge.module.css";
import FooterCard from "../FooterCard";
import Way from "../Way";
import TextCharacterCard from "../TextCharacterCard";

function CardCharacter({way, img, footer, text}) {
    console.log(text)
    return (
        <div className={`${styles.Card} ${styles.Character}`} style={{backgroundImage: `url(${img})`}}>
            <Way title={way.nameWayUp} attributes={way.prize} />
            <div className={styles.Box} style={{backgroundImage: `url("/img/chain/paperBig.png"`}}>
                <TextCharacterCard text={text}/>
                <FooterCard attributes={footer}/>
            </div>
        </div>
    )
}
export default CardCharacter;
