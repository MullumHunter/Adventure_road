import styles from './styles/Rune.module.css'
function Rune({className}) {
    
    return (
            <img className={`${styles.Rune} ${styles[className]}`}
                        src="/img/history_icons/malefactor.png"
                        alt="wisdom"
            />
            )
    
}
export default Rune;
