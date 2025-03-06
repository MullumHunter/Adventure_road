import styles from './styles/WayPaaper.module.css'
import AdditionalComplexity from "./AdditionalComplexity";
function WayPaper({title}) {
    return (
        <div className={styles.WayPaper} style={{backgroundImage: `url("/img/chain/paperWay8.png"`}}>
            <div className={styles.Text}>
                {title}
            </div>
        </div>
    )
}
export default WayPaper;
