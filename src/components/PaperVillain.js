import styles from "./styles/PaperAllay.module.css";

function PaperVillain() {
    return(
        <div className={styles.Paper}  style={{ backgroundImage: `url(/img/chain/paper_allay.png)` , width: "90px", paddingLeft: "18px" }}>
            <p className={styles.P}>Злодей</p>
        </div>
    )
}
export default PaperVillain;
