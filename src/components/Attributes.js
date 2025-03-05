import HistoryItem from "./HistoryItem";
import WayCard from "./WayCard";
import Rune from "./Rune";
import styles from './styles/Attributes.module.css'
import WayItem from "./WayItem";

function Attributes({attributes}) {
    console.log(attributes)
    return(
        <div className={styles.Attributes}>
            {attributes.map((attribute,_) => {
                switch (attribute.type) {
                    case "rune": return <Rune className="RuneWay"/>;
                    case "card": return <WayCard/>;
                    case "way": return <WayItem/>;
                    default:
                }
            })}
        </div>
    )
}
export default Attributes;
