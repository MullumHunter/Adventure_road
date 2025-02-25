import styles from './styles/Challenge.module.css'
import Hard from "./Hard";
import Rune from "./Rune";
import Chain from "./Chain";
function Challenge({title}) {
    return(
        <>
            <div className={styles.Chain}>
                <div className={styles.Rune}>
                    <div className={styles.Hard}>
                        <Hard/>
                    </div>
                    <Chain/>
                    <Rune/>
                    <Chain/>
                    <Rune/>
                </div>
                <div className={styles.Challenge}>Danke schön</div>
            </div>
        </>
    )
}

export default Challenge;
