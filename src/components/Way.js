import style from './styles/Way.module.css'
import Attributes from "./Attributes";
import WayPaper from "./WayPaper";
function Way({title, attributes }) {
    return(
        <>
            <div className={style.Way}>
                <WayPaper title={title}/>
                <Attributes attributes={attributes}/>
            </div>
        </>
    )
}

export default Way;
