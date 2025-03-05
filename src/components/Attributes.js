import HistoryItem from "./HistoryItem";
import WayCard from "./WayCard";
import Rune from "./Rune";
import styles from './styles/Attributes.module.css'
import WayItem from "./WayItem";

function Attributes({attributes}) {
    return(
        <div className={styles.Attributes}>
            {attributes.map((attribute,_) => {
                switch (attribute.type) {
                    case "rune": return <Rune className="RuneWay" rune={attribute.img}/>;
                    case "card": return <WayCard img={attribute.img}/>;
                    case "way": return <WayItem img={attribute.img}/>;
                    case "history": return <HistoryItem/>
                    default:
                }
            })}
        </div>
    )
}
export default Attributes;
