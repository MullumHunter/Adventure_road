import styles from './styles/WayPaaper.module.css'
import AdditionalComplexity from "./AdditionalComplexity";
function WayPaper({title,addComplex, typePaper}) {
    
    const backgroundImage = {
        ally: 'url("/img/chain/paperWay9.png")',
        villain: 'url("/img/chain/paperWay10.png")',
    }[typePaper] || 'url("/img/chain/paperWay8.png")';
    
    const additionalStyles = {
        ...(typePaper === "ally" && { width: "100%" }),
        ...(typePaper === "villain" && { color: "white"}),
    };
    
    return (
        <div className={styles.WayPaper} style={{backgroundImage, ...additionalStyles}}>
            <div className={styles.Text} style={{ whiteSpace: "pre-line" }}>
                { addComplex && <AdditionalComplexity/>}
                {title}
            </div>
        </div>
    )
}
export default WayPaper;
