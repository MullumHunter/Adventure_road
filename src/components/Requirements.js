import Hard from "./Hard";
import Chain from "./Chain";
import Rune from "./Rune";
import styles from './styles/Requirements.module.css'
function Requirements({title ,runes, hard}) {
    return (
        <div className={styles.Container}>
            <div className={styles.Chain}>
                <Hard hard={hard}/>
                
                {runes.map((rune, index) => (
                    <>
                        <Chain/>
                        <Rune  rune={rune.img}/>
                    </>
                ))}
                <div className={styles.Challenge}>{title}</div>
            </div>
        </div>
    )
}

export default Requirements;
