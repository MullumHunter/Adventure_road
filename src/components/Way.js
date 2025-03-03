import style from './styles/Way.module.css'
import WayCard from "./WayCard";
import Rune from "./Rune";
import HistoryItem from "./HistoryItem";
function Way({title, attributes }) {
    return(
        <>
            <div className={style.Way}  style={{backgroundImage: `url(/img/chain/paperWay7.png)`}}>
                <p className={style.Text}>{title}
                    <div className={style.Attributes}>
                        <HistoryItem/>
                        <WayCard/>
                        <Rune className="RuneWay"/>
                    </div>
                </p>
            </div>
        </>
    )
}

export default Way;
