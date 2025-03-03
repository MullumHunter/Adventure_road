import styles from './styles/wayCard.module.css'
import Rune from "./Rune";
function WayCard() {
    return(<>
        <img className={styles.Card} src='/img/triumph_points/hero_card.png' alt="way card"/>
        <Rune className="RuneWay"/>
    </>
    )
}
export default WayCard;
