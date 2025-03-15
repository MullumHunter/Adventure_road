import style from './styles/Way.module.css'
import Attributes from "./Attributes";
import WayPaper from "./WayPaper";
function Way({title, attributes, additional, typePaper }) {
    const isLongTitle = title.length > 23;
    const isLongerTitle = title.length > 30;
    const hasNewLine = title.includes('\n');
    
    return(
        <>
            <div className={`${style.Way}
                         ${isLongTitle ? style.WayLong : ""}
                         ${isLongerTitle ? style.WayLonger : ""}
                         ${hasNewLine ? style.WayLong : ""}`.trim()}>
                
                <WayPaper title={title} addComplex={additional} typePaper={typePaper}/>
                <Attributes attributes={attributes}/>
            </div>
        </>
    )
}

export default Way;
