import style from './styles/Way.module.css'
import Rune from "./Rune";
function Way({title, attributes, className }) {
    return(
        <div className={style.Container}>
            <div  className={`${style.Way} ${className}`} style={{ backgroundImage: `url(/img/chain/paperWay3.png)`}}>
                <p>{title}</p>
            </div>
            <div className={style.Attributes}>
                <Rune className={style.RuneWay}/>
                <Rune className={style.RuneWay}/>
            </div>
        </div>
    )
}

export default Way;
