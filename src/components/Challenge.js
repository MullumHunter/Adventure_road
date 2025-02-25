import styles from './styles/Challenge.module.css'
import Hard from "./Hard";
import Rune from "./Rune";
import Chain from "./Chain";
function Challenge({title}) {
    return(
        <>
            <div className={styles.Chain}>
                <div className={styles.Hard}>
                    <Hard/>
                </div>
                <div className={styles.Rune}>
                    <Chain/>
                    <Rune/>
                    <Chain/>
                    <Rune/>
                </div>
            </div>
            
            {/*<div className={styles.Challenge}>*/}
            {/*    {title}*/}
            {/*</div>*/}
        </>
    )
}

export default Challenge;
