import styles from './styles/PaperAllay.module.css'
function PaperAllay() {
    return(
        <div className={styles.Paper}  style={{ backgroundImage: `url(/img/chain/paper_allay.png)`}}>
            <p className={styles.P}>Союзник</p>
        </div>
    )
}
export default PaperAllay;
