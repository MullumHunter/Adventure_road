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
            
            <Way title={way.nameWayUp} attributes={way.prize} typePaper="villain"/>
            <Fabric>
                {/*<Requirements id={id} title={""} runes={requirement} hard={hard}/>*/}
            </Fabric>
                <PaperNPC/>
            {/*<div className={styles.Box} style={{backgroundImage: `url("/img/chain/paperBig.png"`}}>*/}
            {/*    <TextCharacterCard text={text}/>*/}
            {/*    <FooterCard attributes={footer}/>*/}
            {/*</div>*/}
        </div>
    )
}

export default CardVillain;
