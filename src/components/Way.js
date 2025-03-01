import style from './styles/Way.module.css'
import Rune from "./Rune";
function Way({title, attributes, className }) {
    console.log({className})
    return(
        <>
            <div  className={style.Way} style={{ backgroundImage: `url(/img/chain/paperWay6.png)`}}>
                <p className={style.Text}>{title}</p>
                <div className={style.Attributes}>
                    <Rune className="RuneWay"/>
                    <Rune className="RuneWay"/>
                </div>
            </div>
        </>
    )
}

export default Way;
