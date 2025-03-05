import style from './styles/Way.module.css'
import Attributes from "./Attributes";
function Way({title, attributes }) {
    return(
        <>
            <div className={style.Way}  style={{backgroundImage: `url(/img/chain/paperWay7.png)`}}>
                <p className={style.Text}>{title}
                    <Attributes attributes={attributes}/>
                </p>
            </div>
        </>
    )
}

export default Way;
