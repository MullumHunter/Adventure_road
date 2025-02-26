import styles from './styles/Challenge.module.css'
import Requirements from "./requirements";
function Challenge({title}) {
    return(
        <>
            
            <div className={styles.Chain}>
                <Requirements/>
                <div className={styles.Challenge}>
                    Danke schön
                </div>
            </div>
        </>
    )
}

export default Challenge;
