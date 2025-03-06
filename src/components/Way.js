import style from './styles/Way.module.css'
import Attributes from "./Attributes";
import WayPaper from "./WayPaper";
function Way({title, attributes, additional }) {
    const isLongTitle = title.length > 25;
    return(
        <>
            <div className={`${style.Way} ${isLongTitle ? style.WayLong : ""}`}>
                <WayPaper title={title} addComplex={additional}/>
                <Attributes attributes={attributes}/>
            </div>
        </>
    )
}

export default Way;
