import HistoryItem from "./HistoryItem";
import WayCard from "./WayCard";
import Rune from "./Rune";
import styles from './styles/Attributes.module.css'

function Attributes() {
    return(
        <div className={styles.Attributes}>
            <HistoryItem/>
            <WayCard/>
            <Rune className="RuneWay"/>
        </div>
    )
}
export default Attributes;
