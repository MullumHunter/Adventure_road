import styles from './styles/Rune.module.css'
function Rune({className, rune}) {
    return (
            <img className={`${styles.Rune} ${styles[className]}`}
                        src={rune}
                        alt="wisdom"
            />
            )
    
}
export default Rune;
