import styles from './styles/WayPaaper.module.css'
import AdditionalComplexity from "./AdditionalComplexity";
function WayPaper({title,addComplex}) {
    return (
        <div className={styles.WayPaper} style={{backgroundImage: `url("/img/chain/paperWay9.png"`}}>
            <div className={styles.Text} style={{ whiteSpace: "pre-line" }}>
                { addComplex && <AdditionalComplexity/>}
                {title}
            </div>
        </div>
    )
}
export default WayPaper;
