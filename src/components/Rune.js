import styles from './styles/Rune.module.css'
function Rune({className}) {
    return <img className={`${styles.Rune} ${styles[className]}`}
                src="/img/runes/charisma.png"
                alt="charisma"/>
}
export default Rune;
