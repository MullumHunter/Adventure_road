import Hard from "./Hard";
import Chain from "./Chain";
import Rune from "./Rune";
import styles from './styles/Requirements.module.css'
function Requirements({title ,runes, hard, id}) {
    return (
        <div className={styles.Container}>
            <div className={styles.Chain}>
                <Hard hard={hard}/>
                
                {runes.map((rune, index) => (
                    <div key={`container_${rune.id}_${id}_${index}`}>
                        <Chain key={`chain_${rune.id}_${id}_${index}`} />
                        <Rune key={`rune_${rune.id}_${id}_${index}`} rune={rune.img}/>
                    </div>
                ))}
                <div className={styles.Challenge}>{title}</div>
            </div>
        </div>
    )
}

export default Requirements;
