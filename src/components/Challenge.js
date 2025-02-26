import styles from './styles/Challenge.module.css'
import Requirements from "./requirements";
function Challenge({title}) {
    return (
        <>
            <div className={styles.Container}>
                <div className={styles.Chain}>
                    <Requirements/>
                    <div className={styles.Challenge}>{title}</div>
                </div>
            </div>
        </>
    )
}
export default Challenge;
