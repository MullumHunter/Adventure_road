import styles from './styles/wayCard.module.css'
import Rune from "./Rune";
function WayCard({img}) {
    return(<>
        <img className={styles.Card} src={img} alt="way card"/>
    </>
    )
}
export default WayCard;
