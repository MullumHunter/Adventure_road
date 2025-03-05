import Hard from "./Hard";
import Chain from "./Chain";
import Rune from "./Rune";
import style from './styles/Requirements.module.css'
import {logDOM} from "@testing-library/dom";
function Requirements({title ,runes, hard}) {
    
    return (
        <div className={style.Container}>
            <div className={style.Chain}>
                <Hard hard={hard}/>
                
                {runes.map((rune, index) => (
                    <>
                        <Chain/>
                        <Rune  rune={rune.img}/>
                    </>
                ))}
                <div className={style.Challenge}>{title}</div>
            </div>
        </div>
    )
}

export default Requirements;
