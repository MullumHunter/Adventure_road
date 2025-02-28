import Hard from "./Hard";
import Chain from "./Chain";
import Rune from "./Rune";
import style from './styles/Requirements.module.css'
function Requirements() {
    return (
        <div className={style.Container}>
            <div className={style.Chain}>
                <Hard/>
                <Chain/>
                <Rune/>
                <Chain/>
                <Rune/>
                
                <div className={style.Challenge}>
                   345 we fwef w sss
                </div>
            </div>
        </div>
    )
}

export default Requirements;
