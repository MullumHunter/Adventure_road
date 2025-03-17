import HistoryItem from "./HistoryItem";
import WayCard from "./WayCard";
import Rune from "./Rune";
import styles from './styles/Attributes.module.css'
import WayItem from "./WayItem";
import Name from "./Name";

function Attributes({attributes}) {
    return(
        <div className={styles.Attributes}>
            {attributes.map((attribute,index) => {
                switch (attribute.type) {
                    case "rune": return <Rune key={`${attribute.id} ${index}`} className="RuneWay" rune={attribute.img}/>;
                    case "card": return <WayCard key={`${attribute.id} ${index}`} img={attribute.img}/>;
                    case "way": return <WayItem key={`${attribute.id} ${index}`} img={attribute.img}/>;
                    case "history": return <HistoryItem key={`${attribute.id} ${index}`} img={attribute.img}/>;
                    case "name": return <Name key={`${attribute.id} ${index}`} img={attribute.img}/>
                    default: return <></>;
                }
            })}
        </div>
    )
}
export default Attributes;
