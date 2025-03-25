import styles from "../styles/CardChallenge.module.css";
import Way from "../Way";
import Requirements from "../Requirements";
import FooterCard from "../FooterCard";
import TextCharacterCard from "../TextCharacterCard";
import PaperNPC from "../PaperNPC";
import Fabric from "../Fabric";

function CardVillain({way, img, footer, text, id, requirement, hard}) {
    return (
        <div className={`${styles.Card} ${styles.Character}`} style={{backgroundImage: `url(${img})`}}>
            <div className={styles.top}>
                <div className={styles.WayPaper}>
                    <Way title={way.nameWayUp} attributes={way.prize} typePaper="villain"/>
                    <PaperNPC/>
                    <Fabric style={{paddingTop: "30px"}}>
                        <Requirements id={id} title={""} runes={requirement} hard={hard}/>
                    </Fabric>
                </div>
                
            </div>
            
            <div className={styles.Box} style={{backgroundImage: `url("/img/chain/paperBig.png"`}}>
                <TextCharacterCard text={text}/>
                <FooterCard attributes={footer}/>
            </div>
        </div>
    )
}

export default CardVillain;
