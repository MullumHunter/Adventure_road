import styles from "./styles/PaperAllay.module.css";

function PaperNPC() {
    return(
        <div className={styles.Paper}  style={{ backgroundImage: `url(/img/chain/paper_villain.png)` }}>
            <p className={styles.P} style={{padding:"2px 12px 3px 28px"}}>Злодей</p>
        </div>
    )
}
export default PaperNPC;
