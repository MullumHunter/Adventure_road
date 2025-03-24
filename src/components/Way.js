import styles from './styles/Way.module.css'
import Attributes from "./Attributes";
import WayPaper from "./WayPaper";
function Way({title, attributes, additional, typePaper }) {
    const isLongTitle = title.length > 23;
    const isLongerTitle = title.length > 30;
    const hasNewLine = title.includes('\n');
    
    return(
        <div className={`${styles.Way}
                     ${isLongTitle ? styles.WayLong : ""}
                     ${isLongerTitle ? styles.WayLonger : ""}
                     ${hasNewLine ? styles.WayLong : ""}`.trim()}>
            
            <WayPaper title={title} addComplex={additional} typePaper={typePaper}/>
            <Attributes attributes={attributes}/>
        </div>
    )
}

export default Way;
