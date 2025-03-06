import style from './styles/Way.module.css'
import Attributes from "./Attributes";
import WayPaper from "./WayPaper";
import AdditionalComplexity from "./AdditionalComplexity";
function Way({title, attributes }) {
    const isLongTitle = title.length > 25;
    return(
        <>
            <div className={`${style.Way} ${isLongTitle ? style.WayLong : ""}`}>
                <WayPaper title={title}/>
                <Attributes attributes={attributes}/>
            </div>
        </>
    )
}

export default Way;
